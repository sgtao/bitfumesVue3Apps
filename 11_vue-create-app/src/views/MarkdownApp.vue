<!-- MarkdownApp.vue -->
<!-- HTML -->
<template>
    <div class="m-auto h-screen">
        <h1 class="w-full text-3xl my-4">Markdown App</h1>
        <!-- アプリ本体の領域 -->
        <div class="flex flex-wrap w-full h-screen">
            <section class="flex m-auto w-10/12 h-full">
                <!-- テキストエリアを設置 -->
                <article class="w-1/2 border">
                    <textarea
                        ref="textRef"
                        class="w-full h-full"
                        v-bind:value="text"
                        v-on:input="update"
                    ></textarea>
                </article>
                <!-- v-htmlで結果を表示 -->
                <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
            </section>
        </div>
    </div>
</template>
<!-- JavaScript -->
<script>
import {ref, computed, onMounted} from 'vue';
import {marked} from 'marked';
import useDebounce from '@/utilities/composition/useDebounce';
export default {
    setup() {
        const textRef = ref(''); // text領域のforcus用
        const text = ref('# **initial text**\n\n Write markdown\n\n');
        const markedText = computed(() => {
            console.log('marked at ' + Date(Date.now()));
            return marked(text.value);
        });
        const debounce = useDebounce();
        const update = (e) => {
            // define task as callback
            const task = () => {
                if (text.value !== e.target.value) {
                    text.value = e.target.value;
                }
            };
            // exec task with debounce
            debounce(task, 500);
        };
        // mountされたとき、input要素にforcusする？
        onMounted(() => {
            textRef.value.focus();
        });
        return {textRef, text, markedText, update};
    },
};
</script>
<!-- CSS -->
<style></style>
