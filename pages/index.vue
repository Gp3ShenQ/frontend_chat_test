<template>
  <div class="flex flex-col gap-10 px-10">
    <div>
      <div class="flex flex-col">
        <div class="mb-2 border-b-2">
          <p>新增帳號</p>
        </div>
        <div class="flex gap-5">
          <NuxtLink :to="{ path: '/register/registerView', query: { type: 'user' } }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">帳號註冊</NuxtLink>
          <NuxtLink :to="{ path: '/register/registerView', query: { type: 'email' } }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">信箱註冊</NuxtLink>
          <NuxtLink :to="{ path: '/register/checkAccountRegisterView' }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">查詢已註冊帳號</NuxtLink>
          <NuxtLink :to="{ path: '/register/checkEmailRegisterView' }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">查詢已註冊信箱</NuxtLink>
          <NuxtLink :to="{ path: '/register/deleteRegisterAllView' }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">刪除全部</NuxtLink>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col">
        <div class="mb-2 border-b-2">
          <p>使用者登入</p>
        </div>
        <div class="flex gap-5">
          <NuxtLink :to="{ path: isLoginPages, query: { type: 'user' } }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">帳號登入</NuxtLink>
          <NuxtLink :to="{ path: isLoginPages, query: { type: 'email' } }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">信箱登入</NuxtLink>
          <NuxtLink :to="{ path: '/' }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">修改密碼</NuxtLink>
          <NuxtLink :to="{ path: '/' }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">帳號綁定</NuxtLink>
          <NuxtLink :to="{ path: '/' }" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">信箱綁定</NuxtLink>
        </div>
      </div>
    </div>

    <div>
      <div class="mb-2 border-b-2">
        <p>使用者資料</p>
      </div>
      <div class="flex gap-5">
        <NuxtLink to="/user/addProfileView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">新增個人資料</NuxtLink>
        <NuxtLink to="/user/deleteProfileView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">刪除單筆</NuxtLink>
        <NuxtLink to="/user/checkAllView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">查看全部</NuxtLink>
        <NuxtLink to="/user/deleteAllView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">刪除全部</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store/index'
import { func_getLocalStorageLocale } from '@/utils/useLocalStorage'

const router = useRouter()
const commonStore = useCommonStore()
const { isLogin } = storeToRefs(commonStore)

const isLoginPages = computed(() => {
  if (isLogin.value) {
    return '/login/isLoginTipView'
  } else {
    return '/login/loginView'
  }
})

const checkLoginStatus = () => {
  if (func_getLocalStorageLocale()) {
    isLogin.value = true
  }
}

onMounted(() => {
  checkLoginStatus()
  console.log(isLogin.value)
})
</script>
