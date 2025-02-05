<script setup lang="ts">
import { marked } from 'marked'
import { computed } from 'vue';
import useClipboard from 'vue-clipboard3'

const props = defineProps<{
  userName?: string,
  skills?: string[],
  frameWorks?: string[]
}>()
console.log(props)
const { toClipboard } = useClipboard()
let contents = ''
const renderMarkdown = computed(() => {
  // return marked(`# ${props.profile.userName}\n`)
  if (props.userName) {
    contents += `# Hi, ${props.userName}\n`
    contents += `# Your skills, ${props.skills}\n`
    contents += `# You're good at, ${props.frameWorks}\n`
  }
  return contents ? marked(contents) : '<div></div>'
})
const copy = async() => {
  try {
    await toClipboard(contents)
    alert('coppy done!')
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div v-html="renderMarkdown"></div>
  <button type="button" @click="copy()">Copy</button>
</template>
