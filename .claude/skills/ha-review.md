# ha-review

Review `sigen-house-card.js` for Home Assistant Lovelace best practices.

## What this skill does

Checks the card against the following HA custom-card guidelines:

1. **Web component registration** — `customElements.define()` is called exactly once and is guarded against duplicate registration.
2. **`getCardSize()`** — returns a number; warns if missing.
3. **`getStubConfig()`** — is a static method returning a valid default config.
4. **`setConfig()` error handling** — throws a descriptive error for missing required entities rather than silently failing.
5. **`hass` setter safety** — guards against `undefined` state before reading `.state`.
6. **No direct DOM queries outside shadow root** — card should not use `document.querySelector`.
7. **CSS custom properties** — uses HA theme variables (`--primary-color`, `--card-background-color`, etc.) where appropriate.
8. **HACS metadata** — `hacs.json` and `manifest.json` are present and consistent with each other.
9. **Accessibility** — SVG elements that convey data have `aria-label` or `<title>` where practical.
10. **No external network requests** — card must not fetch remote URLs at runtime.

Outputs a checklist: ✅ pass / ⚠️ warning / ❌ fail, with file:line references for each finding.

## How to invoke

```
/ha-review
```
