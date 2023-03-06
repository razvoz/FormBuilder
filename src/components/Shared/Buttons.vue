<template>
  <div class="field is-grouped">
    <div class="control">
      <button
        :class="submitButtonClass"
        @click="submit"
      >{{ submitButtonLabel }}</button>
    </div>
    <div class="control">
      <button
        :class="resetButtonClass"
        @click="reset"
      >{{ resetButtonLabel }}</button>
    </div>
  </div>
</template>

<script>
const SUBMIT_BUTTON_LABEL = 'Submit';
const SUBMIT_BUTTON_CLS = 'button';
const RESET_BUTTON_LABEL = 'Reset';
const RESET_BUTTON_CLS = 'button';

export default {
  name: 'Buttons',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    submitButtonLabel() {
      return this.data['submit']?.label || SUBMIT_BUTTON_LABEL;
    },
    submitButtonClass() {
      return this.data['submit']?.class || SUBMIT_BUTTON_CLS;
    },
    resetButtonLabel() {
      return this.data['reset']?.label || RESET_BUTTON_LABEL;
    },
    resetButtonClass() {
      return this.data['reset']?.class || RESET_BUTTON_CLS;
    },
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    reset() {
      this.$emit('reset');
    },
  },
}
</script>