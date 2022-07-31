<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link class="mx-2" v-for="item in list" :key="item.to" :to="item.to"
            >🔷{{ item.title }}</router-link
        >
        | <router-link to="/about">About</router-link>
    </div>
    <router-view />
</template>
<script>
export default {
    data() {
        return {
            list: [
                {title: 'DcHeros', to: '/dc-heros'},
                {title: 'Calendar', to: '/calendar'},
                {title: 'Markdown', to: '/markdown'},
            ],
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
