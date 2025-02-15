<script setup lang="ts">
import { ref } from 'vue'

const profile = ref<Profile>({
  userName: '',
  skills: [],
  frameWorks: [],
})

const emit = defineEmits<{
  updateProfile: [value: Profile]
}>()

const handleClick = () => {
  emit('updateProfile', profile.value)
}
</script>
<template>
  <div>
    <div class="mt-4">
      <h3>プロフィール</h3>
      <hr class="mb-4 border border-gray-200" />
      <ul>
        <li>
          <label class="mb-2 block text-sm font-bold text-gray-700" for="userName"
            >ユーザー名</label
          >
          <input
            id="userName"
            v-model="profile.userName"
            class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="userName"
            placeholder="name"
          />
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h3>スキル</h3>
      <hr class="mb-4 border border-gray-200" />
      <ul>
        <li>
          <input id="c" v-model="profile.skills" type="checkbox" value="C" />
          <label class="ml-2 cursor-pointer" for="c">C</label>
        </li>
        <li>
          <input id="c++" v-model="profile.skills" type="checkbox" value="C++" />
          <label class="ml-2 cursor-pointer" for="c++">C++</label>
        </li>
        <li>
          <input id="c#" v-model="profile.skills" type="checkbox" value="C#" />
          <label class="ml-2 cursor-pointer" for="c#">C#</label>
        </li>
        <li>
          <input id="go" v-model="profile.skills" type="checkbox" value="Go" />
          <label class="ml-2 cursor-pointer" for="go">Go</label>
        </li>
        <li>
          <input id="java" v-model="profile.skills" type="checkbox" value="Java" />
          <label class="ml-2 cursor-pointer" for="java">Java</label>
        </li>
        <li>
          <input id="javascript" v-model="profile.skills" type="checkbox" value="Javascript" />
          <label class="ml-2 cursor-pointer" for="javascript">Javascript</label>
        </li>
        <li>
          <input id="perl" v-model="profile.skills" type="checkbox" value="Perl" />
          <label class="ml-2 cursor-pointer" for="perl">Perl</label>
        </li>
        <li>
          <input id="python" v-model="profile.skills" type="checkbox" value="Python" />
          <label class="ml-2 cursor-pointer" for="python">Python</label>
        </li>
        <li>
          <input id="typescript" v-model="profile.skills" type="checkbox" value="Typescript" />
          <label class="ml-2 cursor-pointer" for="typescript">Typescript</label>
        </li>
      </ul>
    </div>
    <div class="my-4">
      <h3>フレームワーク</h3>
      <hr class="mb-4 border border-gray-200" />
      <ul>
        <li>
          <input id="next" v-model="profile.frameWorks" type="checkbox" value="Next" />
          <label class="ml-2 cursor-pointer" for="next">Next</label>
        </li>
        <li>
          <input id="nuxt" v-model="profile.frameWorks" type="checkbox" value="Nuxt" />
          <label class="ml-2 cursor-pointer" for="nuxt">Nuxt</label>
        </li>
        <li>
          <input id="react" v-model="profile.frameWorks" type="checkbox" value="React" />
          <label class="ml-2 cursor-pointer" for="react">React</label>
        </li>
        <li>
          <input id="vue" v-model="profile.frameWorks" type="checkbox" value="Vue" />
          <label class="ml-2 cursor-pointer" for="vue">Vue</label>
        </li>

        <li>
          <input id="spring" v-model="profile.frameWorks" type="checkbox" value="Spring" />
          <label class="ml-2 cursor-pointer" for="spring">Spring</label>
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
