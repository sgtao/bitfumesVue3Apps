<!-- 11_DcHeros.md -->
# 11_DcHeros
- [DC Comics Hero](https://www.dccomics.com/characters)をリストアップするアプリ

## 利用機能
1. v-for
2. v-bind
3. v-model
4. v-on
5. methods
6. computed properties ( getters & setters)
7. vue components


## 参照ソースの理解

- snapshot

![snapshot](images/11_DcHeros.png)

- template
```HTML
<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center my-4">Dc Heros {{ herosCount }}</h1>
    <ul class="border rounded p-2">
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded px-2"
        v-model="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white ml-2 px-2"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>
```
