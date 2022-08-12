<!-- AppNavigator.vue -->
<template>
    <nav
        class="w-full flex flex-nowrap justify-between bg-gradient-to-r from-green-800 to-green-600 text-white px-4 py-5"
    >
        <div>
            <router-link to="/">Home</router-link>
        </div>
        <div>
            <router-link
                v-for="item in list"
                :key="item.to"
                class="mx-2 hidden sm:inline-flex"
                :to="item.to"
            >
                {{ item.title }}
            </router-link>
        </div>
        <div>
            <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
            <button v-else class="mx-2" @click="openLogin">Login</button>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'AppNavigator',
    props: {
        list: Array,
    },
};
</script>
<style></style>
