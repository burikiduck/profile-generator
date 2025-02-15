<script setup lang="ts">
import { listToStringWithComma } from '@/utils/util'
import { marked } from 'marked'
import { computed } from 'vue'

const props = defineProps<{
  profile: Profile
}>()

let contents = ''
const renderMarkdown = computed(() => {
  // return marked(`# ${props.profile.userName}\n`)
  if (props.profile.userName) {
    contents = `# Hi, I'm ${props.profile.userName}\n`
    contents += `# 🔧 My skills\n## ${listToStringWithComma(props.profile.skills)}\n`
    contents += `# 💡 Frameworks\n## ${listToStringWithComma(props.profile.frameWorks)}\n`
  }
  return contents ? marked(contents) : '<div class="p-16"></div>'
})

// コピーボタン押下
const copy = async () => {
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
  const blob = new Blob([contents], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'README.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  // メモリ開放
  URL.revokeObjectURL(url)
}
</script>
<template>
  <div class="mx-4">
    <div class="my-8 border border-gray-200 p-4">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="renderMarkdown"></div>
    </div>
    <button
      class="cursor-pointer rounded-md bg-violet-700 px-4 py-2 text-white hover:bg-violet-800 sm:px-8 sm:py-3"
      type="button"
      style="margin-right: 16px"
      @click="copy()"
    >
      Copy
    </button>
    <button
      class="cursor-pointer rounded-md bg-violet-700 px-4 py-2 text-white hover:bg-violet-800 sm:px-8 sm:py-3"
      type="button"
      @click="download()"
    >
      Download
    </button>
  </div>
</template>
