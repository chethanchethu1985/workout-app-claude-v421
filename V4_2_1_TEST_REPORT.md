# V4.2.1 test report
Desktop browser (headless Chromium) only. No APK built, nothing run on a phone; the Android plugin was only syntax-checked against stand-in classes.
| Area | Status | Evidence |
|---|---|---|
| Version chip on the My Workouts line, no old label row | PASS (browser) | text "My Workouts V4.2.1", chip sits on the name line, screenshot reviewed |
| Splash "Version 4.2.1", new icon, length | PASS (browser) | icon loads, visible at 5.3 s, gone by 7.8 s, screenshot reviewed |
| Start main workout button | PASS (browser) | buttons: pre-workout, main workout, post-workout, breathing; main starts at the first main exercise |
| New launcher icon files, round/square, preview | PASS (visual check of generated images) | |
| Icon actually showing on the phone, app name, update over 4.2 | NOT TESTED | needs the GitHub build and install |
| Back/redo, YouTube preview, move/swap, backup/restore, folder flows (mock plugin), plan dates, migration, superset rests, Excel, health, library | PASS (browser) | all re-run on 4.2.1 |
| No sideways scrolling at 360, 412, 768 px | PASS (browser) | all tabs and the move sheet |
| Same signing key as 4.2 | PASS (file compare) | identical to the key in the 4.2 package |
