<template>
    <div class="home">
        <h1 class="text-center text-2xl md:text-4xl my-2">Vue 3 Apps</h1>
        <div class="flex flex-wrap justify-center">
            <div
                v-for="item in list"
                :key="item.to"
                class="block p-3 m-3 w-64 bg-white text-left rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <router-link class="mx-2" :to="item.to">
                    <p class="flex justify-start">
                        <!-- svg: checked icon -->
                        <svg
                            class="w-6 h-6 dark:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        {{ item.title }}
                    </p>
                </router-link>
                <p class="font-bold">Topic Covered:</p>
                <ul>
                    <li v-for="topic in item.topics" :key="topic">
                        {{ topic }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'defaultHome',
    props: {
        list: Array,
    },
};
</script>
