gordo@Webelistics□ MINGW64 /d/webelistics_webe
$ npm i open -D

added 4 packages, and audited 1025 packages in 3s

59 packages are looking for funding
run `npm fund` for details

6 high severity vulnerabilities

To address issues that do not require attention, run:
npm audit fix

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.

gordo@Webelistics□ MINGW64 /d/webelistics_webe
$ npm audit

# npm audit report

glob-parent <5.1.2
Severity: high
Regular expression denial of service - https://github.com/advisories/GHSA-ww39-953v-wcq6
fix available via `npm audit fix --force`
Will install gulp@3.9.1, which is a breaking change
node_modules/glob-parent
chokidar 1.0.0-rc1 - 2.1.8
Depends on vulnerable versions of glob-parent
node_modules/chokidar
glob-watcher >=3.0.0
Depends on vulnerable versions of chokidar
node_modules/glob-watcher
glob-stream 5.3.0 - 6.1.0
Depends on vulnerable versions of glob-parent
node_modules/glob-stream
vinyl-fs >=2.4.2
Depends on vulnerable versions of glob-stream
node_modules/vinyl-fs
