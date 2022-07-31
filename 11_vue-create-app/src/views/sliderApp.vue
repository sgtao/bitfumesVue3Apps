<!-- sliderApp.vue -->
<!-- template -->
<template>
    <section class="flex flex-wrap w-full relative">
        <h1 class="m-auto w-full text-xl">Slider</h1>
        <div class="w-full" v-for="(color, index) in sliders" :key="color">
            <div
            :class="color"
            style="height:350px"
            >{{ index }}</div>            
        </div>
    </section>
</template>
<!-- script -->
<script>
import { ref, reactive } from 'vue';
export default {
    setup() {
        const currentSlide = ref(1); // 表示スライド番号
        const sliders = reactive([ // スライドcolor
            "bg-teal-600",
            "bg-blue-600",
            "bg-yellow-600",
        ]);
        const makeActive = (index) => {
            currentSlide.value = index;
        }
        // exported variables
        return {
            currentSlide, sliders, makeActive,
        }
    }
}
</script>
<!-- style -->
<style></style>
<!-- EOF -->
