<template>
  <div class="mb-20">目前已是登入狀態</div>
  <div class="flex gap-5">
    <goIndexButton />
    <div @click="logout" class="p-1 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">登出</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/index'
import { func_setLocalStorageLocaleRemove } from '@/utils/useLocalStorage'

import goIndexButton from '~/components/goIndexButton.vue'

const router = useRouter()
const commonStore = useCommonStore()
const { isLogin } = storeToRefs(commonStore)

const logout = () => {
  isLogin.value = false
  func_setLocalStorageLocaleRemove()
  router.push('/')
}
</script>
