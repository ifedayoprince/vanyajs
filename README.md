# ⚛️⚡ VanyaJS - Design In Simple Terms

Awesome in SimpleTerms!! Powering the modern web.

![Vanya logo](/assets/logo.svg)

## Features

- ⚛️ [React 18](https://reactjs.org/)
- 📚 [Storybook 7](https://storybook.js.org/) - Components preview
- 🖌️ [Tailwind CSS 3](https://tailwindcss.com/)
- ⏩ [Vite](https://vitejs.dev/) - Run and build the project blazingly fast!
- ⚡ [Vitest](https://vitest.dev/) - Components Unit Testing
- 📐 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Formatting and Linting
- 🌟 [Typescript](https://www.typescriptlang.org/)
- 🐶 [Husky](https://typicode.github.io/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) - Pre-commit Hooks
- ⏰ [Release Please](https://github.com/googleapis/release-please) — Generate the changelog with the release-please workflow
- 👷 [Github Actions](https://github.com/features/actions) — Releasing versions to NPM

## Getting Started

1. Clone the repo
2. Install dependencies with `pnpm i` (first run `corepack enable` to enable pnpm)
3. Run `pnpm prepare` command to setup [Husky](https://typicode.github.io/husky) pre-commit hooks.

## Main Scripts

Always prepending pnpm:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint:fix`: Applies linting based on the rules defined in **.eslintrc.js**.
- `format:prettier`: Formats files using the prettier rules defined in **.prettierrc**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.

## Author

[Ifedayo Prince Oni](https://www.twitter.com/ifedayoprince_/)

## License

[MIT](LICENSE)
