<!-- monthLabel.vue -->
<template>
    <section class="flex justify-between">
        <h2 class="font-bold text-right">{{ monthName }}</h2>
        <h2 class="font-bold">{{ year }}</h2>
    </section>
</template>
<script>
export default {
    name: 'monthLabel',
    props: {
        monthName: String,
        year: Number,
    },
};
</script>
<!-- EOF -->
