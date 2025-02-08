<script setup lang="ts">
import { marked } from 'marked'
import { computed } from 'vue';

const props = defineProps<{
  profile: Profile
}>()
console.log(props)
let contents = ''
const renderMarkdown = computed(() => {
  // return marked(`# ${props.profile.userName}\n`)
  if (props.profile.userName) {
    contents += `# Hi, I'm ${props.profile.userName}\n`
    contents += `# Your skills, ${props.profile.skills}\n`
    contents += `# You're good at, ${props.profile.frameWorks}\n`
  }
  return contents ? marked(contents) : '<div></div>'
})

const copy = async() => {
  try {
    await navigator.clipboard.writeText(contents)
    alert('Copied!')
  } catch (error) {
    console.error(error)
    alert('Failed to copy...')
  }
}
</script>
<template>
  <div v-html="renderMarkdown"></div>
  <button type="button" @click="copy()">Copy</button>
</template>
