class SigenHouseCard extends HTMLElement {
  setConfig(config) {
    if (!config.entities) {
      throw new Error("Sigen House Card: 'entities' is verplicht in de configuratie.");
    }

    // Verwachte structuur:
    // entities:
    //   battery_power: sensor.xxx
    //   battery_soc: sensor.xxx
    //   pv_power: sensor.xxx
    //   grid_import_power: sensor.xxx
    //   grid_export_power: sensor.xxx
    //   load_power: sensor.xxx

    this._config = config;

    // Reset DOM
    this.innerHTML = "";
    this._card = document.createElement("ha-card");
    this._card.classList.add("sigen-house-card");

    this._card.innerHTML = `
      <style>
        .sigen-house-card {
          overflow: hidden;
        }

        .sigen-wrapper {
          position: relative;
          width: 100%;
          /* Verhouding van je huis.png – zonodig aanpassen */
          padding-top: 60%;
          background-image: url("/hacsfiles/lovelace-sigen-house-card/huis.png");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          box-sizing: border-box;
        }

        .sigen-overlay {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4px 8px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-size: 11px;
          line-height: 1.2;
          text-align: center;
          min-width: 55px;
        }

        .sigen-overlay .label {
          font-weight: 600;
          margin-bottom: 2px;
        }

        .sigen-overlay .value-row {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .sigen-overlay .value {
          font-size: 14px;
          font-weight: 700;
        }

        .sigen-overlay .unit {
          font-size: 10px;
          opacity: 0.8;
        }

        .sigen-overlay--battery-soc {
          border-radius: 50%;
          padding: 6px;
          min-width: 0;
        }

        .sigen-overlay--battery-soc .value {
          font-size: 15px;
        }

        .sigen-overlay--battery-soc .label {
          font-size: 9px;
        }

        /* Globale posities van de "bubbels" op de huis.png
           Pas percentages aan totdat het mooi op je afbeelding klopt. */

        /* PV boven het dak */
        .pos-pv {
          top: 10%;
          left: 50%;
          transform: translate(-50%, 0);
        }

        /* Grid / net rechtsboven */
        .pos-grid-import {
          top: 10%;
          right: 6%;
          transform: translate(0, 0);
        }

        .pos-grid-export {
          top: 25%;
          right: 6%;
          transform: translate(0, 0);
        }

        /* House load in het midden */
        .pos-load {
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Battery links onder */
        .pos-battery {
          bottom: 8%;
          left: 12%;
          transform: translate(0, 0);
        }

        .pos-battery-soc {
          bottom: 26%;
          left: 16%;
          transform: translate(-50%, 0);
        }

        /* Kleine mist/placeholder stijl */
        .missing {
          opacity: 0.4;
          font-style: italic;
        }

        .card-header {
          padding: 8px 16px 0;
        }
      </style>

      ${this._config.title
        ? `<div class="card-header"><div class="name">${this._config.title}</div></div>`
        : ""
      }

      <div class="sigen-wrapper">
        <!-- PV -->
        <div class="sigen-overlay pos-pv" data-key="pv_power">
          <div class="label">PV</div>
          <div class="value-row">
            <span class="value">-</span>
            <span class="unit"></span>
          </div>
        </div>

        <!-- Grid import -->
        <div class="sigen-overlay pos-grid-import" data-key="grid_import_power">
          <div class="label">Grid in</div>
          <div class="value-row">
            <span class="value">-</span>
            <span class="unit"></span>
          </div>
        </div>

        <!-- Grid export -->
        <div class="sigen-overlay pos-grid-export" data-key="grid_export_power">
          <div class="label">Grid uit</div>
          <div class="value-row">
            <span class="value">-</span>
            <span class="unit"></span>
          </div>
        </div>

        <!-- Load / Huisverbruik -->
        <div class="sigen-overlay pos-load" data-key="load_power">
          <div class="label">Huis</div>
          <div class="value-row">
            <span class="value">-</span>
            <span class="unit"></span>
          </div>
        </div>

        <!-- Battery power -->
        <div class="sigen-overlay pos-battery" data-key="battery_power">
          <div class="label">Battery</div>
          <div class="value-row">
            <span class="value">-</span>
            <span class="unit"></span>
          </div>
        </div>

        <!-- Battery SOC -->
        <div class="sigen-overlay sigen-overlay--battery-soc pos-battery-soc" data-key="battery_soc">
          <div class="label">SOC</div>
          <div class="value-row">
            <span class="value">-</span>
            <span class="unit">%</span>
          </div>
        </div>
      </div>
    `;

    this.appendChild(this._card);
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config || !this._card) return;

    const ents = this._config.entities;

    this._updateValue("pv_power", ents.pv_power);
    this._updateValue("grid_import_power", ents.grid_import_power);
    this._updateValue("grid_export_power", ents.grid_export_power);
    this._updateValue("load_power", ents.load_power);
    this._updateValue("battery_power", ents.battery_power);
    this._updateValue("battery_soc", ents.battery_soc, {forceUnit: "%"});
  }

  _updateValue(key, entityId, options = {}) {
    const el = this._card.querySelector(`.sigen-overlay[data-key="${key}"]`);
    if (!el) return;

    // Als entity niet geconfigureerd is
    if (!entityId) {
      el.classList.add("missing");
      el.querySelector(".value").textContent = "-";
      const unitEl = el.querySelector(".unit");
      if (unitEl && options.forceUnit) {
        unitEl.textContent = options.forceUnit;
      } else if (unitEl) {
        unitEl.textContent = "";
      }
      return;
    }

    const stateObj = this._hass.states[entityId];

    if (!stateObj) {
      el.classList.add("missing");
      el.querySelector(".value").textContent = "-";
      const unitEl = el.querySelector(".unit");
      if (unitEl && options.forceUnit) {
        unitEl.textContent = options.forceUnit;
      } else if (unitEl) {
        unitEl.textContent = "";
      }
      return;
    }

    el.classList.remove("missing");

    let value = stateObj.state;
    let unit = options.forceUnit || stateObj.attributes.unit_of_measurement || "";

    // Kleine formatting: 0 → 0, 0.1234 → 0.12
    const num = Number(value);
    if (!isNaN(num)) {
      if (Math.abs(num) >= 100) {
        value = Math.round(num).toString();
      } else {
        value = num.toFixed(2).replace(/\.00$/, "");
      }
    }

    el.querySelector(".value").textContent = value;
    const unitEl = el.querySelector(".unit");
    if (unitEl) unitEl.textContent = unit;
  }

  getCardSize() {
    return 4;
  }

  static getStubConfig() {
    return {
      title: "Sigen House",
      entities: {
        battery_power: "sensor.sigen_bat_battery_power",
        battery_soc: "sensor.sigen_bat_battery_state_of_charge",
        pv_power: "sensor.sigen_bat_pv_power",
        grid_import_power: "sensor.sigen_bat_grid_import_power",
        grid_export_power: "sensor.sigen_bat_grid_export_power",
        load_power: "sensor.sigen_bat_plant_active_power",
      },
    };
  }
}

customElements.define("sigen-house-card", SigenHouseCard);
