<script lang="ts" setup>
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
  <VerticalNavLink
      :item="{
        title: 'dashboard',
        to: '/dashboard',
        icon: 'ri-home-smile-line',
      }"
    />
</template>
