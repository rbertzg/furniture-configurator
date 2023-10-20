<template>
  <Teleport to="#modal">
    <AppModal v-if="isOpen">
      <template #header>
        <h2 class="font-bold text-3xl text-sky-800 text-center mb-10">Konfiguracja produktu</h2>
      </template>
      <template #main>
        <GenericSelect
          v-for="(options, optionsName) in configOptions[furniture.id]"
          :key="optionsName"
          v-model="selectedConfig[optionsName]"
          :label="optionsName"
          :options="options"
          class="mb-4"
        />
      </template>
      <template #footer>
        <button
          @click="onCompleteConfig"
          class="bg-sky-600 text-white font-bold text-lg p-1 mx-auto block mt-10 rounded"
        >
          Akceptuj
        </button>
      </template>
    </AppModal>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { configOptions } from '../data'
import AppModal from './AppModal.vue'
import type { Furniture } from './FurnitureSelector.vue'
import type { OptionProps } from './GenericSelect.vue'
import GenericSelect from './GenericSelect.vue'

export type FurnitureConfig = Record<string, OptionProps>
export type FurnitureConfigs = Record<string, OptionProps[]>

const props = defineProps<{
  isOpen: boolean
  furniture: Furniture
}>()

const emit = defineEmits<{
  completeConfig: [config: FurnitureConfig]
}>()

const selectedConfig = ref<FurnitureConfig>({})

watch(
  () => props.furniture,
  (newFurniture) => {
    if (newFurniture) {
      selectedConfig.value = {}
      for (const optionsName in configOptions[newFurniture.id]) {
        selectedConfig.value[optionsName] = configOptions[newFurniture.id][optionsName][0]
      }
    }
  },
  { immediate: true }
)

const onCompleteConfig = () => {
  emit('completeConfig', selectedConfig.value)
}
</script>
