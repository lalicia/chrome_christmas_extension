# Basic Chrome Extension with Vite and Typescript

I mostly followed this [YouTube tutorial](https://www.youtube.com/watch?v=GGi7Brsf7js) by Train to Code.

There's also an article that pretty much mirrors the process [here](https://arglee.medium.com/chrome-extensions-using-vite-typescript-react-stepwise-process-6d013f5332b9).

Images were sourced from [icon-icons.com](https://icon-icons.com/)

Presently this extension is designed to function one way when activated from google.com and another when on another site. It hasn't been widely tested and isn't robust! :) But it's a decent start to see how these things are made.

## To Use

Clone the repo, and `npm install`

Run `npm build` to create the dist folder that's required for uploading to Google.

Visit [chrome://extensions](chrome://extensions/) and ensure Developer mode is toggled on.

Select 'Load unpacked' and navigate to the dist folder of the project. NB it must be the dist folder, not the project main folder. Upload and the extension will appear in a tile on the page.

Open a new browser tab, go to google.com or another website (EG example.com) and navigate to your extensions. Select 'What's this? What's this?' and have fun!

# And the instructions that came in the box...

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
