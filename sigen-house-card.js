class SigenHouseCard extends HTMLElement {
  setConfig(config) {
    if (!config.entities) {
      throw new Error("Sigen House Card: 'entities' is verplicht in de configuratie.");
    }

    this._config = config;
    this._lastValues = {};

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
          max-width: 640px;
          margin: 0 auto;
        }

        .sigen-svg {
          width: 100%;
          display: block;
        }

        /* 3D huis / apparaten */

        .house-front {
          fill: #23272d;
        }

        .house-side {
          fill: #1f242a;
        }

        .roof-front {
          fill: #2c3239;
        }

        .roof-side {
          fill: #252b32;
        }

        .garage-front {
          fill: #20252b;
        }

        .garage-side {
          fill: #1a1f24;
        }

        .garage-door {
          fill: #14171b;
        }

        .window-light {
          fill: #f7f3cf;
        }

        .window-frame {
          stroke: #c7c2a0;
          stroke-width: 0.9;
        }

        .pv-plate {
          fill: #181c21;
        }

        .pv-cell {
          fill: #2b3c4f;
        }

        .device-3d-front {
          fill: #f7f7f7;
          stroke: #dedede;
          stroke-width: 1.2;
        }

        .device-3d-side {
          fill: #e4e4e4;
        }

        .device-3d-top {
          fill: #f0f0f0;
        }

        .ev-glass {
          fill: #ffffff;
        }

        .ev-led {
          fill: #4caf50;
        }

        .ev-cable {
          fill: none;
          stroke: #111;
          stroke-width: 4;
          stroke-linecap: round;
        }

        /* statische verbindingen */

        .sigen-line-static {
          stroke: #555;
          stroke-width: 1.5;
          fill: none;
        }

        /* overlays */

        .sigen-device-label {
          font-size: 9px;
          fill: var(--sigen-muted-text);
          text-anchor: middle;
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
        <svg class="sigen-svg" viewBox="0 0 420 260" preserveAspectRatio="xMidYMid meet">

          <!-- ===== 3D HUIS MET ZONNEPANELEN ===== -->
          <g id="house3d" data-device="house">
            <!-- hoofdvolume voorgevel -->
            <polygon class="house-front"
              points="120,110 120,200 250,200 250,120 185,90" />
            <!-- hoofdvolume zijgevel -->
            <polygon class="house-side"
              points="250,120 310,140 310,215 250,200" />
            <!-- dak voorzijde -->
            <polygon class="roof-front"
              points="120,110 185,75 250,110 185,90" />
            <!-- dak zijkant -->
            <polygon class="roof-side"
              points="250,110 310,130 310,140 250,120" />

            <!-- garage-links volume -->
            <polygon class="garage-front"
              points="55,130 55,205 135,205 135,145 95,125" />
            <polygon class="garage-side"
              points="135,145 95,125 155,135 155,210 135,205" />
            <!-- garage dak -->
            <polygon class="roof-front"
              points="55,130 95,105 135,125 95,125" />
            <polygon class="roof-side"
              points="95,105 155,115 155,135 95,125" />

            <!-- garage deur -->
            <polygon class="garage-door"
              points="62,160 62,202 120,202 120,166 92,154" />

            <!-- ramen dakkapel / voorkant -->
            <rect x="190" y="123" width="20" height="22" class="window-light"/>
            <rect x="215" y="133" width="20" height="22" class="window-light"/>

            <!-- grote ramen rechter gevel -->
            <g>
              <polygon fill="#101317"
                points="252,138 302,152 302,210 252,197" />
              <polygon class="window-light"
                points="256,143 298,155 298,204 256,193" />
              <!-- raster -->
              <path d="M256,156 L298,167 M256,170 L298,181 M256,184 L298,196"
                class="window-frame" fill="none"/>
              <path d="M276,149 L276,201" class="window-frame" fill="none"/>
            </g>

            <!-- zonnepaneel-plaat -->
            <g id="pv-roof">
              <polygon class="pv-plate"
                points="170,82 232,106 255,99 195,77" />
              <!-- cellen -->
              <polygon class="pv-cell"
                points="173,83 191,89 188,90 170,85" />
              <polygon class="pv-cell"
                points="194,90 212,96 209,97 191,91" />
              <polygon class="pv-cell"
                points="215,97 233,103 230,104 212,98" />
              <polygon class="pv-cell"
                points="188,90 206,96 203,97 185,91" />
            </g>

            <!-- label 'HUIS' op voorgevel -->
            <text x="190" y="190" class="sigen-device-label">HUIS</text>
          </g>

          <!-- ===== SIGENSTOR (rechts) ===== -->
          <g id="sigenstor" data-device="battery" transform="translate(295,80)">
            <!-- 3D body -->
            <polygon class="device-3d-front"
              points="0,0 0,130 45,140 45,10" />
            <polygon class="device-3d-side"
              points="45,10 65,0 65,130 45,140" />
            <!-- top -->
            <polygon class="device-3d-top"
              points="0,0 20,-8 65,0 45,10" />
            <!-- segmentlijnen -->
            <path d="M0,40 L45,50 M0,80 L45,90" stroke="#e0e0e0" stroke-width="1"/>

            <!-- bovenlamp -->
            <circle cx="18" cy="18" r="7" fill="#ffffff" stroke="#d0d0d0" stroke-width="1"/>
            <circle cx="18" cy="18" r="4" fill="#3f51b5" opacity="0.3"/>

            <!-- klein icoontje -->
            <rect x="10" y="55" width="10" height="8" rx="2" fill="none" stroke="#c0c0c0" stroke-width="1"/>
          </g>

          <!-- ===== GATEWAY (boven links van huis) ===== -->
          <g id="gateway" data-device="gateway" transform="translate(60,40)">
            <!-- front -->
            <polygon class="device-3d-front"
              points="0,0 0,55 45,60 45,8" />
            <polygon class="device-3d-side"
              points="45,8 60,0 60,52 45,60" />
            <polygon class="device-3d-top"
              points="0,0 15,-6 60,0 45,8" />

            <!-- logo / indicator -->
            <path d="M14,24 a7,7 0 0 1 11,0" fill="none" stroke="#b0b0b0" stroke-width="1.3"/>
            <path d="M16,32 a8,3 0 0 0 13,0" fill="none" stroke="#b0b0b0" stroke-width="1"/>
          </g>

          <!-- ===== EV-CHARGER (bij garage) ===== -->
          <g id="ev-charger" data-device="ev" transform="translate(40,160)">
            <!-- body -->
            <path d="M0,0
                     h26
                     a8,8 0 0 1 8,8
                     v46
                     a8,8 0 0 1 -8,8
                     h-26
                     a8,8 0 0 1 -8,-8
                     v-46
                     a8,8 0 0 1 8,-8 z"
                  fill="#f5f5f5" stroke="#d0d0d0" stroke-width="1.2"/>
            <!-- led -->
            <rect x="16" y="10" width="4" height="20" rx="2" class="ev-led"/>
            <!-- plug / rondje -->
            <circle cx="17" cy="38" r="8" fill="#111"/>
            <circle cx="17" cy="38" r="4" fill="#222"/>
            <!-- kabel -->
            <path class="ev-cable"
              d="M25,44
                 C 45,60 54,78 52,94
                 C 50,108 38,115 26,112
                 C 18,110 12,104 10,98" />
          </g>

          <!-- ===== LOAD (onder huis, generieke verbruiker) ===== -->
          <g id="load" data-device="load">
            <!-- simpel blok voor 'huis intern' -->
            <rect x="170" y="205" width="65" height="25" rx="4"
              fill="#20252b" stroke="#14171b" stroke-width="1.2" />
            <text x="202" y="221" class="sigen-device-label">LOAD</text>
          </g>

          <!-- ===== GRID (linksboven, paal) ===== -->
          <g id="grid" data-device="grid" transform="translate(10,105)">
            <!-- paal -->
            <rect x="8" y="0" width="10" height="60" fill="#30343a"/>
            <rect x="-5" y="-4" width="36" height="8" fill="#30343a"/>
            <!-- kleine insulators -->
            <circle cx="2" cy="-0.5" r="2" fill="#555"/>
            <circle cx="28" cy="-0.5" r="2" fill="#555"/>
            <!-- label -->
            <text x="13" y="75" class="sigen-device-label">GRID</text>
          </g>

          <!-- ===== STATISCHE BASISLIJNEN (dunne) ===== -->
          <!-- grid -> huis -->
          <path class="sigen-line-static"
            d="M38,101 C 70,100 100,106 120,115" />
          <!-- pv -> huis -->
          <path class="sigen-line-static"
            d="M210,70 C 210,80 205,88 197,93" />
          <!-- huis -> batterij -->
          <path class="sigen-line-static"
            d="M250,155 C 270,160 290,160 305,158" />
          <!-- huis -> load -->
          <path class="sigen-line-static"
            d="M200,200 C 200,203 202,205 202,205" />
          <!-- huis -> ev -->
          <path class="sigen-line-static"
            d="M140,185 C 110,188 86,186 70,180" />

          <!-- ===== GEANIMEERDE FLOW-LIJNEN ===== -->

          <!-- GRID <-> HUIS (loopt langs statische lijn) -->
          <path
            class="flow-line idle"
            data-flow="grid"
            d="M38,101 C 70,100 100,106 120,115" />

          <!-- PV -> HUIS -->
          <path
            class="flow-line idle"
            data-flow="pv"
            d="M210,70 C 210,80 205,88 197,93" />

          <!-- HUIS <-> BATTERY -->
          <path
            class="flow-line idle"
            data-flow="battery"
            d="M250,155 C 270,160 290,160 305,158" />

          <!-- HUIS -> LOAD -->
          <path
            class="flow-line idle"
            data-flow="load"
            d="M200,200 C 200,205 202,207 202,209" />

          <!-- HUIS -> EV (optioneel, bijv. ev_power) -->
          <path
            class="flow-line idle"
            data-flow="ev"
            d="M140,185 C 110,188 86,186 70,180" />

          <!-- ===== OVERLAYS MET WAARDEN ===== -->

          <!-- PV power -->
          <g class="sigen-overlay" data-key="pv_power" data-device="pv">
            <rect class="label-bg" x="230" y="15" width="150" height="30" />
            <text class="label" x="236" y="24">PV</text>
            <text class="value" x="236" y="35">-</text>
            <text class="unit" x="370" y="35"></text>
          </g>

          <!-- Grid import/export -->
          <g class="sigen-overlay" data-key="grid_import_power" data-device="grid">
            <rect class="label-bg" x="10" y="10" width="140" height="30" />
            <text class="label" x="16" y="19">Grid in</text>
            <text class="value" x="16" y="30">-</text>
            <text class="unit" x="140" y="30"></text>
          </g>

          <g class="sigen-overlay" data-key="grid_export_power" data-device="grid">
            <rect class="label-bg" x="10" y="45" width="140" height="30" />
            <text class="label" x="16" y="54">Grid uit</text>
            <text class="value" x="16" y="65">-</text>
            <text class="unit" x="140" y="65"></text>
          </g>

          <!-- Load power (huis) -->
          <g class="sigen-overlay" data-key="load_power" data-device="load">
            <rect class="label-bg" x="150" y="210" width="130" height="30" />
            <text class="label" x="156" y="219">Huis</text>
            <text class="value" x="156" y="230">-</text>
            <text class="unit" x="270" y="230"></text>
          </g>

          <!-- Battery power -->
          <g class="sigen-overlay" data-key="battery_power" data-device="battery">
            <rect class="label-bg" x="260" y="160" width="140" height="30" />
            <text class="label" x="266" y="169">Battery</text>
            <text class="value" x="266" y="180">-</text>
            <text class="unit" x="395" y="180"></text>
          </g>

          <!-- Battery SOC -->
          <g class="sigen-overlay" data-key="battery_soc" data-device="battery">
            <rect class="label-bg" x="260" y="195" width="140" height="30" />
            <text class="label" x="266" y="204">SOC</text>
            <text class="value" x="266" y="215">-</text>
            <text class="unit" x="395" y="215">%</text>
          </g>

          <!-- (optioneel) EV power -->
          <g class="sigen-overlay" data-key="ev_power" data-device="ev">
            <rect class="label-bg" x="10" y="210" width="130" height="30" />
            <text class="label" x="16" y="219">EV</text>
            <text class="value" x="16" y="230">-</text>
            <text class="unit" x="130" y="230"></text>
          </g>

        </svg>
      </div>
    `;

    this.appendChild(this._card);

    // optionele devices modulair verbergen
    const devicesConfig = this._config.devices || {};
    ["pv", "grid", "battery", "load", "ev", "gateway", "house"].forEach((dev) => {
      if (devicesConfig[dev] === false) {
        this._card
          .querySelectorAll(`[data-device="${dev}"], [data-flow="${dev}"]`)
          .forEach((el) => (el.style.display = "none"));
      }
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
    this._updateValue("ev_power", ents.ev_power); // optioneel, mag undefined zijn

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

    // GRID: netto import/export (import = positief, export = negatief)
    const gi = flows.grid_import_power || 0;
    const ge = flows.grid_export_power || 0;
    const netGrid = gi - ge;
    this._setFlowSigned("grid", netGrid, threshold);

    // PV: alleen vooruit als er productie is
    this._setFlowUnsigned("pv", flows.pv_power, threshold);

    // BATTERY: positief = ontladen (bat -> huis), negatief = laden (huis -> bat)
    this._setFlowSigned("battery", flows.battery_power, threshold);

    // LOAD: verbruik vanaf huis
    this._setFlowUnsigned("load", flows.load_power, threshold);

    // EV (optioneel)
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
      title: "Sigen House",
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
      // optioneel:
      // flow_threshold_w: 50
    };
  }
}

customElements.define("sigen-house-card", SigenHouseCard);
