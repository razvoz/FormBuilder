<template>
  <div class="field">
    <label
      :for="name"
      class="label"
    >{{ label }}</label>
    <div class="control">
      <textarea
        v-model="inputValue"
        :id="name"
        class="textarea"
        :placeholder="placeholder"
      ></textarea>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    params: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update', value);
      },
    },
    placeholder() {
      return this.params.placeholder;
    },
  }
}
</script>