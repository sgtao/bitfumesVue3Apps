<!-- DcHeros.vuee -->
<template>
    <div class="m-auto h-full">
        <h1 class="text-3xl text-center my-4">Dc Heros herosCount {{ herosCount }}</h1>
        <ul class="rounded p-2 w-80 m-auto">
            <li class="m-auto" v-for="(hero, index) in dcHeros" :key="hero.name">
                <div
                    class="flex justify-between border mt-3 p-1 text-white bg-gradient-to-r from-blue-700 to-skyblue-500"
                >
                    {{ index }}: {{ hero.name }}
                    <button class="text-black" v-on:click="remove(index)">x</button>
                </div>
            </li>
        </ul>
        <form class="m-auto mt-10" @submit.prevent="addHero">
            <input class="border-solid border-4 rounded px-2" v-model="newHero" ref="newHeroRef" />
            <!-- button clickイベントを直接拾うとリロードするので、formでpreventしてハンドリングする -->
            <button
                class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white ml-2 px-2"
                type="submit"
            >
                Add Hero
            </button>
        </form>
    </div>
</template>
<script>
import {computed, onMounted, ref} from 'vue';
export default {
    /**
     * setup() : CompositionAPI定義
     * @return {*} defined const variables
     */
    setup() {
        // newHeroRef: 初回レンダリング時(mountされたとき)にfocusするデータ
        const newHeroRef = ref('');
        // newHero: v-modelでinput要素と連動するデータ
        const newHero = ref('');
        // dcHeros: リストデータ
        const dcHeros = ref([
            {name: 'SuperGirl'},
            {name: 'Flash'},
            {name: 'Batman'},
            {name: 'Arrow'},
            {name: 'SuperMan'},
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
        /**
         * remove: listアイテムの削除
         * @param {number} index : dcHeros array index
         */
        function remove(index) {
            dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
        }
        //
        /**
         * addHero: listへのアイテム追加
         */
        function addHero() {
            if (newHero.value !== '') {
                // console.log('add Hero of ' + newHero.value);
                // dcHeros.value.push({ name: newHero.value }); // 最後に追加する場合
                dcHeros.value.unshift({name: newHero.value}); // 先頭に追加する場合
                newHero.value = '';
            }
        }
        //
        return {newHeroRef, newHero, dcHeros, herosCount, remove, addHero};
    },
};
</script>
<!-- EOF -->
