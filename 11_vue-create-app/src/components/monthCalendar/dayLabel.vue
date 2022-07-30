<!-- dayLabel.vue -->
<template>
    <section class="mt-2 flex justify-between">
        <p class="m-2 text-center font-bold" v-for="day in days" :key="day">
            {{ day }}
        </p>
    </section>
</template>
<script>
export default {
    name: 'dayLabel',
    props: {
        'days': Array,
    },
};
</script>
<!-- EOF -->
