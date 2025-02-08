<script setup lang="ts">
import MarkdownPreview from '@/components/MarkdownPreview.vue';
import ProfileForm from '@/components/ProfileForm.vue';
import { ref } from 'vue';

const profile = ref<Profile>({
  userName: '',
  skills: [],
  frameWorks: []
})
const handleProfile = (profileData: Profile) => {
  profile.value = profileData
  console.log(profile.value)
}
</script>

<template>
  <main class="flexbox">
    <div class="left-content">
      <ProfileForm @updateProfile="handleProfile" />
    </div>
    <div class="right-content">
      <MarkdownPreview :profile="profile" />
      <!-- <MarkdownPreview
        :userName="profile?.userName"
        :skills="profile?.skills"
        :frameWorks="profile?.frameWorks"
      /> -->
    </div>
  </main>
</template>

<style lang="css" scoped>
.flexbox {
  display: flex;
}
.left-content {
  margin: 16px;
}
.right-content {
  margin: 16px;
}
</style>