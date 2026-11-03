# Build and install V4.1
Same GitHub steps as V4. Upload the whole `www` folder (it includes plan_v4.js), `android-overrides`, `package.json`, `capacitor.config.json`, `patch_manifest.py`, `BUILD-WORKFLOW.yml`; replace `.github/workflows/build-apk.yml` with the new BUILD-WORKFLOW.yml text. Download artifact My-Workouts-V4.1-APK.
The app ID is unchanged, so V4.1 installs over V4 and keeps your history and settings. To keep V4 installed side by side instead, change appId in capacitor.config.json (for example to com.myworkout.v41) before building; the new app then starts empty and you can move data with More > Backup / Restore.
If the build fails at "Black launch screen (best effort)", delete that step from the workflow; the in-app splash does not depend on it.
