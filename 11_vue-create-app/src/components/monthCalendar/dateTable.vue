<!-- dateTable.vue -->
<template>
    <section class="flex flex-wrap">
        <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
        <p class="text-center" style="width: 14.28%" v-for="num in daysInMonth()" :key="num" :class="currenDateClass(num)">
            {{ num }}
        </p>
    </section>
</template>
<script>
export default {
    name: 'dateTable',
    props: {
        'currentYear' : Number,
        'currentMonth': Number,
    },
    setup(props) {
        // 指定年月の１日目の曜日を取得
        const startDay = () => {
            // console.log(props.currentYear);
            // console.log(props.currentMonth);
            const calendarDate = new Date(props.currentYear, props.currentMonth, 1);
            // console.log('startDay at dateTable: ' + calendarDate.getDay());
            return calendarDate.getDay();
        };
        // 指定年月の日数を取得
        const daysInMonth = () => {
            return new Date(props.currentYear, props.currentMonth + 1, 0).getDate();
        };
        //
        // 今日の日付にクラス名を追加付与する
        const currenDateClass = (num) => {
            const calenderFullDate = new Date(props.currentYear, props.currentMonth, num).toDateString();
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
