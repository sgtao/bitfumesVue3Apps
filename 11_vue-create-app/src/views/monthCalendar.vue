<!-- monthCalendar.vue -->
<template>
    <div class="m-auto p-2">
        <h1 class="text-3xl my-2 text-center">Calendar</h1>
        <section>
            <h2>{{ currentMonthName }}</h2>
            <h2>{{ currentYear }}</h2>
        </section>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
    setup() {
        // 現在時刻の年月日
        const today = new Date();
        const currentDate = ref(today.getUTCDate());
        const currentMonth = ref(today.getMonth());
        const currentYear = ref(today.getFullYear());
        // 曜日のラベル
        const days = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
        // 月名の表示
        const currentMonthName = computed(() => {
            console.log(currentYear.value, currentMonth.value) ;
            const calendarMonth = new Date(currentYear.value, currentMonth.value);
            console.log(calendarMonth);
            return calendarMonth.toLocaleString("default", { month: "long"});
        })
        return {
            currentDate, currentMonth, currentYear, days,
            currentMonthName, 
        }
    }
}
</script>