# React Form Example with usage of React Hook Form, Typescript, zod and interationalization

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Disclaimer

Main goal of this repository is to provide a backbone for setting up React Hook Form with several enhancements such as typescript, zod resolvers, error message translation. Styling was reduced to a bare minimum.

## Stack

### `React Hook Form`

[React Hook Form](https://react-hook-form.com/get-started) provides methods and components necessary in advanced form creation and state management. In this example project logic of retrieving form field state has been transferred to nested components with usage of hooks such as `useFormContext` or `useController`.

### `zod`

[Zod](https://github.com/colinhacks/zod) is a great schema validation library that can be used with React Hook Form, apply restrictions and keep an eye on the shape of our data.

### `react-i18next`

[i18n-react](https://react.i18next.com/) has been configured to provide translations for error messages.

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
