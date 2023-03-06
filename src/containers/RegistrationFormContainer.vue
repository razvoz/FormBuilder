<template>
  <div>
    <div class="wrapper mb-6">
      <FormBuilder
        :fields="fields"
        :buttons="buttons"
        v-model="value"
        @submit="onSubmit"
        @reset="onReset"
      >
        <template #promo="{ field, value, onChange }">
          <InputCustom
            :name="field.name"
            :value="value"
            :label="field.label"
            :params="field.params"
            @update="$event => onChange(field.name, $event)"
          />
        </template>
      </FormBuilder>
    </div>
  </div>
</template>

<script>
import FormBuilder from '@/components/FormBuilder/FormBuilder.vue';
import InputCustom from '@/components/Shared/InputCustom.vue';
import Config from '@/api/registrationFormConfig.json';
import Value from '@/api/registrationFormValue.json';
import { clearObject } from '@/utils';

const SUBMIT_ALERT_TEXT = 'Форма отправлена, подробности в консоли';

export default {
  name: 'RegistrationFormContainer',
  components: {
    FormBuilder,
    InputCustom,
  },
  data() {
    return {
      value: {},
      config: [],
    }
  },
  computed: {
    fields() {
      return this.config?.fields || [];
    },
    buttons() {
      return this.config?.buttons || {};
    },
  },
  methods: {
    onSubmit() {
      console.log(this.value);
      alert(SUBMIT_ALERT_TEXT);
    },
    onReset() {
      this.value = clearObject(this.value);
    },    
  },
  created() {
    this.value = Value;
    this.config = Config;
  },
}
</script>

<style scoped>
  .wrapper {
    width: 400px;
  }
</style>