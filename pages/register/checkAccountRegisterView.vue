<template>
  <div class="mb-10">
    <div class="mb-4 border-b-2">已註冊帳號</div>
    <template v-for="(item, index) in accountData" :key="index">
      <template v-if="item.account">
        <p>帳號 : {{ item.account }}</p>
      </template>
    </template>
  </div>
  <goIndexButton />
</template>

<script setup lang="ts">
import registerApiStore from '~/utils/registerApiStore'

import goIndexButton from '~/components/goIndexButton.vue'

const { func_checkAccount } = registerApiStore()

const accountData = ref()

onMounted(async () => {
  accountData.value = await func_checkAccount()
})
</script>
