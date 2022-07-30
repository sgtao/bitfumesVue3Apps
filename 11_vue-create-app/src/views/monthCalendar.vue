<!-- monthCalendar.vue -->
<template>
    <div class="m-auto p-2 max-w-lg">
        <h1 class="text-3xl my-2 text-center">Calendar</h1>
        <monthLabel :monthName="currentMonthName" :year="currentYear" />
        <section class="flex justify-between">
            <button class="px-2 border rounded bg-red-200" v-on:click="prevMonth">prev</button>
            <button class="px-2 border rounded bg-green-200" v-on:click="currMonth">today</button>
            <button class="px-2 border rounded bg-blue-200" v-on:click="nextMonth">next</button>
        </section>
        <dayLabel :days="days" />
        <dateTable :currentYear="currentYear" :currentMonth="currentMonth"></dateTable>
    </div>
</template>

<script>
import {computed, ref} from 'vue';
import monthLabel from '@/components/monthCalendar/monthLabel';
import dayLabel from '@/components/monthCalendar/dayLabel';
import dateTable from '@/components/monthCalendar/dateTable';
export default {
    components: {
        monthLabel,
        dayLabel,
        dateTable,
    },
    setup() {
        // 現在時刻の年月日
        const today = new Date();
        const currentDate = ref(today.getUTCDate());
        const currentMonth = ref(today.getMonth());
        const currentYear = ref(today.getFullYear());
        // 曜日のラベル
        const days = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
        //
        // 月名の表示
        const currentMonthName = computed(() => {
            const calendarMonth = new Date(currentYear.value, currentMonth.value);
            // console.log(calendarMonth.toLocaleString('default', {month: 'long'}));
            return calendarMonth.toLocaleString('default', {month: 'long'});
        });
        // 翌月への遷移
        const nextMonth = () => {
            if (currentMonth.value >= 11) {
                currentYear.value++;
                currentMonth.value = 0;
            } else {
                currentMonth.value++;
            }
        };
        //
        // 前月への遷移
        const prevMonth = () => {
            if (currentMonth.value <= 0) {
                currentYear.value--;
                currentMonth.value = 11;
            } else {
                currentMonth.value--;
            }
        };
        //
        // 今月への遷移
        const currMonth = () => {
            const today = new Date();
            currentMonth.value = today.getMonth();
            currentYear.value = today.getFullYear();
        };
        //
        return {
            currentDate,
            currentMonth,
            currentYear,
            days,
            currentMonthName,
            nextMonth,
            prevMonth,
            currMonth,
        };
    },
};
</script>
