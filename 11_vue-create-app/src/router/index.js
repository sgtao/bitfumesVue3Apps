import {createRouter, createWebHistory} from 'vue-router';
import defaultHome from '../views/defaultHome.vue';
import defaultAbout from '../views/defaultAbout.vue';
import DcHeros from '../views/DcHeros.vue';
import monthCalendar from '../views/monthCalendar.vue';
import MarkdownApp from '../views/MarkdownApp.vue';
import sliderApp from '../views/sliderApp.vue';
import TensorflowDetector from '../views/TensorflowDetector.vue';
//
const routes = [
    {
        path: '/',
        name: 'Home',
        component: defaultHome,
    },
    {
        path: '/about',
        name: 'defaultAbout',
        component: defaultAbout,
    },
    {
        path: '/dc-heros',
        name: 'DcHeros',
        component: DcHeros,
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: monthCalendar,
    },
    {
        path: '/markdown',
        name: 'Markdown',
        component: MarkdownApp,
    },
    {
        path: '/slider',
        name: 'Slider',
        component: sliderApp,
    },
    {
        path: '/tensorflow',
        name: 'Tensorflow',
        component: TensorflowDetector,
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
