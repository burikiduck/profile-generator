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
  console.log(profile.value)
}
</script>

<template>
  <main>
    <div class="flex">
      <div class="w-128 flex-1 p-8">
        <ProfileForm @update-profile="handleProfile" />
      </div>
      <div class="w-128 flex-1 p-8">
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
