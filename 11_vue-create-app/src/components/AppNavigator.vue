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
        <div class="flex justify-end">
            <a class="mr-2" href="https://github.com/sgtao/bitfumesVue3Apps" target="_blank">
                <img alt="github" src="@/assets/icons/github.svg" />
            </a>
            <a
                class="mr-2"
                href="https://vscode.dev/github.com/sgtao/bitfumesVue3Apps"
                target="_blank"
            >
                <img alt="github" src="@/assets/icons/code-slash.svg" />
            </a>
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
