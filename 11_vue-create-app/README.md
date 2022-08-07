# vue-create-app

## Build Apps 

1. 🔷 [DcHeros](memos/11_DcHeros.md)
   1. v-for
   2. v-bind
   3. v-model
   4. v-on
   5. methods
   6. computed properties ( getters & setters)
   <!-- 7. vue components -->
2. 🔷 [Calendar](memos/12_Calendar.md)
   1. Javascript Date
   2. v-if
   3. vue components
3. 🔷 [Markdown](memos/13_Markdown.md)
   1. Using External Library
   2. Vue Mixins
4. 🔷 [Slider](memos/14_Slider.md)
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
6. 🔷 [Calculator](memos/16_Calculator.md)
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
10. 🔷 [Tensorflow Object Detection](memos/20_TensorFlow.md)
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

## Vue router, Vuex の追加
- プロジェクト作成時にrouerとstoreを指定し忘れていたので追加
```
vue add router
vue add vuex
```
  - routerを後付けしたので、エラーしてしまい、微調整

## VueCLIのアップデート
- VueCLIアップデート方法
  - refer Vue : https://cli.vuejs.org/guide/installation.html#upgrading
```shell
npm update -g @vue/cli
npm update
```

## tailwindcssの追加

### 1. パッケージのインストール
```shell
npm install -D tailwindcss postcss autoprefixer
```

### 2.  configファイルを作成
```shell
npx tailwindcss init -p
```

- 作成されたファイル
```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```js
// cat postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. すべてのファイルでtailwindcssを適用
- `tailwind.config.js`を編集する
```js
module.exports = {
- content: [],
+ content: [
+   "./index.html",
+   "./src/**/*.{vue,js,ts,jsx,tsx}",
+ ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. tailwindをプロジェクトのCSSに追加
- ./src/index.cssを追加
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `./src/main.js`で読み込む
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
+ import './index.css'
//
createApp(App).use(store).use(router).mount('#app')
//
// EOF
```

### 5. 動作確認
- 開発サーバを起動してみる
```shell
npm run serve
```

### 6. ESLint+Prettierを適用する
- ics-mediaの[Prettier導入記事](https://ics.media/entry/17030/)を参考にESLint+Prettierを導入する
  - refer Google : https://google.github.io/styleguide/jsguide.html
  - refer ESLint : https://eslint.org/docs/latest/rules

```shell
npm run lint   # only lint check
npm run format # overwrite by prettier
npm run lint-fix # overwrite recommended and format
```

#### Googleスタイルでは、コメントにJSDocを使うケースがある
- Googleの[JavaScriptスタイルガイド](https://google.github.io/styleguide/jsguide.html#terminology-notes)には、コメントに対するルールが設定されている
> 1.1 Terminology notes
> > The term comment always refers to implementation comments. We do not use the phrase documentation comments, instead using the common term “JSDoc” for both human-readable text and machine-readable annotations within

- `function`定義でJSDocコメントがないと、ESLintでエラーしてしまうことがあるので、書き方を参照しよう
  - refer for annotations : https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler
  - refer GitHub : https://github.com/jsdoc/jsdoc
  - refer article: https://ics.media/entry/6789/


### 7. Huskyで`ESLint+Prettier`をコミット時に実行する
- husky が　v8になっているので、最近(公式？)の手順で追加する必要がありそう
  - refer husky : https://typicode.github.io/husky/#/?id=automatic-recommended
  - install
```shell
npx husky-init && npm install       # npm
````
  - setup (add command at pre-commit)
    - `.husky/pre-commit`の中身を書き換えてあげれば動くようだ
```shell
$ cat .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
#
- npm test
+ cd 11_vue-create-app
+ npm run lint-fix
# EOF
$
```

### 8. firebaseでHostingする
- とらゼミ「React入門【実践編】#3...Firebaseプロジェクトの作成と初めてのデプロイ」を参考にホスティングする
  - refer U-tube : https://www.youtube.com/watch?v=ta2m6nfYHuQ






