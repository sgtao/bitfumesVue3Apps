<!-- sliderApp.vue -->
<!-- template -->
<template>
    <section class="flex flex-wrap w-full relative">
        <h1 class="m-auto w-full text-xl">Slider</h1>
        <div class="w-full absolute" v-for="(color, index) in sliders" :key="color">
            <transition name="fade">
                <div v-if="index === currentSlide" :class="color" style="height: 350px">
                    {{ index }}
                </div>
            </transition>
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
            // スライドcolor
            'bg-teal-600',
            'bg-blue-600',
            'bg-yellow-600',
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
            interval.value = setInterval(() => {
                currentSlide.value = currentSlide.value === 2 ? 0 : (currentSlide.value += 1);
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
