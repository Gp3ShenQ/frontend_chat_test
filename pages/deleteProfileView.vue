<template>
  <div class="flex flex-col gap-10 p-10 w-full h-full">
    <div class="flex justify-center gap-10">
      <p>輸入想刪除的資料姓名</p>
      <input class="bg-[#6665DD]" type="text" v-model="deleteName" />
      <button class="bg-[#000500] px-5 rounded-md text-white cursor-pointer" @click="deleteUser">確認刪除</button>
    </div>
  </div>
  <goIndexButton />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userApiStore from '~/utils/userApiStore'

import goIndexButton from '~/components/goIndexButton.vue'

const { func_DeleteProfileDelete } = userApiStore()

const deleteName = ref('')

const deleteUser = () => {
  const _param = { name: deleteName.value }
  const _result = func_DeleteProfileDelete(_param)
  console.log('deleteUser', _result)
}
</script>
