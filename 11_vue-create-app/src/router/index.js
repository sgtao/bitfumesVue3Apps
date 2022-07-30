import {createRouter, createWebHistory} from 'vue-router';
import defaultHome from '../views/defaultHome.vue';
import defaultAbout from '../views/defaultAbout.vue';
import DcHeros from '../views/DcHeros.vue';
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
