<template>
  <div class="flex flex-col gap-5 mb-5">
    <div class="flex gap-5">
      <p>{{ registerType }} :</p>
      <template v-if="entrance === 'user'">
        <input class="border-2" type="text" v-model="account" />
      </template>
      <template v-if="entrance === 'email'">
        <input class="border-2" type="text" v-model="email" />
      </template>
    </div>
    <div class="flex gap-5">
      <p>密碼 :</p>
      <input class="border-2" type="password" v-model="password" />
    </div>
  </div>
  <button class="mb-5 p-4 border-2 rounded-xl" @click="register">註冊</button>
  <goIndexButton />
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import registerApiStore from '~/utils/registerApiStore'

import goIndexButton from '~/components/goIndexButton.vue'

const route = useRoute()
const { func_RegisterPost } = registerApiStore()

type Params = {
  account: string
  password: string
  email: string
}

const email = ref('')
const account = ref('')
const password = ref('')

const entrance = route.query.type

const registerType = computed(() => {
  if (entrance === 'user') {
    return '帳號註冊'
  }
  if (entrance === 'email') {
    return '信箱註冊'
  }
})

const emailTypeCheck = (_params: Params) => {
  // 電子郵件正則表達式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // 檢查是否輸入了電子郵件，以及電子郵件格式是否正確
  if (_params.email && !emailRegex.test(_params.email)) {
    Swal.fire({
      icon: 'error',
      title: '新增失敗',
      text: '請輸入有效的電子郵件地址',
      showConfirmButton: true,
    })
    return true
  }
  return false
}

const register = async () => {
  const _params: Params = {
    account: account.value,
    email: email.value,
    password: password.value,
  }

  const emailCheck = emailTypeCheck(_params)
  if (emailCheck) return

  await func_RegisterPost(_params).then((res) => {
    try {
      if (res.statusCode !== 200) {
        throw new Error(`Error ${res.statusCode}: ${res.statusMessage || '新增失敗'}`)
      }

      Swal.fire({
        icon: 'success',
        title: '已新增',
        showConfirmButton: true,
      })
      email.value = ''
      account.value = ''
      password.value = ''
    } catch (error) {
      console.error('error', error)

      let errorMessage = '未知錯誤'
      if (res.response.status === 409) {
        errorMessage = '此帳號已被註冊'
      } else if (error.message) {
        errorMessage = error.message
      }
      Swal.fire({
        icon: 'error',
        title: '新增失敗',
        text: errorMessage,
        showConfirmButton: true,
      })
    }
  })
}
</script>
