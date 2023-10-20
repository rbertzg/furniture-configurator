<template>
  <label class="flex gap-2 items-center justify-center">
    <span class="font-bold text-lg text-sky-600">
      {{ label }}
    </span>
    <select
      v-model="value"
      class="bg-sky-100 rounded p-1"
    >
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
  id: string | number
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
