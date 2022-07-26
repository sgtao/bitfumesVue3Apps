<!-- DcHeros.vuee -->
<template>
  <div>
    <h1>Dc Heros herosCount {{ herosCount }}</h1>
    <ul>
      <li v-for="(hero, index) in dcHeros" :key="hero.name">
        <div>
          {{ index }}: {{ hero.name }}
          <button>x</button>
        </div>
      </li>
    </ul>
    <form>
      <input v-model="newHero" ref="newHeroRef" />
      <button>Add Hero</button>
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
    //
    return { newHeroRef, newHero, dcHeros, herosCount };
  },
}
</script>
<!-- EOF -->
