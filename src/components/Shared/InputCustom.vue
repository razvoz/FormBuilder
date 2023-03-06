<template>
  <div class="box">
    <div class="field has-addons">
    <div class="control">
      <input
        v-model="inputValue"
        type="text"
        class="input"
        :placeholder="placeholder"
      />
    </div>
    <div class="control">
      <button @click="clickHandler" class="button is-info">
        Вставить
      </button>
    </div>
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
  },
  methods: {
    async clickHandler() {
      const value = await navigator.clipboard.readText();

      this.$emit('update', value);
    },
  },
}
</script>