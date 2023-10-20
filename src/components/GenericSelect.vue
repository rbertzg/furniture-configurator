<template>
  <label>
    <span>
      {{ label }}
    </span>
    <select v-model="value">
      <option
        v-for="option in options"
        :key="option.id"
        :value="option"
      >
        {{ option.name }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts" generic="T extends OptionProps">
import { computed } from 'vue'

export type OptionProps = {
  id: string
  name: string
}

const props = defineProps<{
  label: string
  options: T[]
  modelValue: T
}>()

const emit = defineEmits<{
  'update:modelValue': [value: T]
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: T) {
    emit('update:modelValue', value)
  },
})
</script>
