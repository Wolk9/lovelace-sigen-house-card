class SigenHouseCard extends HTMLElement {
  setConfig(config) {
    if (!config.entities) {
      throw new Error("Sigen House Card: 'entities' is verplicht in de configuratie.");
    }

    this._config = config;
    this._lastValues = {};

    // Automatisch pad bepalen op basis van waar de JS geladen is
    // Werkt voor zowel HACS (/hacsfiles/...) als manual (/local/...)
    try {
      const url = new URL(import.meta.url);
      this._assetBasePath = url.pathname.replace(/[^/]+$/, "");
    } catch (e) {
      // Fallback als import.meta.url niet beschikbaar is
      this._assetBasePath = "/hacsfiles/lovelace-sigen-house-card/";
    }

    this.innerHTML = "";
    this._card = document.createElement("ha-card");
    this._card.classList.add("sigen-house-card");

    const title = this._config.title
      ? `<div class="sigen-title">${this._config.title}</div>`
      : "";

    this._card.innerHTML = `
      <style>
        .sigen-house-card {
          --sigen-bg: var(--card-background-color, #ffffff);
          --sigen-border-radius: var(--ha-card-border-radius, 16px);
          --sigen-text-color: var(--primary-text-color, #222);
          --sigen-muted-text: var(--secondary-text-color, #666);
          --sigen-accent: var(--primary-color, #03a9f4);
          padding: 16px;
          box-sizing: border-box;
        }

        .sigen-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .sigen-house-wrapper {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .sigen-svg {
          width: 100%;
          display: block;
        }

        .sigen-device-label {
          font-size: 9px;
          fill: var(--sigen-muted-text);
          text-anchor: middle;
        }

        .sigen-line-static {
          stroke: #555;
          stroke-width: 1.5;
          fill: none;
        }

        .sigen-overlay rect.label-bg {
          fill: rgba(0,0,0,0.05);
          rx: 4;
          ry: 4;
        }

        .sigen-overlay text.label {
          font-size: 9px;
          fill: var(--sigen-muted-text);
        }

        .sigen-overlay text.value {
          font-size: 12px;
          font-weight: 600;
          fill: var(--sigen-text-color);
        }

        .sigen-overlay text.unit {
          font-size: 9px;
          fill: var(--sigen-muted-text);
        }

        .sigen-overlay.missing text.value {
          fill: var(--sigen-muted-text);
        }

        .sigen-overlay.missing rect.label-bg {
          fill: rgba(255,0,0,0.05);
        }

        /* Geanimeerde flow-lijnen */

        .flow-line {
          stroke: var(--sigen-accent);
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
          stroke-dasharray: 6 10;
          animation: sigen-flow 2.5s linear infinite;
          opacity: 0; /* standaard uit */
          transition: opacity 0.3s ease;
        }

        .flow-line.idle {
          opacity: 0.12;
          animation-play-state: paused;
        }

        .flow-line.active {
          opacity: 1;
          animation-play-state: running;
        }

        .flow-line.reverse {
          animation-direction: reverse;
        }

        @keyframes sigen-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -40; }
        }
      </style>

      ${title}
      <div class="sigen-house-wrapper">
        <svg class="sigen-svg" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">

          <!-- HUIS + PV (jouw 3D/perspectief SVG) -->
          <g id="house" data-device="house">
            <image
              data-src="sigen-house.svg"
              x="140"
              y="80"
              width="360"
              height="230"
              preserveAspectRatio="xMidYMid meet" />
          </g>

          <!-- SIGENSTOR BATTERY/INVERTER -->
          <g id="sigenstor" data-device="battery">
            <image
              data-src="sigenstor-1-2.svg"
              x="540"
              y="120"
              width="150"
              height="220"
              preserveAspectRatio="xMidYMid meet" />
          </g>

          <!-- GATEWAY -->
          <g id="gateway" data-device="gateway">
            <image
              data-src="sigen-gateway.svg"
              x="120"
              y="40"
              width="100"
              height="110"
              preserveAspectRatio="xMidYMid meet" />
          </g>

          <!-- EV-CHARGER -->
          <g id="ev-charger" data-device="ev">
            <image
              data-src="sigen-ev-charger.svg"
              x="120"
              y="230"
              width="100"
              height="140"
              preserveAspectRatio="xMidYMid meet" />
          </g>

          <!-- GRID (simpele paal) -->
          <g id="grid" data-device="grid" transform="translate(40,140)">
            <rect x="8" y="0" width="12" height="90" fill="#30343a"/>
            <rect x="-4" y="-6" width="36" height="10" fill="#30343a"/>
            <circle cx="2" cy="-1" r="2" fill="#555"/>
            <circle cx="28" cy="-1" r="2" fill="#555"/>
            <text x="14" y="110" class="sigen-device-label">GRID</text>
          </g>

          <!-- LOAD (blokje onder huis) -->
          <g id="load" data-device="load">
            <rect x="330" y="300" width="90" height="30" rx="4"
              fill="#20252b" stroke="#14171b" stroke-width="1.2" />
            <text x="375" y="320" class="sigen-device-label">LOAD</text>
          </g>

          <!-- STATISCHE DUNNE LIJNEN (achtergrond) -->

          <!-- grid -> huis -->
          <path class="sigen-line-static"
            d="M80,140 C 140,140 200,160 240,190" />

          <!-- pv -> huis -->
          <path class="sigen-line-static"
            d="M340,90 C 350,120 350,145 340,165" />

          <!-- huis -> batterij -->
          <path class="sigen-line-static"
            d="M480,210 C 520,210 550,210 570,210" />

          <!-- huis -> load -->
          <path class="sigen-line-static"
            d="M380,260 C 380,280 380,295 375,300" />

          <!-- huis -> ev -->
          <path class="sigen-line-static"
            d="M260,250 C 220,250 190,250 170,260" />

          <!-- ===== GEANIMEERDE FLOW-LIJNEN ===== -->

          <!-- GRID <-> HUIS -->
          <path
            class="flow-line idle"
            data-flow="grid"
            d="M80,140 C 140,140 200,160 240,190" />

          <!-- PV -> HUIS -->
          <path
            class="flow-line idle"
            data-flow="pv"
            d="M340,90 C 350,120 350,145 340,165" />

          <!-- HUIS <-> BATTERY -->
          <path
            class="flow-line idle"
            data-flow="battery"
            d="M480,210 C 520,210 550,210 570,210" />

          <!-- HUIS -> LOAD -->
          <path
            class="flow-line idle"
            data-flow="load"
            d="M380,260 C 380,280 380,295 375,300" />

          <!-- HUIS -> EV -->
          <path
            class="flow-line idle"
            data-flow="ev"
            d="M260,250 C 220,250 190,250 170,260" />

          <!-- ===== OVERLAYS MET WAARDEN ===== -->

          <!-- PV power -->
          <g class="sigen-overlay" data-key="pv_power" data-device="pv">
            <rect class="label-bg" x="430" y="40" width="200" height="30" />
            <text class="label" x="436" y="49">PV</text>
            <text class="value" x="436" y="60">-</text>
            <text class="unit" x="620" y="60"></text>
          </g>

          <!-- Grid import/export -->
          <g class="sigen-overlay" data-key="grid_import_power" data-device="grid">
            <rect class="label-bg" x="40" y="40" width="170" height="30" />
            <text class="label" x="46" y="49">Grid in</text>
            <text class="value" x="46" y="60">-</text>
            <text class="unit" x="200" y="60"></text>
          </g>

          <g class="sigen-overlay" data-key="grid_export_power" data-device="grid">
            <rect class="label-bg" x="40" y="80" width="170" height="30" />
            <text class="label" x="46" y="89">Grid uit</text>
            <text class="value" x="46" y="100">-</text>
            <text class="unit" x="200" y="100"></text>
          </g>

          <!-- Load power -->
          <g class="sigen-overlay" data-key="load_power" data-device="load">
            <rect class="label-bg" x="300" y="335" width="160" height="30" />
            <text class="label" x="306" y="344">Huis</text>
            <text class="value" x="306" y="355">-</text>
            <text class="unit" x="450" y="355"></text>
          </g>

          <!-- Battery power -->
          <g class="sigen-overlay" data-key="battery_power" data-device="battery">
            <rect class="label-bg" x="560" y="260" width="190" height="30" />
            <text class="label" x="566" y="269">Battery</text>
            <text class="value" x="566" y="280">-</text>
            <text class="unit" x="740" y="280"></text>
          </g>

          <!-- Battery SOC -->
          <g class="sigen-overlay" data-key="battery_soc" data-device="battery">
            <rect class="label-bg" x="560" y="300" width="190" height="30" />
            <text class="label" x="566" y="309">SOC</text>
            <text class="value" x="566" y="320">-</text>
            <text class="unit" x="740" y="320">%</text>
          </g>

          <!-- EV power -->
          <g class="sigen-overlay" data-key="ev_power" data-device="ev">
            <rect class="label-bg" x="40" y="300" width="180" height="30" />
            <text class="label" x="46" y="309">EV</text>
            <text class="value" x="46" y="320">-</text>
            <text class="unit" x="210" y="320"></text>
          </g>

        </svg>
      </div>
    `;

    this.appendChild(this._card);
    this._applyAssetPaths();

    // Devices modulair verbergen
    const devicesConfig = this._config.devices || {};
    ["pv", "grid", "battery", "load", "ev", "gateway", "house"].forEach((dev) => {
      if (devicesConfig[dev] === false) {
        this._card
          .querySelectorAll(`[data-device="${dev}"], [data-flow="${dev}"]`)
          .forEach((el) => (el.style.display = "none"));
      }
    });
  }

  _applyAssetPaths() {
    const base = this._assetBasePath || "";
    if (!this._card) return;
    this._card.querySelectorAll("image[data-src]").forEach((img) => {
      const src = img.getAttribute("data-src");
      if (!src) return;
      const full = `${base}${src}`;
      img.setAttribute("href", full);
      img.setAttribute("xlink:href", full);
    });
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
    this._updateValue("battery_soc", ents.battery_soc, { forceUnit: "%" });
    this._updateValue("ev_power", ents.ev_power); // optioneel

    this._updateFlows();
  }

  _updateValue(key, entityId, options = {}) {
    const el = this._card.querySelector(`.sigen-overlay[data-key="${key}"]`);
    if (!el) return;

    const hideMissing = !!this._config?.hide_missing;
    const forceUnit = options.forceUnit;

    const setMissing = () => {
      if (hideMissing) {
        el.style.display = "none";
        return;
      }
      el.style.display = "";
      el.classList.add("missing");
      const valueEl = el.querySelector(".value");
      const unitEl = el.querySelector(".unit");
      if (valueEl) valueEl.textContent = "-";
      if (unitEl) unitEl.textContent = forceUnit || "";
      this._lastValues[key] = null;
    };

    if (!entityId) {
      setMissing();
      return;
    }

    const stateObj = this._hass.states[entityId];
    if (!stateObj) {
      setMissing();
      return;
    }

    el.style.display = "";
    el.classList.remove("missing");

    let value = stateObj.state;
    let unit = forceUnit || stateObj.attributes.unit_of_measurement || "";

    const num = Number(value);
    if (!isNaN(num)) {
      this._lastValues[key] = num;
      if (Math.abs(num) >= 100) {
        value = Math.round(num).toString();
      } else {
        value = num.toFixed(2).replace(/\.00$/, "");
      }
    } else {
      this._lastValues[key] = null;
    }

    const valueEl = el.querySelector(".value");
    const unitEl = el.querySelector(".unit");
    if (valueEl) valueEl.textContent = value;
    if (unitEl) unitEl.textContent = unit;
  }

  _updateFlows() {
    const flows = this._lastValues || {};
    const threshold = typeof this._config.flow_threshold_w === "number"
      ? this._config.flow_threshold_w
      : 50;

    const gi = flows.grid_import_power || 0;
    const ge = flows.grid_export_power || 0;
    const netGrid = gi - ge;
    this._setFlowSigned("grid", netGrid, threshold);

    this._setFlowUnsigned("pv", flows.pv_power, threshold);
    this._setFlowSigned("battery", flows.battery_power, threshold);
    this._setFlowUnsigned("load", flows.load_power, threshold);
    this._setFlowUnsigned("ev", flows.ev_power, threshold);
  }

  _setFlowUnsigned(flowId, value, threshold) {
    const path = this._card.querySelector(`.flow-line[data-flow="${flowId}"]`);
    if (!path) return;

    path.classList.remove("active", "idle", "reverse");

    if (value == null || Math.abs(value) < threshold) {
      path.classList.add("idle");
      return;
    }

    path.classList.add("active");
  }

  _setFlowSigned(flowId, value, threshold) {
    const path = this._card.querySelector(`.flow-line[data-flow="${flowId}"]`);
    if (!path) return;

    path.classList.remove("active", "idle", "reverse");

    if (value == null || Math.abs(value) < threshold) {
      path.classList.add("idle");
      return;
    }

    path.classList.add("active");
    if (value < 0) {
      path.classList.add("reverse");
    }
  }

  getCardSize() {
    return 4;
  }

  static getStubConfig() {
    return {
      title: "Sigenstor",
      entities: {
        battery_power: "sensor.sigen_bat_battery_power",
        battery_soc: "sensor.sigen_bat_battery_state_of_charge",
        pv_power: "sensor.sigen_bat_pv_power",
        grid_import_power: "sensor.sigen_bat_grid_import_power",
        grid_export_power: "sensor.sigen_bat_grid_export_power",
        load_power: "sensor.sigen_bat_plant_active_power",
        // optioneel:
        // ev_power: "sensor.sigen_ev_charger_power",
      },
      hide_missing: true,
      devices: { pv: true, grid: true, battery: true, load: true, ev: true, gateway: true, house: true },
      flow_threshold_w: 50,
    };
  }
}

if (!customElements.get("sigen-house-card")) {
  customElements.define("sigen-house-card", SigenHouseCard);
}
