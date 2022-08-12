<template>
    <div class="w-full h-screen">
        <AppNavigator :list="list" class="w-full h-1/12" />
        <router-view :list="list" class="w-full h-full" />
    </div>
</template>
<script>
import {reactive} from 'vue';
// @ is an alias to /src
import AppNavigator from '@/components/AppNavigator';
export default {
    components: {
        AppNavigator,
    },
    setup() {
        const list = reactive([
            {
                title: 'DcHeros',
                to: '/dc-heros',
                topics: [
                    'v-for, v-bind, v-model, v-on',
                    'method',
                    'computed',
                    'LifeCycle Hooks',
                    'vuex',
                ],
            },
            {
                title: 'Calendar',
                to: '/calendar',
                topics: ['Javascript Date', 'vue components', 'vue props', 'vue emit'],
            },
            {
                title: 'Markdown',
                to: '/markdown',
                topics: ['Using External Library', 'vue props'],
            },
            {
                title: 'Slider',
                to: '/slider',
                topics: ['Vue Transition & Animation', 'virtual DOM', 'lifecycle hooks'],
            },
            {
                title: 'Calculator',
                to: '/calculator',
                topics: ['window event listener', 'Keyboard events'],
            },
            {
                title: 'Modal',
                to: '/resusable-modal',
                topics: ['resuable composition api', 'slots', 'named slots', 'emit'],
            },
        ]);
        return {
            list,
        };
    },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
