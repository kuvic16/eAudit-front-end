# eAudit Front-end Markup

[![Dependabot badge](https://flat.badgen.net/dependabot/wbkd/webpack-starter?icon=dependabot)](https://dependabot.com/)

XD [Design](https://xd.adobe.com/view/7a60102c-d926-4d15-942a-59bb091f13d8-2f33)

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

- Access dev enviroment from phone under the same network (your_ip:8080)
- ES6 Support via [babel](https://babeljs.io/) (v7)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefix via [POSTCSS-loader]
- Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
