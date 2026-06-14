# ha-release

Guide through cutting a new versioned release of `lovelace-sigen-house-card` for HACS.

## What this skill does

1. Read the latest git tag with `git tag --sort=-v:refname | head -1` to determine the current version.
2. Suggest the next semantic version (patch / minor / major) based on commits since the last tag.
3. Show a summary of unreleased commits (`git log <last-tag>..HEAD --oneline`).
4. Ask the user to confirm the new version number.
5. Provide the exact commands to:
   - Create an annotated tag: `git tag -a vX.Y.Z -m "Release vX.Y.Z"`
   - Push the tag: `git push origin vX.Y.Z`
6. Remind the user that the GitHub Actions workflow (`.github/workflows/release.yml`) will automatically create the GitHub Release and attach `sigen-house-card.js` as the HACS asset.

## How to invoke

```
/ha-release
```

Optionally specify the bump type:

```
/ha-release patch
/ha-release minor
/ha-release major
```
