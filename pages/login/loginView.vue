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
  <button class="mb-5 p-4 border-2 rounded-xl" @click="login">登入</button>
  <goIndexButton />
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/index'
import { func_setLocalStorageLocale } from '@/utils/useLocalStorage'

import goIndexButton from '~/components/goIndexButton.vue'

const route = useRoute()
const router = useRouter()
const commonStore = useCommonStore()
const { func_loginPost } = loginApiStore()
const { isLogin, user } = storeToRefs(commonStore)

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
    return '帳號'
  }
  if (entrance === 'email') {
    return '信箱'
  }
})

const login = async () => {
  const _params: Params = {
    account: account.value,
    email: email.value,
    password: password.value,
  }

  const _result = await func_loginPost(_params)
  console.log(_result)
  if (_result.statusCode === 200) {
    Swal.fire({
      icon: 'success',
      title: '登入成功',
      showConfirmButton: true,
    }).then(() => {
      func_setLocalStorageLocale(_result.token)
      isLogin.value = true
      console.log('_result.user', _result.user)
      user.value = _result.user
      console.log('user.user', user.value)
      router.push('/')
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: _result.statusMessage,
      showConfirmButton: true,
    })
  }
}
</script>
