This is a [Next.js](https://nextjs.org/) boilerplate.

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Tokens

The `ci` automatically upload `codecov` reports, but you need to add the following token in your secrets:

```bash
CODECOV_TOKEN=$TOKEN
```

[Check here](https://codecov.io/) how to create your account and get the token

## Commands

| command | description                                           |
| ------- | ----------------------------------------------------- |
| start   | starts a simple server with the build production code |
| dev     | runs your application on `localhost:3000`             |
| build   | creates the production build version                  |
| lint    | runs the linter in all components and pages           |
| test    | runs jest to test all components and pages            |

## To-do

Maybe add a cypress integration

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [Nextjs](https://nextjs.org/)
- [Emotion](https://emotion.sh/docs/)
- [Jest](https://jestjs.io/en/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Husky](https://typicode.github.io/husky/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Codecov](https://about.codecov.io/)
