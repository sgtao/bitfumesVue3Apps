# vue-create-app

## トライアル１（`@vue/cli`での開発）の準備メモ
- ツール版数：`Vue CLI v5.0.8`

### 構築確認
```shell
npx @vue/cli create vue-create-app
cd vue-create-app
npm run serve
npm run build
```

- フォルダ名は変更する
```shell
mv  vue-create-app 11_vue-create-app
```

## 環境追加（Prettier追加）
- prettierを開発用に追加
```shell
npm install prettier --save-dev
```
  - 設定は最小限にした
```
$ cat 11_vue-create-app/.prettierrc
{
    "printWidth": 120,
    "singleQuote": true,
    "semi": false
}
$
```

- `.eslintrc`の変更
```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
-    'eslint:recommended'
+    'eslint:recommended',
+    'prettier'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
```

- `package.json`の変更
```JSON
{
  "name": "vue-create-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
-    "lint": "vue-cli-service lint"
+    "lint": "vue-cli-service lint",
+    "format": "prettier -w src/*.{js,vue} && prettier -w src/**/*.{js,vue}",
+    "lint-fix": "npm run format && vue-cli-service lint --fix"
  },
  "dependencies": {
    "core-js": "^3.8.3",
    "vue": "^3.2.13"
  },
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "eslint": "^7.32.0",
-    "eslint-plugin-vue": "^8.0.3"
+    "eslint-config-prettier": "^8.5.0",
+    "eslint-plugin-vue": "^8.0.3",
+    "prettier": "^2.7.1"
  }
}

```

### Vue router, Vuex の追加
- プロジェクト作成時にrouerとstoreを指定し忘れていたので追加
```
vue add router
vue add vuex
```
  - routerを後付けしたので、エラーしてしまい、微調整



## Build Apps 

1. 🔷 [DcHeros](memos/11_DcHeros.md)
   1. v-for
   2. v-bind
   3. v-model
   4. v-on
   5. methods
   6. computed properties ( getters & setters)
   7. vue components
2. 🔷 Calendar
   1. Javascript Date
   2. Vue Router
3. 🔷 Markdown
   1. Using External Library
   2. Vue Mixins
4. 🔷 Slider
   1. Vue Transition & Animation
   2. virtual DOM
   3. lifecycle hooks
5. 🔷 Login Page
   1. Create Modal
   2. Vue Custom Events Emitting
   3. Form Handling
   4. firebase authentication
   5. loading effect
   6. Template Refs
   7. component props
   8. firebase google login
   9. Refactoring with component
   10. vue3 teleport
6. 🔷 Calculator
   1. Composition API
   2. window event listener
   3. resuable composition api
7. 🔷 ReuseableModal
   1. slots
   2. named slots
8. 🔷 Chat
   1. Firebase Realtime Database
   2. vuex v4
   3. Custom Router middleware
9. 🔷 UserCrud
   1. using axios
   2. external API
   3. reactive vue3 api
   4. pagination
   5. envirnment variable (.env file)
10. 🔷 Tensorflow Object Detection
    1. Using Tensorflow with Vue
    2. Device Camera Open
    3. Working with Canvas

## project commands.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint     # check of lint
npm run format   # exec. prettier
npm run lint-fix # run format and lint-fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
