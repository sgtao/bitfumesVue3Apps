<!-- 20_TensorFlow.md -->
# ð· Tensorflow Object Detection
- ã«ã¡ã©ç»åããç©ä½æ¤åºããã¢ããª

## å©ç¨æ©è½
1. Using Tensorflow with Vue
2. Device Camera Open
3. Working with Canvas

## åç§ã½ã¼ã¹ã®çè§£

### snapshot

![snapshot](images/20_TensorFlow.png)

### template
```html
<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <div class="text-center w-full">
          <h1 class="text-2xl mt-4">Tensorflow Object Detection</h1>
          <small>Try with cell phone only</small>
        </div>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center">
            <!-- ã«ã¡ã©ãªãã®æã®è¡¨ç¤ºãã¿ã³ -->
            <button
              v-if="!isStreaming"
              @click="openCamera"
              class="w-32 rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1"
            >
              Open Camera
            </button>
            <!-- ã«ã¡ã©ãªã³ã®æã®è¡¨ç¤ºãã¿ã³ -->
            <div v-else class="flex justify-between">
              <!-- ã«ã¡ã©ãªãã®æç¤ºãã¿ã³ -->
              <button
                @click="stopStreaming"
                class="w-32 rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1"
              >
                Stop Streaming
              </button>
              <!-- ç»ååå¾ã®æç¤ºãã¿ã³ -->
              <button
                @click="snapshot"
                class="w-32 rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1"
              >
                Snapshot
              </button>
            </div>
          </div>
          <!-- videoã¿ã°ã§åå¾æ åãè¡¨ç¤ºãvueã¯`videoRef`å¤æ°ããæ åãã¼ã¿åå¾ãã -->
          <video ref="videoRef" autoplay="true" width="100" />
        </div>
        <div class="flex flex-wrap justify-center">
          <!-- imgã¿ã°ã§åå¾ç»åãè¡¨ç¤ºãvueåã§`imgRef`å¤æ°ããç©ä½æ¤åºç¨ã®ç»åãåå¾ãã -->
          <img
            ref="imgRef"
            src="https://images.unsplash.com/photo-1567581935884-3349723552ca"
            width="200"
            crossorigin="anonymous"
          />
          <div class="w-full text-center my-4">
            <!-- ç©ä½æ¤åºæç¤ºãã¿ã³ -->
            <button
              @click="detect"
              class="w-32 rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
            >
              <span v-if="isLoading">Loading ... </span>
              <span v-else>Detect Object</span>
            </button>
            <!-- ç©ä½æ¤åºçµæã®è¡¨ç¤º -->
            <div v-if="result.length > 0">
              <p>{{ result[0].class }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

### scriptã¿ã°é¨å
```js
<script>
import { ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
  setup() {
    const imgRef = ref("");
    const videoRef = ref("");
    const isLoading = ref(false);
    const isStreaming = ref(false);
    const result = ref([]);
    // ç©ä½æ¤åºã®ã¡ã½ãã
    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;
      const model = await cocoSsd.load();
      const predictions = await model.detect(img);
      result.value = predictions;
      console.log(predictions, img);
      isLoading.value = false;
    }
    // ããã¤ã¹ã®ã«ã¡ã©æå¹å
    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter((device) => device.kind === "videoinput");
        const camId = cams[0].deviceId;
        const video = cams.length === 1 ? true : { deviceId: { exact: camId } };
        navigator.mediaDevices.getUserMedia({ video: video }).then((stream) => {
          isStreaming.value = true;
          videoRef.value.srcObject = stream;
        });
      }
    }
    // ããã¤ã¹ã®ã«ã¡ã©ç¡å¹å
    function stopStreaming() {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map((track) => track.stop());
      isStreaming.value = false;
    }
    // ã«ã¡ã©ç»åãåå¾
    function snapshot() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.value, 0, 0, 200, 200);
      const data = canvas.toDataURL("image/png");
      imgRef.value.setAttribute("src", data);
    }
    //
    return {
      imgRef,
      result,
      detect,
      isLoading,
      openCamera,
      videoRef,
      isStreaming,
      stopStreaming,
      snapshot,
    };
  },
};
</script>
```

### stylingã¿ã°é¨å
- bitfumesããã®ã¢ããªã§ã¯tailwindãå©ç¨ãã¦ãã
```css
<style></style>
```

## å®è£ä½æ¦




