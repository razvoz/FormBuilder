<template>
  <div class="field">
    <label class="checkbox">
      <input
        v-model="checked"
        type="checkbox"
      >
      {{ label }}
    </label>
  </div>  
</template>

<script>
export default {
  name: 'Checkbox',
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
      type: Boolean,
      default: false,
    },    
    params: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    checked: {
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