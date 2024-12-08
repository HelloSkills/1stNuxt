<script setup lang="ts">
import {ref} from 'vue';

const route = useRoute();

const {data} = await useAsyncData('navigation', () => queryContent('/').findOne());
const items = ref(data.value.navigations);
const gitSections = ref(data.value.navigations.Git.sections);

console.log(data.value);
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.navigations" class="flex flex-wrap gap-25 p-20">
      <NuxtLink to="#" v-for="(content, index) in items" :key="index" :class="$style.nav"><div>{{ index }}</div></NuxtLink>
    </div>

    <div :class="$style.wrap" class="mt-25">
      <div :class="$style.content" class="p-20" v-for="(section, sectionKey) in gitSections" :key="sectionKey">
        <div :class="$style.text">
          <div :class="$style.comment">{{ section.title }}</div>
          <div :class="$style.command" v-for="(command, commandKey) in section.commands" :key="commandKey">
            <strong :class="$style.commandName">{{ command.name }}</strong>
            <span :class="$style.span" class="hidden md:block c-blue"> ~ </span>
            <span :class="$style.commandDescription" class="hidden md:block">
              {{ command.description }}
              <span :class="$style.usage" v-if="command.usage"><code>{{ command.usage }}</code></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
/* Стили остались прежними */
.wrapper {
  box-sizing: border-box;
  color: var(--lb-white);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 32px;
  line-height: 32px;
  width: 100%;
  min-width: 400px;
}

.navigations {
  color: var(--lb-white);
  align-items: center;
  justify-content: center;
  font-weight: 700;
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
  text-align: left;
  background: var(--lb-grayblack);
  border-radius: 25px;
  border: 3px solid rgba(0, 255, 0, 0.1);
  max-width: 80%;
  width: 100%;
  gap: 20px;
}

.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: left;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-family: "JetBrainsMono", monospace;
  line-height: 1.4;
}

.comment {
  color: darkgray;
}

.command {
  display: flex;
  gap: 20px;
}

.commandName {
  color: mediumseagreen;
  white-space: nowrap;
}

.commandDescription {
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
  color: rgba(100, 149, 237, 0.3); /* Задаем цвет с прозрачностью */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.usage {
  color: orangered;
}
</style>
