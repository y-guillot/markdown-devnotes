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

The best choice is to start from the [quickstart GitHub project](https://github.com/angular/quickstart).   

```shell
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
```

Windows user may encounter some problems with npm dependencies :
```debug
npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
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

### 3. Structure of an Angular application

```tree
src
	app
		app.component.ts
		app.module.ts
			app.module.ts to DELETE
			app.module.ts to DELETE
		app.module.ts to DELETE
			app.module.ts to DELETE
	main.ts
DELETE
	app.module.ts to DELETE
```

### 4. npm scripts

By default, some usefull scripts are available in `package.json` such as :

- `npm start` : runs the compiler and a server at the same time, both in "watch mode".
- `npm run build` : runs the TypeScript compiler once.
- `npm run build:w` : runs the TypeScript compiler in watch mode, awaiting changes to TypeScript files.
- `npm run serve` : runs the lite-server, a light-weight, static file server.
- `npm test` : compiles, runs and watches the karma unit tests.
- `npm run e2e` : compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts).


## Angularize an existing project

In order to embed Angular into your existing MVC website, we have to use again some files from the [quickstart GitHub project](https://github.com/angular/quickstart).   