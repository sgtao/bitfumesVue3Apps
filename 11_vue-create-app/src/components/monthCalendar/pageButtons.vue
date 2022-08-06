<!-- pageButtons.vue -->
<template>
    <section class="flex justify-between">
        <button class="px-2 border rounded bg-red-200" v-on:click="$emit('emitPrevMonth')">prev</button>
        <button class="px-2 border rounded bg-green-200" v-on:click="$emit('emitCurrMonth')">today</button>
        <button class="px-2 border rounded bg-blue-200" v-on:click="$emit('emitNextMonth')">next</button>
    </section>
</template>
<script>
export default {
    name: 'pageButtons',
    emits: [
        'emitPrevMonth',
        'emitCurrMonth',
        'emitNextMonth',
    ],
};
</script>
<!-- EOF -->