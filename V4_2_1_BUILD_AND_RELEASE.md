# Build and install V4.2.1
Upload to your GitHub repository (replace what is there): `www`, `android-overrides`, `android-res`, `signing`, `package.json`, `capacitor.config.json`, `patch_manifest.py`, `BUILD-WORKFLOW.yml`, and replace `.github/workflows/build-apk.yml` with the new BUILD-WORKFLOW.yml text. Do NOT change or regenerate `signing/debug.keystore`.
Download artifact Claude_V4.2.1-APK, install app-debug.apk over 4.2. Data stays because the app ID, signing key are the same and versionCode went up (7).
If you are still on 4.1 or older: Android may refuse to install over it. Back up (More > Backup), uninstall, install, then Restore (see docs/v4_2).
If a build step for the icon or black launch screen fails, delete that step; the app still works.
