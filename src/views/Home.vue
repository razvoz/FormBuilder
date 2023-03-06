<template>
  <div>
    <h1 class="title mb-6">Регистрация</h1>

    <RegistrationFormContainer />
  </div>
</template>

<script>
import RegistrationFormContainer from '@/containers/RegistrationFormContainer.vue';

export default {
  components: {
    RegistrationFormContainer,
  },
}
</script>