<template>
  <div class="field">
    <label
      :for="name"
      class="label"
    >{{ label }}</label>
    <div class="control">
      <div class="select">
        <select
          v-model="selectedValue"
          :id="name"
        >
          <option
            v-for="(option, key) in options"
            :value="option.value"
            :key="key"
          >{{ option.label }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
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
    }
  },
  computed: {
    options() {
      return this.params?.options || [];
    },
    selectedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update', value);
      },
    },
  },
}
</script>