# bitfumesVue3Apps
- bitfumesさんのGitHub『vue3-for-beginners』のソースをトレースしてみる
  - '22.7時点での環境で実装・構築を試してみる
  - `vue create`利用時と、`create-vue`利用時で変化点を確認する

[[_TOC_]]

## 参考資料
- refer GitHub : https://github.com/bitfumes/vue3-for-beginners
- refer U-tube : https://www.youtube.com/watch?v=e-E0UB-YDRk
  - this video title is "Vue 3 Tutorial - Full Course 10 Hours 10 apps". Wow.
- Demo site : https://vue3-full-course.netlify.app/

## 作成プロジェクト
- トライアル１（`@vue/cli crate`による構築環境での開発）
  - [オリジナルの理解と実装方針のメモ](11_vue-create-app/README.md)
    - OptionalAPIでコーディングしているものもCompositionAPIに変えてみる
  - [デモサイト](https://bitfumesvue3apps.web.app)
- トライアル２（`create-vue`による構築環境での開発）
  - トライアル１の作成コンテンツを流用して、変更されるパッケージに合わせて変更(ストア機能をpiniaにするなど）

## 利用パッケージ
- some npm packages
- bootstrap-reboot.css(v5.2.0) as code

## 利用方法

### トライアル１（`@vue/cli crate`の開発環境）

- コンパイル＆モック起動
```shell
( cd 11_vue-create-app/ ; npm run serve; )
```

- Lintチェック
```shell
( cd 11_vue-create-app/ ; npm run lint; )
```
  - Gitコミット時とビルド実行時は、Lintチェックが自動実行される

- ビルドとデプロイ
```shell
( cd 11_vue-create-app/ ; npm run build; npm run deploy; )
```

- テスト
  - まだ準備できてません

### トライアル２（`create-vue`の開発環境）
- まだ準備できてません

<!-- EOF -->