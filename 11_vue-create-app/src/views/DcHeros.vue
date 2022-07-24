<!-- DcHeros.vuee -->
<template>
  <h1>DcHeros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ index }}: {{ hero.name }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      dcHeros: [{ name: 'SuperGirl' }, { name: 'Flash' }, { name: 'Batman' }, { name: 'Arrow' }, { name: 'SuperMan' }],
    }
  },
}
</script>
