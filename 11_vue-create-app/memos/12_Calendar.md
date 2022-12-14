<!-- 12_Calendar.md -->
# ð· Calendar
- æãããã®ã«ã¬ã³ãã¼ã¢ããª

## å©ç¨æ©è½
1. Javascript Date
2. v-if
3. vue components

## åç§ã½ã¼ã¹ã®çè§£

### snapshot

![snapshot](images/12_Calendar.png)

### template
```html
<template>
  <div class="m-auto p-2">
    <h1 class="text-3xl my-2 text-center">Vue Calendar</h1>
    <!-- æã¨å¹´ãå·¦å³ã«è¡¨ç¤º -->
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>
    <!-- æ¥ææ¥ããåææ¥ã¾ã§ã®è¡¨ç¤º -->
    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <!-- æ¥ãè¡¨ç¤º -->
    <section class="flex flex-wrap">
      <!-- ç¬¬ï¼é±ç®ã®è¡¨ç¤ºï¼ï¼æ¥ã®åã«ç©ºç½ãå¥ããï¼ -->
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <!-- ï¼é±ç®ä»¥éã®è¡¨ç¤º -->
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currenDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <!-- åã®æã¨æ¬¡ã®æã¸ã®é·ç§»ãã¿ã³ãå·¦å³ã«éç½® -->
    <section class="flex justify-between my-4">
      <button class="px-2 border rounded" @click="prev">Prev</button>
      <button class="px-2 border rounded" @click="next">Next</button>
    </section>
  </div>
</template>
```

### scriptã¿ã°é¨å
```js
<script>
export default {
  data() {
    return {
      // ç¾å¨æå»ã®å¹´ææ¥
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      // ææ¥ã®ã©ãã«
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    // æå®å¹´æã®æ¥æ°ãåå¾
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    // 
    // æå®å¹´æã®ï¼æ¥ç®ã®ææ¥ãåå¾
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    // 
    // ç¿æã¸ã®é·ç§»
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    // 
    // åæã¸ã®é·ç§»
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    // 
    // ä»æ¥ãé»è²ã«ãã
    currenDateClass(num) {
      const calenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? "text-yellow-600" : "";
    },
  },
  computed: {
    // 
    // æã®è¡¨ç¤º
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>
```

### ã¹ã¿ã¤ãªã³ã°ï¼tailwindã®å©ç¨ï¼
- bitfumesããã®ã¢ããªã§ã¯tailwindãå©ç¨ãã¦ãã
```css
<style></style>
```


## å®è£ä½æ¦
- ãã³ãã¬ã¼ãã¼ã¨ã¹ã¯ãªãããåèã«å®è£ãã¦ãåä½ç¢ºèª
  - compositionAPIã§å®è£ãã
  - refer ics-media : https://ics.media/entry/220120/

- ã¬ã¤ã¢ã¦ãã»ã¹ã¿ã¤ãªã³ã°ã¯åã½ã¼ã¹ãåèã«tailwindcssã§æå®
  - refer tailwindcss : https://tailwindcss.jp/docs/background-color

- é¨åãã³ã³ãã¼ãã³ãã«åãã
  - refer article : https://codelikes.com/vue-props/
  - å¯¾è±¡ã¯ä¸ã®3ã³ã³ãã¼ãã³ãï¼
    * @/components/monthCalendar/calenarMonthLabel :ãã«ã¬ã³ãã¼ã®å¹´æãè¡¨ç¤º
    * @/components/monthCalendar/calendarDayLabel :ãã«ã¬ã³ãã¼ã®ææ¥ãè¡¨ç¤º
    * @/components/monthCalendar/calendarDateTable :ãã«ã¬ã³ãã¼ã®æ¥ä»ãè¡¨ç¤ºï¼æ­å¿µï¼

- å­ã³ã³ãã¼ãã³ãã®ã¤ãã³ããè¦ªã¸æ¸¡ãï¼`emit`è¨è¿°ï¼
  - refer Vue.js : [emitsãªãã·ã§ã³](https://v3.ja.vuejs.org/guide/migration/emits-option.html#_3-x-%E3%81%AE%E6%8C%99%E5%8B%95)
  - refer article : https://programmer-note.hatenablog.com/entry/2021/11/28/171111
  - å¯¾è±¡ã¯ä¸ã®ã³ã³ãã¼ãã³ãï¼
    * @/components/monthCalendar/pageButtons :ãã«ã¬ã³ãã¼ã®ããããã¿ã³


