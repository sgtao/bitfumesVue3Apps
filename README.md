# bitfumesVue3Apps
- GitHub『bitfumes / vue3-for-beginners』のソースをトレースしてみる
  - '22.07時点での環境で実装・構築を試してみる
  - `vue create`利用時と、`create-vue`利用時で変化点を確認する

## 参考資料
- refer GitHub : https://github.com/bitfumes/vue3-for-beginners
- refer U-tube : https://www.youtube.com/watch?v=e-E0UB-YDRk
  - this video title is "Vue 3 Tutorial - Full Course 10 Hours 10 apps". Wow.
- Demo site : https://vue3-full-course.netlify.app/


## トライアル１（`@vue/cli`での開発）
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


<!-- EOF -->