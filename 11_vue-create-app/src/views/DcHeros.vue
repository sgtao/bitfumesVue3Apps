<!-- DcHeros.vuee -->
<template>
  <h1>DcHeros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      <div>
        {{ index }}: {{ hero.name }}
        <button>x</button>
      </div>
    </li>
  </ul>
  <input v-bind:value="newHero.data" />
  <button v-bind:disabled="isDisabled">Add Hero</button>
</template>
<script>
export default {
  data() {
    return {
      isDisabled: false,
      newHero: { data: 'Aquaman' },
      dcHeros: [{ name: 'SuperGirl' }, { name: 'Flash' }, { name: 'Batman' }, { name: 'Arrow' }, { name: 'SuperMan' }],
    }
  },
}
</script>
<!-- EOF -->
