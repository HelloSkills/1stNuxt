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

          <div :class="$style.command" v-for="(command, key) in content.commands" :key="key">
            <strong :class="$style.commandName">
              {{ command.name }}
            </strong>

            <span :class="$style.span" class="hidden md:block c-blue"> ~ </span>

            <span :class="$style.commandDescription" class="hidden md:block">
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

<!--  <pre>-->
<!--    {{ JSON.stringify(items.Git.commands, null, 2) }}-->
<!--  </pre>-->
</template>

<style lang="scss" module>

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
  width: max-content;
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
  color: cornflowerblue;
  opacity: 0.3;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
