<script setup lang="ts">
const route = useRoute()
import {ref} from 'vue'

const {data} = await useAsyncData('navigation', () => queryContent('/').findOne())
const items = ref(data.value.navigations)
console.log(data.value)

</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.navigations" class="flex flex-wrap gap-25 p-20">
      <NuxtLink to="#" v-for="(content, index) in items" :key="index" :class="$style.nav">
        <div> {{ index }}</div>
      </NuxtLink>
    </div>

    <div :class="$style.wrap" class="mt-25">
      <div :class="$style.content" class="p-20" v-for="(content, index) in items" :key="index">
        <div :class="$style.text">

          <div :class="$style.comment">
            {{ content.comment }}
          </div>

          <div v-for="(command, key) in content.commands" :key="key" :class="$style.command">
            <strong :class="$style.commandName">
              {{ command.name }}
            </strong>
            <span class="c-blue"> ~ </span>

            <span :class="$style.commandDescription">
              {{ command.description }}
            </span>
<!--            <div v-if="command.usage">-->
<!--              <em>Usage:</em> <code>{{ command.usage }}</code>-->
<!--            </div>-->
          </div>

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
  text-align: left;
  background: var(--lb-grayblack);
  border-radius: 25px;
  border: 3px solid rgba(0, 255, 0, 0.1);
  min-width: 80%;
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

.commandName {
  color: mediumseagreen;
}

.commandDescription {
  color: cornflowerblue;
  opacity: 0.3;
}
</style>
