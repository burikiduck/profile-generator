<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  userName: '',
  skills: [],
  frameWorks: [],
} as Profile)

const emit = defineEmits<{
  updateProfile: [value: Profile]
}>()

const handleClick = () => {
  console.log(profile.value)
  emit('updateProfile', profile.value)
}
</script>
<template>
  <div>
    <div class="mt-4">
      <h3>プロフィール</h3>
      <hr class="mb-4" />
      <ul>
        <li>
          <label for="userName">ユーザー名：</label>
          <input
            id="userName"
            v-model="profile.userName"
            type="text"
            name="userName"
            placeholder="name"
          />
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h3>スキル</h3>
      <hr class="mb-4" />
      <ul>
        <li>
          <input id="javascript" v-model="profile.skills" type="checkbox" value="javascript" />
          <label for="javascript">javascript</label>
        </li>
        <li>
          <input id="typescript" v-model="profile.skills" type="checkbox" value="typescript" />
          <label for="typescript">typescript</label>
        </li>
        <li>
          <input id="java" v-model="profile.skills" type="checkbox" value="java" />
          <label for="java">java</label>
        </li>
        <li>
          <input id="python" v-model="profile.skills" type="checkbox" value="python" />
          <label for="python">python</label>
        </li>
      </ul>
    </div>
    <div class="my-4">
      <h3>フレームワーク</h3>
      <hr class="mb-4" />
      <ul>
        <li>
          <input id="vue" v-model="profile.frameWorks" type="checkbox" value="Vue" />
          <label for="vue">Vue</label>
        </li>
        <li>
          <input id="react" v-model="profile.frameWorks" type="checkbox" value="React" />
          <label for="react">React</label>
        </li>
      </ul>
    </div>
    <!-- <button @click="handleClick()">プロフィールを反映</button> -->
    <button
      class="cursor-pointer rounded-md bg-violet-700 px-4 py-2 text-white hover:bg-violet-800 sm:px-8 sm:py-3"
      @click="handleClick()"
    >
      プロフィールを反映
    </button>
  </div>
</template>
<style lang="css" scoped>
li {
  list-style-type: none;
}
</style>
