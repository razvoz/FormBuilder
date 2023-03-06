<template>
  <div>
    <Header class="mb-4" />

    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>
