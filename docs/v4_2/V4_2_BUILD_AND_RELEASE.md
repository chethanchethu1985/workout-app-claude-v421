# Build and install Claude_V4.2
Upload to your GitHub repository (replace what is there): `www`, `android-overrides`, NEW `android-res`, NEW `signing`, `package.json`, `capacitor.config.json`, `patch_manifest.py`, `BUILD-WORKFLOW.yml`, then replace `.github/workflows/build-apk.yml` with the new BUILD-WORKFLOW.yml text. Download artifact Claude_V4.2-APK.

## First install (one time only)
Older builds were each signed with a different random key, so Android may refuse to install V4.2 over them ("App not installed").
1. Try installing over the old app first.
2. If it is refused: in the OLD app open More > Backup, copy the text and save it somewhere (Notes, WhatsApp to yourself). Also use Health > Export records if you added readings.
3. Uninstall the old app, install Claude_V4.2, open More > Restore and paste the text (or use Restore from a backup file).
## From now on
All future builds use the same key (signing/debug.keystore) and the same app ID, so installing a new APK over this one keeps your data. versionCode must go up each build (this one is 6).
The key is a debug key kept in your private repository. It is fine for personal use, not for the Play Store.
## If a step fails
"Add the app icon" or "Black launch screen (best effort)": delete that step; the app still builds and works.
