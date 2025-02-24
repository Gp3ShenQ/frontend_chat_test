<template>
  <div class="flex flex-col gap-10 p-10 w-full h-full">
    <div class="flex flex-col items-center">
      <p>註冊帳號或信箱</p>

      <template v-if="user.account">
        <div class="flex gap-2">
          <div>帳號 :</div>
          <div>{{ user.account }}</div>
        </div>
      </template>
      <template v-if="user.email">
        <div class="flex gap-2">
          <div>信箱 :</div>
          <div>{{ user.email }}</div>
        </div>
      </template>
    </div>

    <div class="flex justify-center gap-10">
      <p>姓名 :</p>
      <input class="bg-[#6665DD]" type="text" v-model="computedName" :disabled="user.name !== ''" />
    </div>
    <div class="flex justify-center gap-10">
      <p>年齡 :</p>
      <input class="bg-[#6665DD]" type="text" v-model="computedAge" :disabled="user.age !== null && user.age !== 0" />
    </div>
    <template v-if="!user.email">
      <div class="flex justify-center gap-10">
        <p>email :</p>
        <input class="bg-[#6665DD]" type="text" v-model="email" />
      </div>
    </template>
    <template v-if="!user.account">
      <div class="flex justify-center gap-10">
        <p>帳號 :</p>
        <input class="bg-[#6665DD]" type="text" v-model="account" />
      </div>
    </template>
    <button class="bg-[#000500] p-5 rounded-md text-white cursor-pointer" @click="saveProfile">Save</button>
  </div>

  <goIndexButton />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/index'
import userApiStore from '~/utils/userApiStore'
import { func_getLocalStorageLocale } from '@/utils/useLocalStorage'

import Swal from 'sweetalert2'
import goIndexButton from '~/components/goIndexButton.vue'

const commonStore = useCommonStore()
const { user } = storeToRefs(commonStore)
const { func_AddUserPost, func_CheckUserPersonalPost } = userApiStore()

const age = ref<number | null>(null)
const name = ref('')
const account = ref('')
const email = ref('')

const initList = () => {
  age.value = null
  name.value = ''
  email.value = ''
  account.value = ''
}

const computedName = computed(() => {
  if (user.value.name) {
    return user.value.name || name.value
  }
})

const computedAge = computed(() => {
  if (user.value.age) {
    return user.value.age || age.value
  }
})

const refreshUserData = async () => {
  const _personalResult = await func_CheckUserPersonalPost(user.value.account)
  console.log(_personalResult, '_personalResult ')
  // user.value = _personalResult
}

const saveProfile = async () => {
  const _token = func_getLocalStorageLocale()
  const _param = {
    name: name.value,
    age: Number(age.value),
    email: email.value,
    account: account.value,
    token: _token,
  }

  const _result = await func_AddUserPost(_param)

  if (_result) {
    Swal.fire({
      icon: 'success',
      title: '新增成功',
      showConfirmButton: true,
    }).then(() => {
      // refreshUserData()
      initList()
    })
  }
}
</script>
