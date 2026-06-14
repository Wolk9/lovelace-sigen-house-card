# ha-entities

Audit entity bindings in `sigen-house-card.js` and cross-check them against the README configuration examples.

## What this skill does

1. Parse all `_updateValue()` and `_updateFlows()` calls in `sigen-house-card.js` to list every entity key the card reads.
2. Compare that list against the entities documented in `README.md`.
3. Check that each entity key is covered by `getStubConfig()`.
4. Identify any entity keys that are:
   - Read in code but not documented
   - Documented but not read in code
   - Missing from the stub config
5. Report the audit as a markdown table with columns: `entity key | in code | in README | in stub`.

## How to invoke

```
/ha-entities
```

Optionally pass a YAML snippet to check a user-supplied config against the known entity keys:

```
/ha-entities
entities:
  pv_power: sensor.my_pv
  grid_import_power: sensor.my_grid
```
