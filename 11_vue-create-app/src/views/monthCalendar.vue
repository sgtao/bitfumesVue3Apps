<!-- monthCalendar.vue -->
<template>
    <div class="m-auto p-2">
        <h1 class="text-3xl my-2 text-center">Calendar</h1>
        <section class="flex justify-between">
            <h2 class="font-bold text-right">{{ currentMonthName }}</h2>
            <h2 class="font-bold">{{ currentYear }}</h2>
        </section>
        <section class="flex justify-between">
            <button  class="px-2 border rounded bg-red-200"
                v-on:click="prevMonth">
                prev
            </button>
            <button  class="px-2 border rounded bg-blue-200"
                v-on:click="nextMonth">
                next
            </button>
        </section>
        <section class="mt-2 flex justify-between">
            <p class="m-2 text-center font-bold"
                v-for="day in days" :key="day"
            >
                {{ day }}
            </p>
        </section>
        <section class="flex flex-wrap">
            <p
                class="text-center"
                style="width: 14.28%"
                v-for="num in startDay()"
                :key="num"
            ></p>
            <p
                class="text-center"
                style="width: 14.28%"
                v-for="num in daysInMonth()"
                :key="num"
                :class="currenDateClass(num)"
            >{{num}}</p>
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
            const calendarMonth = new Date(currentYear.value, currentMonth.value);
            console.log(calendarMonth.toLocaleString("default", { month: "long"}));
            return calendarMonth.toLocaleString("default", { month: "long"});
        })
        //
        // 指定年月の１日目の曜日を取得
        const startDay = () => {
            const calendarDate = new Date(currentYear.value, currentMonth.value, 1);
            console.log('startDay : ' + calendarDate.getDay());
            return calendarDate.getDay();
        };
        // 指定年月の日数を取得
        const daysInMonth = () => {
            return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
        };
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
        // 今日の日付にクラス名を追加付与する
        const currenDateClass = (num) => {
            const calenderFullDate = new Date(
                currentYear.value,
                currentMonth.value,
                num
            ).toDateString();
            const currentFullDate = new Date().toDateString();
            return calenderFullDate === currentFullDate ? 
                "text-red-600 bg-green-200 rounded-full flex items-center justify-center" : 
                "";
        }
        //
        return {
            currentDate, currentMonth, currentYear, days,
            currentMonthName, startDay, daysInMonth, nextMonth, prevMonth,
            currenDateClass, 
        }
    }
}
</script>