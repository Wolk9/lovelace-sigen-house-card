# ha-validate

Validate the `sigen-house-card` Lovelace card configuration against its schema.

## What this skill does

1. Read `sigen-house-card.js` and extract the `setConfig()` method to identify all required and optional config keys.
2. Check the stub config returned by `getStubConfig()` for completeness.
3. Report any mismatches between required entities defined in `setConfig()` and those documented in `README.md`.
4. Flag any config keys present in the README examples but not handled in `setConfig()`, and vice versa.
5. Summarise findings as a short checklist: ✅ OK / ⚠️ warning / ❌ error.

## How to invoke

```
/ha-validate
```

No arguments needed — the skill operates on the current working tree.
