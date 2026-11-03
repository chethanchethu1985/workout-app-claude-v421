# Adds the permissions this app needs to the generated Android manifest.
p = "android/app/src/main/AndroidManifest.xml"
s = open(p, encoding="utf-8").read()
perms = (
    '    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n'
    '    <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />\n'
    '    <uses-permission android:name="android.permission.VIBRATE" />\n'
)
if "MANAGE_EXTERNAL_STORAGE" not in s:
    assert "<application" in s
    s = s.replace("<application", perms + "    <application", 1)

# ---- Health Connect (read steps, heart rate, active calories) ----
if "health.READ_STEPS" not in s:
    hc = (
        '    <uses-permission android:name="android.permission.health.READ_STEPS" />\n'
        '    <uses-permission android:name="android.permission.health.READ_HEART_RATE" />\n'
        '    <uses-permission android:name="android.permission.health.READ_ACTIVE_CALORIES_BURNED" />\n'
        '    <queries>\n'
        '        <package android:name="com.google.android.apps.healthdata" />\n'
        '    </queries>\n'
    )
    s = s.replace("<application", hc + "    <application", 1)

    # Rationale screen (Health Connect shows this when asking permission)
    rationale = (
        '        <intent-filter>\n'
        '            <action android:name="androidx.health.ACTION_SHOW_PERMISSIONS_RATIONALE" />\n'
        '        </intent-filter>\n'
        '    </activity>'
    )
    assert "</activity>" in s
    s = s.replace("</activity>", rationale, 1)

    # Android 14+ permission-usage entry
    alias = (
        '    <activity-alias android:name="ViewPermissionUsageActivity"\n'
        '        android:exported="true"\n'
        '        android:targetActivity=".MainActivity"\n'
        '        android:permission="android.permission.START_VIEW_PERMISSION_USAGE">\n'
        '        <intent-filter>\n'
        '            <action android:name="android.intent.action.VIEW_PERMISSION_USAGE" />\n'
        '            <category android:name="android.intent.category.HEALTH_PERMISSIONS" />\n'
        '        </intent-filter>\n'
        '    </activity-alias>\n'
        '</application>'
    )
    s = s.replace("</application>", alias, 1)

open(p, "w", encoding="utf-8").write(s)
print("Manifest patched")
