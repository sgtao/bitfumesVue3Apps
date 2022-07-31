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
                        ref="markdownTextArea"
                        class="w-full h-full"
                        v-model="text"
                        @input="update"
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
import {ref, computed} from 'vue';
import {marked} from 'marked';
export default {
    setup() {
        const text = ref('# **initial text**');
        const markedText = computed(() => {
            return marked(text.value);
        });
        return {text, markedText};
    },
};
</script>
<!-- CSS -->
<style></style>
