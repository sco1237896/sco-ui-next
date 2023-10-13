This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

- [NodeJS](https://nodejs.org/en) (v18.x or higher)
- [npm](https://www.npmjs.com/) (v3.x or higher)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Tests

### Unit Tests

Run all [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) unit tests:

```bash
npm run test
````

Launches the test runner in the interactive watch mode.

Tests are colocated and live as closely to corresponding code as possible.


## Storybook

We use [Storybook](https://storybook.js.org/) for [Component Driven Development](https://www.componentdriven.org/) (CDD) where possible. Storybook makes it easy to keep presentational components isolated. You can learn more about how to create a story for your UI component [here](https://storybook.js.org/docs/react/writing-stories/introduction).

Builds are enabled for all pull requests, which makes it easy to share development of new UI components with team members as well as to catch visual changes. 

To run Storybook locally: `npm run storybook`

To publish to Chromatic: `npm run chromatic`

- [sco-ui Storybook of the main branch](https://main--651ecd1e3026bc6c081c82b9.chromatic.com)
- [sco-ui Chromatic Builds](https://www.chromatic.com/library?appId=651ecd1e3026bc6c081c82b9&branch=main)


```bash
npm run storybook
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
