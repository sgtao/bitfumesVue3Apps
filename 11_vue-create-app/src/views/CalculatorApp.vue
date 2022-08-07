<!-- CalculatorApp.vue -->
<template>
    <section class="flex w-full">
        <div class="m-auto">
            <div class="w-full">
              <h1 class="text-3xl text-center">CalculatorApp</h1>
              <small>You can fully use keyboard to calculate</small>
            </div>
            <!-- 入力値と計算結果の表示枠 -->
            <div class="w-full">
                <p
                  class="text-3xl text-right border mt-10 w-56 h-20 overflow-x-scroll"
                  style="direction:rtl"
                >
                  {{ currentNum }}
                </p>      
            </div>
            <div class="w-full">
                <p>
                    {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
                </p>
            </div>
            <div class="w-full">
                <div class="grid grid-cols-4 gap-1">
                    <p v-for="panel in panelItems" :key="panel"
                        class="border rounded"
                    >
                        <button @click="pressed(panel)">{{ panel }}</button>
                    </p>
                </div>
                <p>
                </p>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNum = ref(""); // 数値も文字列変数とする
    const prevNum = ref("press any key!"); // 数値も文字列変数とする
    const selectedOperation = ref("");
    const panelItems = [
        "7", "8", "9", "/",
        "4", "5", "6", "*", 
        "1", "2", "3", "-",
        "C", "0", "=", "+",
    ];
    // クリックイベントの処理：入力値で処理を振り分け宇
    const pressed = (value) => {
      prevNum.value = `clicked ${value} : `;
    };
    //
    return {
        operations, numbers, currentNum, prevNum, selectedOperation,
        panelItems, pressed, 
    };
  },
}
</script>
<style></style>
