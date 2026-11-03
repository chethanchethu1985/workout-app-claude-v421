# Claude_V4.2 test report
Desktop browser (headless Chromium) only. No APK built, nothing run on a phone. The Android plugin was only syntax-checked against stand-in classes.
| Area | Status | Evidence |
|---|---|---|
| Splash length | PASS (browser) | still showing at 5.3 s, gone by 7.6 s |
| New logo, name, version label | PASS (browser) | header logo loads, pill Claude_V4.2, title My Workouts |
| Back / redo (manual and hands-free) | PASS (browser) | set logged then Back removed the log and returned to the same exercise |
| YouTube save, validation, preview, Play here, player preview, form preview | PASS (browser) | invalid link rejected; thumbnail + iframe src youtube-nocookie |
| YouTube video actually playing inside the Android WebView | NOT TESTED | YouTube may refuse embedded playback in some WebViews; the "Open in the YouTube app" link is the fallback |
| Swap days, move whole day, move selected exercises, undo | PASS (browser) | counts changed as expected and were restored |
| Backup file content, restore (new and older format) | PASS (browser) | plan kept, library/logs restored |
| Saving/sharing the backup file on Android, automatic backup | NOT TESTED | needs the phone |
| Folder buttons with a mock Android plugin (picker opens, access settings open, diagnostics) | PASS (mock) | calls observed: pickFolder, requestAccess, listGifs |
| Real folder picker, permission screen, file reading | NOT TESTED | needs the phone |
| Earlier features (plan dates, migration, superset rests, Excel optional columns, health, library) | PASS (browser) | all re-run |
| No sideways scrolling at 360, 412, 768 px (incl. move sheet) | PASS (browser) | |
| Launcher icon, app name, fixed signing, update-over-old-app | NOT TESTED | needs the GitHub build and install |
