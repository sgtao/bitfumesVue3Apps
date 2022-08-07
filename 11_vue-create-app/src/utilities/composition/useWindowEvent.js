// useWindowEvent.js
import {onMounted, onUnmounted} from 'vue';
/**
 * define EventListner at LifeCycle mount and unmount
 * @param {string} eventName event.type
 * @param {EventListener} handleEvent callback
 */
export default function useWindowEvent(eventName, handleEvent) {
    onMounted(() => window.addEventListener(eventName, handleEvent));
    onUnmounted(() => window.removeEventListener(eventName, handleEvent));
}
