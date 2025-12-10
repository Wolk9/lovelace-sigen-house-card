/* Sigen House Card - custom Lovelace card
 *
 * type: 'custom:sigen-house-card'
 */

import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.5.1/lit-element.js?module";

class SigenHouseCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {}
    };
  }

  setConfig(config) {
    if (!config.entities) {
      throw new Error("Gebruik minstens 'entities' in de config.");
    }

    // Verwachte structuur:
    // entities:
    //   pv: sensor.xxx
    //   home: sensor.xxx
    //   battery_power: sensor.xxx
    //   battery_soc: sensor.xxx
    //   grid: sensor.xxx
    this._config = {
      title: config.title || "",
      mode_entity: config.mode_entity || null,
      grid_status_entity: config.grid_status_entity || null,
      weather_entity: config.weather_entity || null,
      charger_entity: config.charger_entity || null,
      ...config
    };
  }

  getCardSize() {
    return 6;
  }

  static get styles() {
    return css`
      :host {
        --sigen-bg: #1e222a;
        --sigen-bg-card: #242a33;
        --sigen-accent: #32d3b0;
        --sigen-text-main: #ffffff;
        --sigen-text-muted: #959ba7;
        --sigen-badge-bg: #11141a;
        --sigen-font-main: system-ui, -apple-system, BlinkMacSystemFont,
          "SF Pro Text", "Segoe UI", sans-serif;
      }

      .card {
        background: var(--sigen-bg);
        border-radius: 20px;
        padding: 16px 16px 10px;
        box-sizing: border-box;
        color: var(--sigen-text-main);
        font-family: var(--sigen-font-main);
        overflow: hidden;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .title-block {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.03em;
      }

      .subtitle-badge {
        margin-top: 6px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 4px 10px;
        border-radius: 999px;
        background: var(--sigen-badge-bg);
        font-size: 11px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--sigen-text-muted);
      }

      .subtitle-badge span.mode {
        color: var(--sigen-text-main);
      }

      .subtitle-badge span.dot {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: var(--sigen-text-muted);
      }

      .right-header {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .weather {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 12px;
      }

      .weather-main {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .weather-temp {
        font-weight: 600;
      }

      .ellipsis {
        width: 28px;
        height: 28px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }

      /* Huis (centrale visual) */
      .house-wrapper {
        position: relative;
        margin-top: 12px;
      }

      .house-scene {
        position: relative;
        width: 100%;
        padding-bottom: 48%; /* pseudo aspect ratio */
        border-radius: 24px;
        overflow: hidden;
      }

      .house-bg {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 10% 20%, #2b3340, #171b22);
      }

      .house-body {
        position: absolute;
        bottom: 5%;
        left: 8%;
        right: 6%;
        height: 70%;
        display: flex;
        align-items: flex-end;
      }

      .garage {
        flex: 0 0 26%;
        height: 60%;
        background: #141920;
        border-radius: 10px;
        box-shadow: 0 14px 18px rgba(0, 0, 0, 0.35);
        margin-right: 4%;
        position: relative;
      }

      .main-house {
        flex: 1;
        height: 85%;
        background: #181f27;
        border-radius: 12px;
        box-shadow: 0 18px 24px rgba(0, 0, 0, 0.45);
        position: relative;
        display: flex;
      }

      .house-left {
        flex: 0.45;
        border-right: 2px solid #1e2630;
        position: relative;
      }

      .house-right {
        flex: 0.55;
        position: relative;
      }

      .roof {
        position: absolute;
        left: -5%;
        right: -5%;
        bottom: 100%;
        height: 40%;
        background: linear-gradient(135deg, #262d37, #171d24);
        clip-path: polygon(0 100%, 18% 35%, 50% 10%, 82% 35%, 100% 100%);
        box-shadow: 0 12px 18px rgba(0, 0, 0, 0.45);
      }

      .pv-panels {
        position: absolute;
        bottom: 8%;
        left: 16%;
        right: 16%;
        top: 18%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 3px;
      }

      .pv-panel {
        background: linear-gradient(135deg, #293648, #121923);
        border-radius: 3px;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.9);
      }

      .windows {
        position: absolute;
        inset: 12% 10% 8% 8%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        gap: 3px;
      }

      .window {
        background: linear-gradient(135deg, #f8f2d0, #f3cf6e);
        opacity: 0.8;
      }

      .battery-stack {
        position: absolute;
        bottom: 14%;
        left: 45%;
        width: 10%;
        height: 36%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
      }

      .battery-body {
        width: 70%;
        height: 80%;
        background: #f4f6f8;
        border-radius: 8px;
        box-shadow: 0 10px 14px rgba(0, 0, 0, 0.35);
        position: relative;
      }

      .battery-dot {
        position: absolute;
        top: 14%;
        right: 18%;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sigen-accent);
      }

      .battery-level {
        position: absolute;
        bottom: 12%;
        left: 18%;
        right: 18%;
        height: 10%;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      .battery-level-fill {
        height: 100%;
        background: var(--sigen-accent);
        transition: width 0.4s ease-out;
      }

      .battery-small {
        position: absolute;
        bottom: 12%;
        left: 58%;
        width: 7%;
        height: 26%;
        background: #f4f6f8;
        border-radius: 6px;
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
      }

      .cable {
        position: absolute;
        top: 40%;
        left: 52%;
        width: 26%;
        height: 40%;
        border-radius: 40px;
        border: 2px solid rgba(140, 217, 213, 0.8);
        border-color: transparent transparent rgba(140, 217, 213, 0.8) rgba(140, 217, 213, 0.8);
        transform: translateX(-20%);
        opacity: 0.9;
      }

      .ac-charger {
        position: absolute;
        left: 10%;
        bottom: 20%;
        width: 4%;
        height: 18%;
        background: #f4f6f8;
        border-radius: 8px;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.35);
      }

      .timeline-line {
        position: absolute;
        left: 11.5%;
        top: 14%;
        bottom: 42%;
        border-left: 1px dashed rgba(255, 255, 255, 0.35);
      }

      .timeline-line.pv {
        left: 50%;
        top: 3%;
        bottom: 72%;
      }

      .timeline-line.home {
        left: 82%;
        top: 6%;
        bottom: 70%;
      }

      .timeline-line.battery {
        left: 50%;
        top: 50%;
        bottom: 17%;
      }

      .timeline-line.grid {
        left: 85%;
        top: 46%;
        bottom: 8%;
      }

      .label {
        position: absolute;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.09em;
        font-weight: 600;
      }

      .label .value {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.03em;
      }

      .label .caption {
        font-size: 11px;
        color: var(--sigen-text-muted);
      }

      .label.pv {
        top: 8%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }

      .label.home {
        top: 12%;
        right: 7%;
        text-align: right;
      }

      .label.ac {
        top: 22%;
        left: 8%;
        text-align: left;
      }

      .label.battery {
        bottom: 12%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }

      .label.grid {
        bottom: 14%;
        right: 7%;
        text-align: right;
      }

      .label .status-ok {
        color: var(--sigen-accent);
      }

      .footer {
        margin-top: 12px;
        display: flex;
        gap: 10px;
      }

      .footer-card {
        flex: 1;
        background: var(--sigen-bg-card);
        border-radius: 18px;
        padding: 10px 12px;
        box-sizing: border-box;
        font-size: 12px;
      }

      .footer-title {
        color: var(--sigen-text-muted);
        font-size: 11px;
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 0.09em;
        font-weight: 600;
      }

      .footer-main-value {
        display: flex;
        align-items: baseline;
        gap: 4px;
        font-size: 18px;
        font-weight: 700;
      }

      .footer-main-unit {
        font-size: 13px;
        color: var(--sigen-text-muted);
      }

      .soc-bar {
        margin-top: 6px;
        display: flex;
        gap: 2px;
      }

      .soc-dot {
        flex: 1;
        height: 6px;
        border-radius: 999px;
        background: #323845;
      }

      .soc-dot.active {
        background: var(--sigen-accent);
      }

      .pill {
        margin-top: 6px;
        display: inline-flex;
        align-items: center;
        padding: 3px 7px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.09em;
        color: var(--sigen-text-muted);
      }

      .pill-dot {
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: var(--sigen-accent);
        margin-right: 4px;
      }

      .error {
        color: #ffb3b3;
        font-size: 12px;
      }
    `;
  }

  // Helpers

  _getState(entityId) {
    if (!entityId || !this.hass || !this.hass.states[entityId]) return null;
    return this.hass.states[entityId];
  }

  _num(entityId) {
    const st = this._getState(entityId);
    if (!st) return null;
    const num = Number(st.state);
    return isNaN(num) ? null : num;
  }

  _text(entityId) {
    const st = this._getState(entityId);
    return st ? st.state : "";
  }

  _unit(entityId, fallback = "") {
    const st = this._getState(entityId);
    return st?.attributes?.unit_of_measurement || fallback;
  }

  _formatNumber(value, decimals = 1) {
    if (value === null || value === undefined || isNaN(value)) return "--";
    const num = Number(value);
    return num.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  _formatWithComma(value, decimals = 1) {
    // Gebruik locale om automatisch komma als decimaal te krijgen
    return this._formatNumber(value, decimals);
  }

  _batteryDots(soc) {
    const dots = 10;
    const filled = Math.round((soc / 100) * dots);
    const arr = [];
    for (let i = 0; i < dots; i++) {
      arr.push(i < filled);
    }
    return arr;
  }

  render() {
    if (!this._config || !this.hass) {
      return html`<ha-card class="card">
        <div class="error">Card niet goed geconfigureerd.</div>
      </ha-card>`;
    }

    const cfg = this._config;

    const pvPower = this._num(cfg.entities.pv);
    const homePower = this._num(cfg.entities.home);
    const gridPower = this._num(cfg.entities.grid);
    const batPower = this._num(cfg.entities.battery_power);
    const batSoc = this._num(cfg.entities.battery_soc);

    const mode = cfg.mode_entity ? this._text(cfg.mode_entity) : "Normaal";
    const gridStatus = cfg.grid_status_entity
      ? this._text(cfg.grid_status_entity)
      : "Aangesloten";

    const weatherTemp = cfg.weather_entity ? this._num(cfg.weather_entity) : null;

    const batDirection =
      batPower !== null && batPower > 0
        ? "Opladen"
        : batPower !== null && batPower < 0
        ? "Ontladen"
        : "Stand-by";

    const pvLabel = `${this._formatWithComma(pvPower)} ${this._unit(
      cfg.entities.pv,
      "kW"
    )}`;
    const homeLabel = `${this._formatWithComma(homePower)} ${this._unit(
      cfg.entities.home,
      "kW"
    )}`;
    const gridLabel = `${this._formatWithComma(gridPower)} ${this._unit(
      cfg.entities.grid,
      "kW"
    )}`;
    const batLabel = `${this._formatWithComma(batPower)} ${this._unit(
      cfg.entities.battery_power,
      "kW"
    )}`;
    const batSocLabel =
      batSoc !== null ? `${this._formatNumber(batSoc, 1)}%` : "--";

    const batLevelWidth = batSoc !== null ? Math.max(4, Math.min(100, batSoc)) : 0;

    const dots = this._batteryDots(batSoc || 0);

    return html`
      <ha-card class="card">
        <div class="header">
          <div class="title-block">
            <div class="title">${cfg.title || "Mijn huis"}</div>
            <div class="subtitle-badge">
              <span class="mode">${mode}</span>
              <span class="dot"></span>
              <span>${gridStatus}</span>
            </div>
          </div>
          <div class="right-header">
            <div class="weather">
              <div class="weather-main">
                <span>☁️</span>
                <span class="weather-temp">
                  ${weatherTemp !== null
                    ? `${this._formatNumber(weatherTemp, 0)}°C`
                    : ""}
                </span>
              </div>
            </div>
            <div class="ellipsis">•••</div>
          </div>
        </div>

        <div class="house-wrapper">
          <div class="house-scene">
            <div class="house-bg"></div>

            <div class="timeline-line ac"></div>
            <div class="timeline-line pv"></div>
            <div class="timeline-line home"></div>
            <div class="timeline-line battery"></div>
            <div class="timeline-line grid"></div>

            <div class="label ac">
              <div class="value">
                ${cfg.charger_entity ? this._text(cfg.charger_entity) : "Niet aangesloten"}
              </div>
              <div class="caption">AC-LADER</div>
            </div>

            <div class="label pv">
              <div class="value">${pvLabel}</div>
              <div class="caption">ZONNE-ENERGIE</div>
            </div>

            <div class="label home">
              <div class="value">${homeLabel}</div>
              <div class="caption">THUIS</div>
            </div>

            <div class="label battery">
              <div class="value">
                ${batLabel}
                ${batSoc !== null ? html` • ${batSocLabel}` : ""}
              </div>
              <div class="caption">
                SigenStor
                <span class="status-ok"> ${batDirection}</span>
              </div>
            </div>

            <div class="label grid">
              <div class="value">${gridLabel}</div>
              <div class="caption">STROOMNET</div>
            </div>

            <div class="house-body">
              <div class="garage">
                <div class="ac-charger"></div>
              </div>
              <div class="main-house">
                <div class="house-left">
                  <div class="roof">
                    <div class="pv-panels">
                      ${Array.from({ length: 6 }).map(
                        () => html`<div class="pv-panel"></div>`
                      )}
                    </div>
                  </div>
                </div>
                <div class="house-right">
                  <div class="windows">
                    ${Array.from({ length: 9 }).map(
                      () => html`<div class="window"></div>`
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class="battery-stack">
              <div class="battery-body">
                <div class="battery-dot"></div>
                <div class="battery-level">
                  <div
                    class="battery-level-fill"
                    style="width: ${batLevelWidth}%;"
                  ></div>
                </div>
              </div>
            </div>

            <div class="battery-small"></div>
            <div class="cable"></div>
          </div>
        </div>

        <div class="footer">
          <div class="footer-card">
            <div class="footer-title">Huidige modus</div>
            <div class="footer-main-value">
              <span>${mode}</span>
            </div>
            <div class="pill">
              <span class="pill-dot"></span>
              <span>${gridStatus}</span>
            </div>
          </div>

          <div class="footer-card">
            <div class="footer-title">Batterijniveau</div>
            <div class="footer-main-value">
              <span>${batSoc !== null ? this._formatNumber(batSoc, 0) : "--"}</span>
              <span class="footer-main-unit">%</span>
            </div>
            <div class="soc-bar">
              ${dots.map(
                (active) =>
                  html`<div class="soc-dot ${active ? "active" : ""}"></div>`
              )}
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }
}

customElements.define("sigen-house-card", SigenHouseCard);
