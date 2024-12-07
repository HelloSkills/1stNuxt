<script setup lang="ts">
const route = useRoute()
import {ref} from 'vue'
// import {onMounted} from '#imports';
const {data} = await useAsyncData('navigation', () => queryContent('/').findOne())
const items = ref(data.value.navigations)
console.log(data.value)
</script>

<template>
  <div :class="$style.wrapper">

    <div :class="$style.navigations" class="flex flex-wrap gap-25 p-20">
      <NuxtLink to="#" v-for="(content, index) in items" :key="index" :class="$style.nav">
        <div> {{ index }} </div>
      </NuxtLink>
    </div>

    <div :class="$style.wrap" class="mt-25">
      <div v-for="(content, index) in items" :key="index" :class="$style.content" class="p-20">
        <div :class="$style.text">
          <div> {{ index }} </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" module>

.wrapper {
  box-sizing: border-box;
  color: var(--lb-white);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 32px;
  font-family: "JetBrainsMono", monospace;
  line-height: 32px;
  width: 100%;
}

.navigations {
  color: var(--lb-white);
  font-family: "JetBrainsMono", monospace;
  align-items: center;
  justify-content: center;
}

.nav {
  color: white;
}

.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: var(--lb-grayblack);
  border-radius: 25px;
  min-width: 80%;
  gap: 20px;
  //min-height: 200px;
  //max-height: 300px;
  //margin: 0 auto;

  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: center;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: "JetBrainsMono", monospace;
    line-height: 1.4;

  }
}
</style>
