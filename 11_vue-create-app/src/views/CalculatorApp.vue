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
                    style="direction: rtl"
                >
                    {{ currentNum }}
                </p>
            </div>
            <div class="w-full">
                <p v-if="selectedOperation">
                    {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
                </p>
                <p v-else>{{ currentNum }}</p>
            </div>
            <div class="w-full">
                <div class="grid grid-cols-4 gap-1">
                    <p v-for="panel in panelColumn12" :key="panel" class="border rounded">
                        <button @click="pressed(panel)">{{ panel }}</button>
                    </p>
                    <p v-for="panel in panelColumn34" :key="panel" class="border rounded">
                        <button @click="pressed(panel)">{{ panel }}</button>
                    </p>
                </div>
                <p></p>
            </div>
        </div>
    </section>
</template>
<script>
import {ref} from 'vue';
import {useWindowEvent} from '@/utilities/composition//index';
export default {
    setup() {
        const operations = ['+', '-', '*', '/'];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const currentNum = ref('0'); // 数値も文字列変数とする
        const prevNum = ref(''); // 数値も文字列変数とする
        const selectedOperation = ref('');
        // const panelItems = [
        //     '7', '8', '9', '/', // 1st column
        //     '4', '5', '6', '*', // 2nd column
        //     '1', '2', '3', '-', // 3rd column
        //     'C', '0', '=', '+', // 4th column
        // ];
        const panelColumn12 = ['7', '8', '9', '/', '4', '5', '6', '*'];
        const panelColumn34 = ['1', '2', '3', '-', 'C', '0', '=', '+'];
        // クリックイベントの処理：入力値で処理を振り分け宇
        const pressed = (value) => {
            if (value === '=' || value === 'Enter') calculate();
            else if (value === 'c' || value === 'C') clear();
            else if (operations.includes(value)) applyOperation(value);
            else if (numbers.includes(value)) appendNumber(value);
        };
        // （数値入力時の処理）数字の文字列のconcatをする
        const appendNumber = (value) => {
            currentNum.value = currentNum.value + value;
        };
        //
        // （演算子入力時の処理）演算実行して、残りの変数をセットする
        // "v-if"ディレクティブにより、この時、計算式が表示される）
        const applyOperation = (value) => {
            calculate();
            prevNum.value = currentNum.value;
            currentNum.value = '';
            selectedOperation.value = value;
        };
        // （'='かENNTERの処理）演算実行
        const calculate = () => {
            if (selectedOperation.value === '*') multiply();
            else if (selectedOperation.value === '/') divide();
            else if (selectedOperation.value === '-') subtract();
            else if (selectedOperation.value === '+') sum();
            // 演算処理内で、"currentNum"は更新されるので、残りの変数を初期化する
            prevNum.value = '';
            selectedOperation.value = '';
        };
        // 演算処理："*", "/", "-", "+"
        const multiply = () => (currentNum.value = prevNum.value * currentNum.value);
        const divide = () => (currentNum.value = prevNum.value / currentNum.value);
        const subtract = () => (currentNum.value = prevNum.value - currentNum.value);
        const sum = () => (currentNum.value = +prevNum.value + +currentNum.value);
        //
        // （クリア(C)入力時の処理）
        const clear = () => {
            currentNum.value = '0';
            prevNum.value = '';
            selectedOperation.value = '';
        };
        // ↑clear関数は、全変数をクリアしていない。＝＞全変数クリアできればいつでも実行できる
        //
        // キーボード入力時のイベントハンドラを設定
        // "useWindowEvent"関数内で、EventListenerへの登録・削除を定義している
        const handleKeydown = (e) => pressed(e.key);
        useWindowEvent('keydown', handleKeydown);
        //
        return {
            operations,
            numbers,
            currentNum,
            prevNum,
            selectedOperation,
            panelColumn12,
            panelColumn34,
            pressed,
        };
    },
};
</script>
<style></style>
