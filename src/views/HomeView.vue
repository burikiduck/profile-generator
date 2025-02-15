<script setup lang="ts">
import MarkdownPreview from '@/components/MarkdownPreview.vue'
import ProfileForm from '@/components/ProfileForm.vue'
import { ref } from 'vue'

const profile = ref<Profile>({
  userName: '',
  skills: [],
  frameWorks: [],
})
const handleProfile = (profileData: Profile) => {
  profile.value = profileData
}
</script>

<template>
  <main>
    <div class="flex flex-row flex-wrap">
      <div class="basis-1/2 p-8">
        <ProfileForm @update-profile="handleProfile" />
      </div>
      <div class="basis-1/2 p-8">
        <MarkdownPreview :profile="profile" />
        <!-- <MarkdownPreview
          :userName="profile?.userName"
          :skills="profile?.skills"
          :frameWorks="profile?.frameWorks"
        /> -->
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
