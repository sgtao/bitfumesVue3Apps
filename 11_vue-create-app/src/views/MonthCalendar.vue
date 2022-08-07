<!-- MonthCalendar.vue -->
<template>
    <div class="m-auto p-2 max-w-lg">
        <h1 class="text-3xl my-2 text-center">Calendar</h1>
        <MonthLabel :monthName="currentMonthName" :year="currentYear" />
        <PageButtons
            @emitPrevMonth="prevMonth"
            @emitCurrMonth="currMonth"
            @emitNextMonth="nextMonth"
        />
        <DayLabel :days="days" />
        <DateTable :currentYear="currentYear" :currentMonth="currentMonth" />
    </div>
</template>

<script>
import {computed, ref} from 'vue';
import MonthLabel from '@/components/MonthCalendar/MonthLabel';
import DayLabel from '@/components/MonthCalendar/DayLabel';
import DateTable from '@/components/MonthCalendar/DateTable';
import PageButtons from '@/components/MonthCalendar/PageButtons';
export default {
    components: {
        MonthLabel,
        DayLabel,
        DateTable,
        PageButtons,
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
