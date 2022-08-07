import {createRouter, createWebHistory} from 'vue-router';
import DefaultHome from '../views/DefaultHome.vue';
import DefaultAbout from '../views/DefaultAbout.vue';
import DcHeros from '../views/DcHeros.vue';
import MonthCalendar from '../views/MonthCalendar.vue';
import MarkdownApp from '../views/MarkdownApp.vue';
import SliderApp from '../views/SliderApp.vue';
import CalculatorApp from '../views/CalculatorApp.vue';
//
const routes = [
    {
        path: '/',
        name: 'Home',
        component: DefaultHome,
    },
    {
        path: '/about',
        name: 'About',
        component: DefaultAbout,
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
