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
    contents += `# My skills, ${props.profile.skills}\n`
    contents += `# Frameworks, ${props.profile.frameWorks}\n`
  }
  return contents ? marked(contents) : '<div></div>'
})

// コピーボタン押下
const copy = async() => {
  try {
    await navigator.clipboard.writeText(contents)
    alert('Copied!')
  } catch (error) {
    console.error(error)
    alert('Failed to copy...')
  }
}

// DLボタン押下
const download = () => {
  // const content = renderMarkdown
  const blob = new Blob([contents], { type: "text/markdown"})
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = "README.md";
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  // メモリ開放
  URL.revokeObjectURL(url)
}
</script>
<template>
  <div v-html="renderMarkdown"></div>
  <button type="button" @click="copy()" style="margin-right: 16px;">Copy</button>
  <button type="button" @click="download()">Download</button>
</template>
