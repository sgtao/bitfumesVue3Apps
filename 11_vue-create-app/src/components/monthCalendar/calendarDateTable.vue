<!-- calendarDateTable.vue -->
<template>
    <section class="flex flex-wrap">
        <p class="text-center" style="width: 14.28%" v-for="num in 3" :key="num"></p>
        <p class="text-center" style="width: 14.28%" v-for="num in 30" :key="num" :class="currenDateClass(num)">
            {{ num }}
        </p>
    </section>
</template>
<script>
export default {
    name: 'calendarDateTable',
    props: {
        currentYear: Number,
        currentMonth: Number,
    },
    setup(currentYear, currentMonth) {
        console.log(currentYear);
        console.log(currentMonth);
        // 指定年月の１日目の曜日を取得
        const startDay = () => {
            const calendarDate = new Date(currentYear, currentMonth, 1);
            console.log('startDay : ' + calendarDate.getDay());
            return calendarDate.getDay();
        };
        // 指定年月の日数を取得
        const daysInMonth = () => {
            return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
        };
        //
        // 今日の日付にクラス名を追加付与する
        const currenDateClass = (num) => {
            const calenderFullDate = new Date(currentYear.value, currentMonth.value, num).toDateString();
            const currentFullDate = new Date().toDateString();
            return calenderFullDate === currentFullDate
                ? 'text-red-600 bg-green-200 rounded-full flex items-center justify-center'
                : '';
        };
        //
        return {
            startDay,
            daysInMonth,
            currenDateClass,
        };
    },
};
</script>
<!-- EOF -->
