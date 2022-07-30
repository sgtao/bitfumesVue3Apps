import {createRouter, createWebHistory} from 'vue-router';
import defaultHome from '../views/defaultHome.vue';
import defaultAbout from '../views/defaultAbout.vue';
import DcHeros from '../views/DcHeros.vue';
import monthCalendar from '../views/monthCalendar.vue';
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
        path: '/DcHeros',
        name: 'DcHeros',
        component: DcHeros,
    },
    {
        path: '/Calendar',
        name: 'Calendar',
        component: monthCalendar,
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
