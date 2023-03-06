<template>
  <div>
    <h1 class="title mb-6">Логин</h1>

    <LoginFormContainer />
  </div>
</template>

<script>
import LoginFormContainer from '@/containers/LoginFormContainer.vue';

export default {
  components: {
    LoginFormContainer,
  },
}
</script>