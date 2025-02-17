<template>
  <div class="flex gap-5">
    <NuxtLink to="/addProfileView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">新增</NuxtLink>
    <NuxtLink to="/deleteProfileView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">刪除單筆</NuxtLink>
    <NuxtLink to="/checkAllView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">查看全部</NuxtLink>
    <NuxtLink to="/deleteAllView" class="p-4 border-2 border-white rounded-2xl text-white text-3xl cursor-pointer">刪除全部</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>
