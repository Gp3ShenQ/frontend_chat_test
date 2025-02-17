<template>
  <div class="flex flex-col gap-10 p-10 w-full h-full">
    <button class="bg-[#000500] px-5 rounded-md text-white cursor-pointer" @click="deleteAll">確認刪除</button>
  </div>
  <goIndexButton />
</template>

<script setup lang="ts">
import {} from 'vue'
import userApiStore from '~/utils/userApiStore'

import goIndexButton from '~/components/goIndexButton.vue'

const { func_DeleteAllDelete } = userApiStore()

const deleteAll = () => {
  const _result = func_DeleteAllDelete()
  if (_result) {
    console.log(_result)
  }
}
</script>
