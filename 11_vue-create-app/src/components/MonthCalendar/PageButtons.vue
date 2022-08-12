<!-- pageButtons.vue -->
<template>
    <section class="flex justify-between">
        <button class="px-2 border rounded bg-red-200" v-on:click="prevMonth">prev</button>
        <button class="px-2 border rounded bg-green-200" v-on:click="currMonth">today</button>
        <button class="px-2 border rounded bg-blue-200" v-on:click="nextMonth">next</button>
    </section>
</template>
<script>
export default {
    name: 'pageButtons',
    setup(_, {emit}) {
        /**
         * emit functions
         */
        const prevMonth = () => {
            emit('emitPrevMonth');
        };
        const currMonth = () => {
            emit('emitCurrMonth');
        };
        const nextMonth = () => {
            emit('emitNextMonth');
        };
        return {prevMonth, currMonth, nextMonth};
    },
};
</script>
<!-- EOF -->
