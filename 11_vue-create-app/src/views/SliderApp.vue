<!-- SliderApp.vue -->
<!-- template -->
<template>
    <section class="flex flex-wrap w-full relative">
        <h1 class="m-auto w-full text-xl">Slider</h1>
        <div class="w-full absolute" v-for="(color, index) in sliders" :key="color">
            <transition name="fade">
                <div v-if="index === currentSlide" :class="color" style="height: 350px">
                    <p class="text-white pt-40 text-xl">{{ index + 1 }}</p>
                </div>
            </transition>
        </div>
        <div class="w-full" style="height: 340px">
            <div class="absolute bottom-0 w-full flex justify-center">
                <!-- currentSlideのマークのみ色を変える -->
                <div
                    v-for="(slider, index) in sliders"
                    :key="slider"
                    @click="makeActive(index)"
                    :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
                    class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
                ></div>
            </div>
        </div>
    </section>
</template>
<!-- script -->
<script>
import {ref, reactive, onMounted, onBeforeUnmount} from 'vue';
export default {
    setup() {
        const currentSlide = ref(1); // 表示スライド番号
        const sliders = reactive([
            // スライドcolor(指定可能な色の種類分を定義)
            'bg-red-600',
            'bg-orange-600',
            'bg-yellow-600',
            'bg-green-600',
            'bg-teal-600',
            'bg-blue-600',
            'bg-indigo-600',
            'bg-purple-600',
            'bg-pink-600',
        ]);
        const interval = ref('');
        //
        // define function as method
        const makeActive = (index) => {
            currentSlide.value = index;
        };
        //
        // define lifecyle hooks
        onMounted(() => {
            console.log(sliders.length);
            interval.value = setInterval(() => {
                currentSlide.value =
                    currentSlide.value === sliders.length - 1 ? 0 : (currentSlide.value += 1);
            }, 2000);
        });
        onBeforeUnmount(() => {
            clearInterval(interval.value);
        });
        // exported variables
        return {
            currentSlide,
            sliders,
            makeActive,
        };
    },
};
</script>
<!-- style -->
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}
.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}
.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
<!-- EOF -->
