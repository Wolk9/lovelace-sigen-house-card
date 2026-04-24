const SIGEN_COMPOSITE_SVG = `<g id="sigen-composite-assets">
<defs>
  <radialGradient id="hsBg" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#1e2438"/>
    <stop offset="100%" stop-color="#0d1018"/>
  </radialGradient>
  <linearGradient id="hsFrontWall" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#1c2030"/>
    <stop offset="100%" stop-color="#151822"/>
  </linearGradient>
  <linearGradient id="hsRightWall" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0f1218"/>
    <stop offset="100%" stop-color="#0a0d12"/>
  </linearGradient>
  <linearGradient id="hsLeftWall" x1="100%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#0f1218"/>
    <stop offset="100%" stop-color="#0a0d12"/>
  </linearGradient>
  <linearGradient id="hsRoofLeft" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#1a1e2c"/>
    <stop offset="100%" stop-color="#22263a"/>
  </linearGradient>
  <linearGradient id="hsRoofRight" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0d1018"/>
    <stop offset="100%" stop-color="#090c10"/>
  </linearGradient>
  <linearGradient id="hsGarageTop" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#161924"/>
    <stop offset="100%" stop-color="#10131c"/>
  </linearGradient>
  <radialGradient id="hsWindow" cx="50%" cy="50%" r="60%">
    <stop offset="0%" stop-color="#ffe880"/>
    <stop offset="50%" stop-color="#e89820"/>
    <stop offset="100%" stop-color="#7a3800"/>
  </radialGradient>
  <linearGradient id="hsSolarBg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#182840"/>
    <stop offset="100%" stop-color="#0e1c30"/>
  </linearGradient>
  <linearGradient id="hsEquipFront" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#e8eaf2"/>
    <stop offset="100%" stop-color="#cdd0dc"/>
  </linearGradient>
  <linearGradient id="hsEquipSide" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#b8bcc8"/>
    <stop offset="100%" stop-color="#a8acb8"/>
  </linearGradient>
  <linearGradient id="hsEquipTop" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#d8dce8"/>
    <stop offset="100%" stop-color="#c4c8d4"/>
  </linearGradient>
  <filter id="hsWinGlow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="6" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="hsBoxGlow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <clipPath id="hsLeftRoofClip">
    <polygon points="420,140 490,125 438,151 368,166"/>
  </clipPath>
</defs>

<!-- Background -->
<rect width="800" height="420" fill="url(#hsBg)"/>

<!-- Ground plane (back) -->
<polygon points="263,264 315,238 560,360 508,386 263,264" fill="#0b0e14"/>
<!-- Ground in front of house -->
<polygon points="315,238 368,212 613,334 560,360 315,238" fill="#0d1018"/>
<!-- Ground edge -->
<polyline points="263,264 315,238 560,360 508,386" fill="none" stroke="#151820" stroke-width="1"/>

<!-- GARAGE LEFT FACE -->
<polygon points="315,238 263,264 263,164 315,138" fill="url(#hsLeftWall)"/>
<polyline points="315,238 263,264 263,164 315,138 315,238" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- GARAGE TOP (flat roof) -->
<polygon points="315,138 263,164 368,216 420,190" fill="url(#hsGarageTop)"/>
<polyline points="315,138 263,164 368,216 420,190 315,138" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- MAIN HOUSE RIGHT FACE -->
<polygon points="560,360 508,386 508,236 560,210" fill="url(#hsRightWall)"/>
<polyline points="560,360 508,386 508,236 560,210 560,360" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- COMBINED FRONT FACE (L-shape) -->
<polygon points="315,238 315,138 420,190 420,140 560,210 560,360 420,290 315,238" fill="url(#hsFrontWall)"/>
<polyline points="315,238 315,138 420,190 420,140 560,210 560,360 420,290 315,238" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- Garage/house junction step edge -->
<line x1="420" y1="140" x2="420" y2="190" stroke="#252a3a" stroke-width="2"/>

<!-- GARAGE DOOR (dark opening) -->
<polygon points="343,252 399,280 399,195 343,167" fill="#080a0d"/>
<polyline points="343,252 399,280 399,195 343,167 343,252" fill="none" stroke="#1e2432" stroke-width="1"/>
<!-- Garage door cross lines -->
<line x1="370" y1="267" x2="370" y2="178" stroke="#1a1e28" stroke-width="0.8"/>
<line x1="343" y1="224" x2="399" y2="253" stroke="#1a1e28" stroke-width="0.8"/>

<!-- MAIN HOUSE WINDOWS -->
<!-- Big window - glow effect -->
<polygon points="480,305 543,336 543,201 480,170" fill="#3a2000" opacity="0.6" filter="url(#hsWinGlow)"/>
<!-- Big window fill -->
<polygon points="480,305 543,336 543,201 480,170" fill="url(#hsWindow)" opacity="0.82"/>
<!-- Window pane grid - horizontal bars -->
<line x1="480" y1="256" x2="543" y2="287" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<line x1="480" y1="215" x2="543" y2="246" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<!-- Window pane grid - vertical bars -->
<line x1="496" y1="308" x2="496" y2="173" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<line x1="512" y1="317" x2="512" y2="182" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<line x1="528" y1="326" x2="528" y2="191" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<!-- Window frame -->
<polygon points="480,305 543,336 543,201 480,170" fill="none" stroke="#3a2000" stroke-width="2.5"/>

<!-- Upper left window -->
<polygon points="434,202 469,220 469,180 434,162" fill="url(#hsWindow)" opacity="0.65"/>
<polygon points="434,202 469,220 469,180 434,162" fill="none" stroke="#3a2000" stroke-width="1.5"/>
<line x1="451" y1="211" x2="451" y2="171" stroke="#4a2800" stroke-width="1" opacity="0.5"/>

<!-- ROOF -->
<!-- Left slope - solar panel side -->
<polygon points="420,140 490,125 438,151 368,166" fill="url(#hsRoofLeft)"/>
<!-- Solar panel base layer -->
<polygon points="420,140 490,125 438,151 368,166" fill="url(#hsSolarBg)" opacity="0.85" clip-path="url(#hsLeftRoofClip)"/>
<!-- Solar panel grid - row lines (along depth, at x=0.35/0.75/1.15/1.55) -->
<line x1="429" y1="139" x2="386" y2="161" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="443" y1="136" x2="400" y2="158" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="457" y1="133" x2="414" y2="155" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="471" y1="130" x2="428" y2="152" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<!-- Solar panel grid - column lines (along width, at y=0.3/0.7/1.1) -->
<line x1="413" y1="145" x2="475" y2="131" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="397" y1="152" x2="459" y2="138" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="381" y1="160" x2="443" y2="146" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<!-- Left slope border -->
<polyline points="420,140 490,125 438,151 368,166 420,140" fill="none" stroke="#1a2030" stroke-width="1"/>

<!-- Right slope (shadow side) -->
<polygon points="560,210 490,125 438,151 508,236" fill="url(#hsRoofRight)"/>
<!-- Subtle tile lines on right slope -->
<line x1="548" y1="160" x2="494" y2="214" stroke="#090c10" stroke-width="1.5" opacity="0.5"/>
<line x1="527" y1="143" x2="473" y2="197" stroke="#090c10" stroke-width="1.5" opacity="0.5"/>
<polyline points="560,210 490,125 438,151 508,236 560,210" fill="none" stroke="#1a2030" stroke-width="1"/>

<!-- Front gable triangle -->
<polygon points="420,140 490,125 560,210" fill="#131620"/>
<polyline points="420,140 490,125 560,210" fill="none" stroke="#1a2030" stroke-width="1"/>

<!-- Ridge cap -->
<line x1="490" y1="125" x2="438" y2="151" stroke="#20243a" stroke-width="3"/>

<!-- Roof eave lines -->
<line x1="420" y1="140" x2="560" y2="210" stroke="#20243a" stroke-width="2"/>
<line x1="420" y1="140" x2="368" y2="166" stroke="#20243a" stroke-width="2"/>

<!-- BATTERY BOX (left equipment box) -->
<!-- Front face -->
<polygon points="487,281 525,301 525,231 487,211" fill="url(#hsEquipFront)"/>
<!-- Right face -->
<polygon points="525,301 543,292 543,222 525,231" fill="url(#hsEquipSide)"/>
<!-- Top face -->
<polygon points="487,211 525,231 543,222 504,203" fill="url(#hsEquipTop)"/>
<!-- Indicator LED -->
<circle cx="507" cy="264" r="4" fill="#00d4a8" filter="url(#hsBoxGlow)"/>
<circle cx="507" cy="264" r="2.5" fill="#00ffcc"/>
<!-- Box edges -->
<polyline points="487,281 525,301 543,292 543,222 504,203 487,211 487,281" fill="none" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="525" y1="231" x2="525" y2="301" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="525" y1="231" x2="543" y2="222" stroke="#9aa0b0" stroke-width="0.8"/>

<!-- GATEWAY BOX (right equipment box) -->
<!-- Front face -->
<polygon points="543,309 567,322 567,267 543,254" fill="url(#hsEquipFront)"/>
<!-- Right face -->
<polygon points="567,322 581,315 581,260 567,267" fill="url(#hsEquipSide)"/>
<!-- Top face -->
<polygon points="543,254 567,267 581,260 557,247" fill="url(#hsEquipTop)"/>
<!-- Box edges -->
<polyline points="543,309 567,322 581,315 581,260 557,247 543,254 543,309" fill="none" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="567" y1="267" x2="567" y2="322" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="567" y1="267" x2="581" y2="260" stroke="#9aa0b0" stroke-width="0.8"/>

<!-- Cable: battery to gateway -->
<path d="M525,296 C533,300 537,305 543,309" fill="none" stroke="#707888" stroke-width="2.5" stroke-linecap="round"/>

<!-- Cable: gateway to house wall -->
<path d="M560,290 C561,290 561,292 561,293" fill="none" stroke="#707888" stroke-width="2" stroke-linecap="round"/>

<!-- WEATHER ICON (top left) -->
<g transform="translate(28,18)">
  <circle cx="28" cy="30" r="13" fill="#f0c830" opacity="0.75"/>
  <line x1="28" y1="13" x2="28" y2="9" stroke="#f0c830" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
  <line x1="40" y1="19" x2="43" y2="16" stroke="#f0c830" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
  <line x1="44" y1="30" x2="48" y2="30" stroke="#f0c830" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
  <ellipse cx="20" cy="34" rx="17" ry="10" fill="#7a8faa"/>
  <ellipse cx="34" cy="31" rx="12" ry="9" fill="#7a8faa"/>
  <ellipse cx="26" cy="27" rx="10" ry="8" fill="#9ab0c8"/>
  <rect x="4" y="33" width="42" height="9" rx="5" fill="#7a8faa"/>
</g>

</g>`;

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
          --sigen-accent: var(--primary-color, #00e5cc);
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
        <svg class="sigen-svg" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid meet">

          <!-- EMBEDDED ARTWORK -->
          ${SIGEN_COMPOSITE_SVG}

          <!-- GRID (stroomnet paal) -->
          <g id="grid" data-device="grid" transform="translate(50,270)">
            <rect x="5" y="-80" width="10" height="80" fill="#2a3040"/>
            <rect x="-6" y="-86" width="32" height="9" fill="#2a3040"/>
            <circle cx="0" cy="-82" r="2" fill="#444"/>
            <circle cx="20" cy="-82" r="2" fill="#444"/>
            <text x="10" y="12" class="sigen-device-label">GRID</text>
          </g>

          <!-- LOAD (verbruik label) -->
          <g id="load" data-device="load">
            <rect x="610" y="340" width="90" height="28" rx="4" fill="#141820" stroke="#1a2030" stroke-width="1"/>
            <text x="655" y="359" class="sigen-device-label">LOAD</text>
          </g>

          <!-- STATISCHE ACHTERGRONDLIJNEN -->
          <path class="sigen-line-static" d="M60,192 C 130,210 240,270 380,284"/>
          <path class="sigen-line-static" d="M456,132 C 470,165 510,215 543,255"/>
          <path class="sigen-line-static" d="M487,256 C 500,262 512,268 543,278"/>
          <path class="sigen-line-static" d="M563,320 C 580,340 610,350 650,354"/>
          <path class="sigen-line-static" d="M380,284 C 350,278 320,268 290,264"/>

          <!-- GEANIMEERDE FLOW-LIJNEN -->
          <path class="flow-line idle" data-flow="grid"
            d="M60,192 C 130,210 240,270 380,284"/>
          <path class="flow-line idle" data-flow="pv"
            d="M456,132 C 470,165 510,215 543,255"/>
          <path class="flow-line idle" data-flow="battery"
            d="M487,256 C 500,262 512,268 543,278"/>
          <path class="flow-line idle" data-flow="load"
            d="M563,320 C 580,340 610,350 650,354"/>
          <path class="flow-line idle" data-flow="ev"
            d="M380,284 C 350,278 320,268 290,264"/>

          <!-- OVERLAYS MET WAARDEN -->
          <g class="sigen-overlay" data-key="pv_power" data-device="pv">
            <rect class="label-bg" x="30" y="90" width="170" height="30"/>
            <text class="label" x="36" y="100">PV</text>
            <text class="value" x="36" y="112">-</text>
            <text class="unit" x="190" y="112"></text>
          </g>
          <g class="sigen-overlay" data-key="grid_import_power" data-device="grid">
            <rect class="label-bg" x="30" y="126" width="170" height="30"/>
            <text class="label" x="36" y="136">Grid in</text>
            <text class="value" x="36" y="148">-</text>
            <text class="unit" x="190" y="148"></text>
          </g>
          <g class="sigen-overlay" data-key="grid_export_power" data-device="grid">
            <rect class="label-bg" x="30" y="160" width="170" height="30"/>
            <text class="label" x="36" y="170">Grid uit</text>
            <text class="value" x="36" y="182">-</text>
            <text class="unit" x="190" y="182"></text>
          </g>
          <g class="sigen-overlay" data-key="load_power" data-device="load">
            <rect class="label-bg" x="606" y="362" width="160" height="30"/>
            <text class="label" x="612" y="372">Huis</text>
            <text class="value" x="612" y="384">-</text>
            <text class="unit" x="756" y="384"></text>
          </g>
          <g class="sigen-overlay" data-key="battery_power" data-device="battery">
            <rect class="label-bg" x="30" y="300" width="190" height="30"/>
            <text class="label" x="36" y="310">Battery</text>
            <text class="value" x="36" y="322">-</text>
            <text class="unit" x="210" y="322"></text>
          </g>
          <g class="sigen-overlay" data-key="battery_soc" data-device="battery">
            <rect class="label-bg" x="30" y="336" width="190" height="30"/>
            <text class="label" x="36" y="346">SOC</text>
            <text class="value" x="36" y="358">-</text>
            <text class="unit" x="210" y="358">%</text>
          </g>
          <g class="sigen-overlay" data-key="ev_power" data-device="ev">
            <rect class="label-bg" x="30" y="50" width="170" height="30"/>
            <text class="label" x="36" y="60">EV</text>
            <text class="value" x="36" y="72">-</text>
            <text class="unit" x="190" y="72"></text>
          </g>

        </svg>
      </div>
    `;

    this.appendChild(this._card);

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
