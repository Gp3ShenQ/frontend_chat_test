<template>
  <div class="mb-10">
    <button class="bg-[#000500] px-5 rounded-md text-white cursor-pointer" @click="deleteAll">刪除全部</button>
  </div>
  <goIndexButton />
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import registerApiStore from '~/utils/registerApiStore'

import goIndexButton from '~/components/goIndexButton.vue'

const { func_DeleteRegisterAllDelete } = registerApiStore()

const deleteAll = () => {
  Swal.fire({
    icon: 'question',
    title: '確定刪除全部嗎?',
    showConfirmButton: true,
  }).then(() => {
    func_DeleteRegisterAllDelete()
  })
}
</script>
