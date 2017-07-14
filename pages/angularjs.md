# AngularJS

## CLI setup project

1. Setup angular CLI
```shell
npm install -g @angular/cli
```

2. Create a new project
```shell
ng new my-project
```

3. Test and deploy
```shell
cd my-project
ng serve --open
```

## Setup from Official Repository Github

### 1. Clone project from Github

```shell
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
```

Windows user may encounter some problems with npm dependencies :
```debug
$ npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
$ npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
$ npm notice created a lockfile as package-lock.json. You should commit this file.
$ npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.2 (node_modules\fsevents):
$ npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
```
Fix the problem as shown below and run `npm install` again :
```shell
npm install -g minimatch@3.0.2
npm install -g uuid
npm install
```
Note that `fsevents` can be ignored beacause it's a Mac OS specific dependency.

### 2. Clean & Run project
Non-essential files can be removed safety before running the project:
```shell
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q
npm start
```