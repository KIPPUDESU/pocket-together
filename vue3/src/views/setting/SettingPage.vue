<script setup lang="ts">
import { useI18nStore } from '@/stores'

const i18nStore = useI18nStore()
useSeoMeta({
  title: computed(() => i18nStore.t('pageSetting')()),
})
</script>

<template>
  <div>{{ i18nStore.t('pageSetting')() }}</div>
</template>

<style lang="scss" scoped></style>
