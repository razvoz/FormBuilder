<template>
  <div class="field">
    <label
      :for="name"
      class="label"
    >{{ label }}</label>
    <div class="control">
      <input
        v-model="inputValue"
        :id="name"
        type="text"
        class="input"
        :placeholder="placeholder"
      />
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Input',
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