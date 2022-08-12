<!-- ModalComponent.vue -->
<template>
    <section
        @click="close"
        class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
                <div class="p-2 border">
                    <h1 class="text-2xl">
                        <slot name="title"></slot>
                    </h1>
                    <main>
                        <slot name="body"></slot>
                    </main>
                    <div class="mt-4">
                        <button
                            type="button"
                            @click="close"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(_, {emit}) {
        /**
         * close : close Modal
         */
        function close() {
            emit('close');
        }

        return {close};
    },
};
</script>

<style></style>
