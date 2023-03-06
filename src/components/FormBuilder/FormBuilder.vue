<template>
  <div>
    <div
      v-for="(field, key) in fields"
      :key="key"
      class="mb-4"
    >
      <slot
        :name="field.name"
        v-bind="{ field, value: value[field.name], onChange }
      ">
        <component
          :is="field.type"
          :name="field.name"
          :label="field.label"
          :value="value[field.name]"
          :params="field.params"
          @update="$event => onChange(field.name, $event)"
        />
      </slot>
    </div>
    
    <buttons
      :data="buttons"
      @submit="onSubmit"
      @reset="onReset"
      class="mt-6"
    />
  </div>
</template>

<script>
import Input from '@/components/Shared/Input.vue';
import Checkbox from '@/components/Shared/Checkbox.vue';
import Select from '@/components/Shared/Select.vue';
import Textarea from '@/components/Shared/Textarea.vue';
import Buttons from '@/components/Shared/Buttons.vue';

export default {
  name: 'FormBuilder',
  model: {
    prop: 'value',
    event: 'update'
  },
  components: {
    Input,
    Checkbox,
    Select,
    Textarea,
    Buttons,
  },
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    buttons: {
      type: Object,
      default: () => {},
    },
    value: {
      type: Object,
      default: () => {},
    },
  },
  computed: {

  },
  methods: {
    onChange(name, value) {
      this.$emit('update', {
        ...this.value,
        [name]:value,
      })
    },
    onSubmit() {
      this.$emit('submit');
    },
    onReset() {
      this.$emit('reset');
    },
  },
}
</script>