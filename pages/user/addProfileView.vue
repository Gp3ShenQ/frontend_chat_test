<template>
  <div class="flex flex-col gap-10 p-10 w-full h-full">
    <div class="flex justify-center gap-10">
      <p>姓名<span class="text-red-700">*</span></p>
      <input class="bg-[#6665DD]" type="text" v-model="name" />
    </div>
    <div class="flex justify-center gap-10">
      <p>年齡<span class="text-red-700">*</span></p>
      <input class="bg-[#6665DD]" type="text" v-model="age" />
    </div>
    <div class="flex justify-center gap-10">
      <p>email</p>
      <input class="bg-[#6665DD]" type="text" v-model="email" />
    </div>
    <button class="bg-[#000500] p-5 rounded-md text-white cursor-pointer" @click="saveProfile">Save</button>
  </div>

  <goIndexButton />
</template>

<script setup lang="ts">
import userApiStore from '~/utils/userApiStore'

import Swal from 'sweetalert2'
import goIndexButton from '~/components/goIndexButton.vue'

const { func_AddUserPost } = userApiStore()

const age = ref<number | null>(null)
const name = ref('')
const email = ref('')

const initList = () => {
  age.value = null
  name.value = ''
  email.value = ''
}

const saveProfile = async () => {
  console.log(typeof age.value)
  const _param = {
    name: name.value,
    age: Number(age.value),
    email: email.value,
  }

  const _result = await func_AddUserPost(_param)

  if (_result) {
    Swal.fire({
      icon: 'success',
      title: '新增成功',
      showConfirmButton: true,
    }).then(() => {
      initList()
    })
  }
}
</script>
