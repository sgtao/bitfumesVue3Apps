import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DcHeros from '../views/DcHeros.vue';
import MonthCalendar from '../views/MonthCalendar.vue';
import MarkdownApp from '../views/MarkdownApp.vue';
import SliderApp from '../views/SliderApp.vue';
import CalculatorApp from '../views/CalculatorApp.vue';
import ReusableModal from '../views/ReusableModal.vue';
//
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/dc-heros',
        name: 'DcHeros',
        component: DcHeros,
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: MonthCalendar,
    },
    {
        path: '/markdown',
        name: 'Markdown',
        component: MarkdownApp,
    },
    {
        path: '/slider',
        name: 'Slider',
        component: SliderApp,
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: CalculatorApp,
    },
    {
        path: '/resusable-modal',
        name: 'ReusableModal',
        component: ReusableModal,
    },
];
//
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
//
export default router;
//
// EOF
