<template>
  <div class="flex flex-col gap-10 p-10 w-full h-full">
    <button class="bg-[#000500] px-5 rounded-md text-white cursor-pointer" @click="deleteAll">確認刪除</button>
  </div>
  <goIndexButton />
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import userApiStore from '~/utils/userApiStore'

import goIndexButton from '~/components/goIndexButton.vue'

const { func_DeleteAllDelete } = userApiStore()

const deleteAll = () => {
  Swal.fire({
    icon: 'question',
    title: '確定刪除全部嗎?',
    showConfirmButton: true,
  }).then(() => {
    func_DeleteAllDelete()
  })
}
</script>
