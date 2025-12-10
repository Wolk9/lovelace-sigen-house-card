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

    this._config = {
      title: config.title || "",
      mode_entity: config.mode_entity || null,
      grid_status_entity: config.grid_status_entity || null,
      weather_entity: config.weather_entity || null,
      charger_entity: config.charger_entity || null,
      house_image:
        config.house_image ||
        "/hacsfiles/lovelace-sigen-house-card/sigen-house.svg",
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

      /* Huis-achtergrond + overlays */

      .house-wrapper {
        position: relative;
        margin-top: 12px;
      }

      .house-scene {
        position: relative;
        width: 100%;
        padding-bottom: 48%; /* aspect ratio */
        border-radius: 24px;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 18px 24px rgba(0, 0, 0, 0.45);
      }

      .overlay-layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .timeline-line {
        position: absolute;
        border-left: 1px dashed rgba(255, 255, 255, 0.35);
      }

      .timeline-line.ac {
        left: 17%;
        top: 22%;
        bottom: 54%;
      }

      .timeline-line.pv {
        left: 50%;
        top: 6%;
        bottom: 68%;
      }

      .timeline-line.home {
        left: 77%;
        top: 12%;
        bottom: 68%;
      }

      .timeline-line.battery {
        left: 51%;
        top: 48%;
        bottom: 18%;
      }

      .timeline-line.grid {
        left: 80%;
        top: 48%;
        bottom: 12%;
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
        top: 13%;
        right: 6%;
        text-align: right;
      }

      .label.ac {
        top: 24%;
        left: 8%;
        text-align: left;
        max-width: 30%;
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

  _batteryDots(soc) {
    const dots = 10;
    const filled = Math.round((soc / 100) * dots);
    const arr = [];
    for (let i = 0; i < dots; i++) arr.push(i < filled);
    return arr;
  }

  render() {
    if (!this._config || !this.hass) {
      return html`<ha-card class="card">
        <div class="error">Card niet goed geconfigureerd.</div>
      </ha-card>`;
    }

    const cfg = this._config;

    const pvPower = cfg.entities.pv ? this._num(cfg.entities.pv) : null;
    const homePower = cfg.entities.home ? this._num(cfg.entities.home) : null;
    const gridPower = cfg.entities.grid ? this._num(cfg.entities.grid) : null;
    const batPower = cfg.entities.battery_power
      ? this._num(cfg.entities.battery_power)
      : null;
    const batSoc = cfg.entities.battery_soc
      ? this._num(cfg.entities.battery_soc)
      : null;

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

    const pvLabel =
      pvPower !== null && cfg.entities.pv
        ? `${this._formatNumber(pvPower)} ${this._unit(
            cfg.entities.pv,
            "kW"
          )}`
        : "--";
    const homeLabel =
      homePower !== null && cfg.entities.home
        ? `${this._formatNumber(homePower)} ${this._unit(
            cfg.entities.home,
            "kW"
          )}`
        : "--";
    const gridLabel =
      gridPower !== null && cfg.entities.grid
        ? `${this._formatNumber(gridPower)} ${this._unit(
            cfg.entities.grid,
            "kW"
          )}`
        : "--";
    const batLabel =
      batPower !== null && cfg.entities.battery_power
        ? `${this._formatNumber(batPower)} ${this._unit(
            cfg.entities.battery_power,
            "kW"
          )}`
        : "--";
    const batSocLabel =
      batSoc !== null && cfg.entities.battery_soc
        ? `${this._formatNumber(batSoc, 1)}%`
        : "--";

    const batLevelWidth =
      batSoc !== null && cfg.entities.battery_soc
        ? Math.max(4, Math.min(100, batSoc))
        : 0;

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
          <div
            class="house-scene"
            style="background-image: url('${cfg.house_image}');"
          >
            <div class="overlay-layer">
              <!-- AC-lader -->
              ${cfg.charger_entity
                ? html`
                    <div class="timeline-line ac"></div>
                    <div class="label ac">
                      <div class="value">
                        ${this._text(cfg.charger_entity) || "Niet aangesloten"}
                      </div>
                      <div class="caption">AC-LADER</div>
                    </div>
                  `
                : ""}

              <!-- PV -->
              ${cfg.entities.pv
                ? html`
                    <div class="timeline-line pv"></div>
                    <div class="label pv">
                      <div class="value">${pvLabel}</div>
                      <div class="caption">ZONNE-ENERGIE</div>
                    </div>
                  `
                : ""}

              <!-- Thuis -->
              ${cfg.entities.home
                ? html`
                    <div class="timeline-line home"></div>
                    <div class="label home">
                      <div class="value">${homeLabel}</div>
                      <div class="caption">THUIS</div>
                    </div>
                  `
                : ""}

              <!-- Batterij -->
              ${cfg.entities.battery_power || cfg.entities.battery_soc
                ? html`
                    <div class="timeline-line battery"></div>
                    <div class="label battery">
                      <div class="value">
                        ${cfg.entities.battery_power ? batLabel : ""}
                        ${cfg.entities.battery_soc && batSoc !== null
                          ? html` • ${batSocLabel}`
                          : ""}
                      </div>
                      <div class="caption">
                        SigenStor
                        <span class="status-ok"> ${batDirection}</span>
                      </div>
                    </div>
                  `
                : ""}

              <!-- Net -->
              ${cfg.entities.grid
                ? html`
                    <div class="timeline-line grid"></div>
                    <div class="label grid">
                      <div class="value">${gridLabel}</div>
                      <div class="caption">STROOMNET</div>
                    </div>
                  `
                : ""}
            </div>
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

          ${cfg.entities.battery_soc
            ? html`
                <div class="footer-card">
                  <div class="footer-title">Batterijniveau</div>
                  <div class="footer-main-value">
                    <span>
                      ${batSoc !== null ? this._formatNumber(batSoc, 0) : "--"}
                    </span>
                    <span class="footer-main-unit">%</span>
                  </div>
                  <div class="soc-bar">
                    ${dots.map(
                      (active) =>
                        html`<div class="soc-dot ${active
                          ? "active"
                          : ""}"></div>`
                    )}
                  </div>
                </div>
              `
            : ""}
        </div>
      </ha-card>
    `;
  }
}

customElements.define("sigen-house-card", SigenHouseCard);
