<script setup lang="ts">
import { ref } from 'vue';

const profile = ref({
  userName: '',
  skills: [],
  frameWorks: []
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
    <div>
      <h3>プロフィール</h3>
      <hr />
      <ul>
        <li>
          <label for="userName">ユーザー名：</label>
          <input type="text" id="userName" name="userName" placeholder="name" v-model="profile.userName" />
        </li>
      </ul>
    </div>
    <div>
      <h3>スキル</h3>
      <hr />
      <ul>
        <li>
          <input type="checkbox" id="javascript" v-model="profile.skills" value="javascript" />
          <label for="javascript">javascript</label>
        </li>
        <li>
          <input type="checkbox" id="typescript" v-model="profile.skills" value="typescript" />
          <label for="typescript">typescript</label>
        </li>
        <li>
          <input type="checkbox" id="java" v-model="profile.skills" value="java" />
          <label for="java">java</label>
        </li>
        <li>
          <input type="checkbox" id="python" v-model="profile.skills" value="python" />
          <label for="python">python</label>
        </li>
      </ul>
    </div>
    <div>
      <h3>フレームワーク</h3>
      <hr />
      <ul>
        <li>
          <input type="checkbox" id="vue" v-model="profile.frameWorks" value="vue" />
          <label for="vue">Vue</label>
        </li>
        <li>
          <input type="checkbox" id="react" v-model="profile.frameWorks" value="react" />
          <label for="react">React</label>
        </li>
      </ul>
    </div>
    <button @click="handleClick()">プロフィールを反映</button>
  </div>
</template>
<style lang="css" scoped>
li {
  list-style-type: none;
}
</style>
