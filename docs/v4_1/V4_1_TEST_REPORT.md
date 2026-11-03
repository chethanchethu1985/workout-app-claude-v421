# V4.1 test report (desktop browser only; no APK built, nothing run on a phone)
| Area | Status | Evidence |
|---|---|---|
| Splash appears and disappears | PASS (browser) | visible at 0.35 s, gone by 1.9 s, screenshot reviewed, no page errors |
| Library page length | PASS (browser) | 73.1 screens -> 2.0 screens at 390x844 |
| Library search, category and status filters, Show more, expand | PASS (browser) | 293 workouts, Chest 17, search "press" 7 rows |
| Add, edit, remove a workout; Start now from the list | PASS (browser) | player opened |
| Excel tab and Media folders tab | PASS (browser) | Excel import with stubbed library still works; folder card present |
| V3 data migration, plan dates, superset rests, dashboard | PASS (browser) | re-run on V4.1 |
| Health tracker, projected HbA1c, combined chart | PASS (browser) | re-run on V4.1 |
| No sideways scrolling at 360, 412, 768 px | PASS (browser) | all tabs incl. library sub-tabs |
| Native black launch background | NOT TESTED | best-effort workflow step, never built here |
| APK build, install, startup on a phone | NOT TESTED | run the GitHub workflow |
