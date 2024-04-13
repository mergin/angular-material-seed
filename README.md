# AngularMaterialSeed

This project was created as a seed project and as example application for Angular starting with version 17.3.0.

## Development server

Run `npm run start` or `npm run start:aot` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` or preferably `npm run build:aot` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- FEATURES -->
## Key Features

* Lazy loading feature modules
  * Module 1: retrieve and display data from API
  * Module 2: state management
* HTTP interceptor to handle errors.
* Shared module.
* Integrated Material Design.
* Data model with Adapter.
* Eslint integrated.
* Commit rules with Husky.
* Mock local server for development and testing. (TODO)
* Unit testing. (TODO)
* E2E testing. (TODO)
* Responsive layout with Angular's BreakpointObserver Service. (TODO)

<!-- CONTRIBUTING -->
## Contributing

Use [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for development.

Following the [Angular Style Guide](https://angular.io/guide/styleguide) is strongly recommended.

### Commit conventions

Commit conventions allow team to add more semantic meaning to git history. This e.g. includes type, **scope** or **breaking changes**. With this additional information tools can derive useful human-readable information for releases of project. Some examples are [angular commit rules](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```bash
type(scope?): subject
body?
footer?
```

#### Valid Commits

```bash
git commit -m "docs: add developer docs"
git commit -m "docs(scope or developer.md or package name): add developer docs"

// To close issue
git commit -m "fix(button): fix button target event , closes #JIRANUMBER "
```

### Revert

If the commit reverts a previous commit, it should begin with **revert:**, followed by the header of the reverted commit. In the body it should say: **this reverts commit hash.**, where the hash is the SHA of the commit being reverted.

### Possible types

* **chore**: Change build process, tooling or dependencies.
* **ci**: Changes to our CI configuration files and scripts (example scopes: JenkinsFile, Build)
* **feat**: Adds a new feature.
* **fix**: Solves a bug.
* **docs**: Adds or alters documentation.
* **style**: Improves formatting, white-space.
* **refactor**: Rewrites code without feature, performance or bug changes.
* **perf**: Improves performance.
* **test**: Adds or modifies tests.
* **revert**: Changes that reverting other changes
