// utilities/composition/useDebounce.js
import {ref} from 'vue';
/**
 * execute callback with debounce
 * @return {*} debounce function
 */
export default function useDebounce() {
    const timeout = ref('');
    // funcをwait分遅延して実行する
    const debounce = (func, wait = 1000) => {
        clearTimeout(timeout.value);
        timeout.value = setTimeout(func, wait);
    };
    // Callback関数を返す
    return debounce;
}
