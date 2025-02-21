<template>
  <div class="mb-10">
    <div class="mb-4 border-b-2">已註冊信箱</div>
    <template v-for="(item, index) in emailData" :key="index">
      <template v-if="item.email">
        <p>信箱 : {{ item.email }}</p>
      </template>
    </template>
  </div>
  <goIndexButton />
</template>

<script setup lang="ts">
import registerApiStore from '~/utils/registerApiStore'

import goIndexButton from '~/components/goIndexButton.vue'

const { func_checkEmail } = registerApiStore()

const emailData = ref()

onMounted(async () => {
  emailData.value = await func_checkEmail()
})
</script>
