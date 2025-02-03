<script setup lang="ts">
import { marked } from 'marked'
import { computed } from 'vue';

const props = defineProps<{
  userName?: string,
  skills?: string[],
  frameWorks?: string[]
}>()
// const props = defineProps<Profile>()
// const props = defineProps(['profile'])
console.log(props)
const renderMarkdown = computed(() => {
  // return marked(`# ${props.profile.userName}\n`)
  let contents = ''
  if (props.userName) {
    contents += `# Hi, ${props.userName}`
    contents += `\n# Your skills, ${props.skills}`
    contents += `\n# You're good at, ${props.frameWorks}`
  }
  return contents ? marked(contents) : '<div></div>'
})
</script>
<template>
  <div v-html="renderMarkdown"></div>
</template>
