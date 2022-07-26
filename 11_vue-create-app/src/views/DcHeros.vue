<!-- DcHeros.vuee -->
<template>
  <div>
    <h1>Dc Heros herosCount {{ herosCount }}</h1>
    <ul>
      <li v-for="(hero, index) in dcHeros" :key="hero.name">
        <div>
          {{ index }}: {{ hero.name }}
          <button v-on:click="remove(index)">x</button>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addHero">
      <input v-model="newHero" ref="newHeroRef" />
      <!-- button clickイベントを直接拾うとリロードするので、formでpreventしてハンドリングする -->
      <button type="submit">Add Hero</button>
    </form>
  </div>
</template>
<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    // newHeroRef: 初回レンダリング時(mountされたとき)にfocusするデータ
    const newHeroRef = ref("");
    // newHero: v-modelでinput要素と連動するデータ
    const newHero = ref("");
    // dcHeros: リストデータ
    const dcHeros = ref([
      { name: "SuperGirl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arrow" },
      { name: "SuperMan" }
    ]);
    // mountされたとき、input要素にforcusする？
    onMounted(() => {
      newHeroRef.value.focus();
      console.log(dcHeros.value);
    });
    // heroCount: dcHerosオブジェクトのアイテム数をカウントする
    const herosCount = computed({
      get: () => dcHeros.value.length,
    });
    // listアイテムの削除
    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    }
    // listへのアイテム追加
    function addHero() {
      if (newHero.value !== "") {
        // console.log('add Hero of ' + newHero.value);
        // dcHeros.value.push({ name: newHero.value }); // 最後に追加する場合
        dcHeros.value.unshift({ name: newHero.value }); // 先頭に追加する場合
        newHero.value = "";
      }
    }
    //
    return { newHeroRef, newHero, dcHeros, herosCount, remove, addHero };
  },
}
</script>
<!-- EOF -->
