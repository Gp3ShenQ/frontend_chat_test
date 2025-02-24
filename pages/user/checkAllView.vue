<template>
  <div class="relative flex flex-col gap-10 p-10 w-full h-full">
    <template v-for="(item, index) in allData?.users" :key="index">
      <div class="flex justify-between">
        <div class="">
          <div class="flex justify-start">第{{ index + 1 }}筆</div>
          <div>姓名 : {{ item.name }}</div>
          <div>年齡 : {{ item.age }}</div>
          <div>帳號 : {{ item.account ?? '尚未設置' }}</div>
          <div>密碼 : {{ item.password }}</div>
          <div>E-mail : {{ item.email ?? '尚未設置' }}</div>
        </div>
        <div class="flex items-center">
          <button class="bg-[#000500] px-5 rounded-md text-white cursor-pointer" @click="deleteData(item.name)">刪除</button>
        </div>
      </div>
    </template>
  </div>
  <goIndexButton />
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import userApiStore from '~/utils/userApiStore'
import goIndexButton from '~/components/goIndexButton.vue'

const { func_CheckUserAllGet, func_DeleteProfileDelete } = userApiStore()

const allData = ref()

const deleteData = (name: string) => {
  const _param = { name }

  Swal.fire({
    icon: 'question',
    title: '確定刪除 ' + name + ' 嗎?',
    showConfirmButton: true,
  }).then(async () => {
    await func_DeleteProfileDelete(_param)
    allData.value = await func_CheckUserAllGet()
  })
}

onBeforeMount(async () => {
  allData.value = await func_CheckUserAllGet()
})
</script>
