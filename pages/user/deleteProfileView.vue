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
import Swal from 'sweetalert2'
import userApiStore from '~/utils/userApiStore'
import goIndexButton from '~/components/goIndexButton.vue'
import { tryResolveModule } from 'nuxt/kit'

const { func_DeleteProfileDelete } = userApiStore()
const deleteName = ref('')

const deleteUser = () => {
  const _param = { name: deleteName.value }

  Swal.fire({
    icon: 'question',
    title: '確定刪除 ' + deleteName.value + ' 嗎?',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: '確認',
    cancelButtonText: '取消',
  }).then(async (result) => {
    try {
      const response = await func_DeleteProfileDelete(_param)

      if (response.statusCode === 200) {
        Swal.fire({
          icon: 'success',
          title: '已刪除 ' + deleteName.value,
          showConfirmButton: true,
        })
        deleteName.value = ''
      } else {
        throw new Error(response.statusText || '刪除失敗')
      }
    } catch (error) {
      console.error(error)
      let errorMessage = '未知錯誤'
      if (error.response && error.response.statusCode === 404) {
        errorMessage = '無此帳號: ' + deleteName.value
      } else if (error.message) {
        errorMessage = error.message
      }
      Swal.fire({
        icon: 'error',
        title: '刪除失敗',
        text: '無此帳號: ' + deleteName.value,
        showConfirmButton: true,
      })
    }
  })
}
</script>
