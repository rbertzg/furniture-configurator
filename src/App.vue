<template>
  <div class="text-gray-600">
    <h1 class="text-center font-bold text-5xl text-sky-600 my-10">Konfigurator mebli</h1>
    <FurnitureSelector @select="handleSelectFurniture" />
    <FurnitureConfigurator
      v-if="selectedFurniture"
      :isOpen="isConfiguratorOpen"
      :furniture="selectedFurniture"
      @complete-config="handleCompleteConfig"
    />
    <FurniturePreview
      v-if="selectedFurniture && selectedConfig"
      :furniture="selectedFurniture"
      :config="selectedConfig"
      class="mt-10"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FurnitureConfigurator, { type FurnitureConfig } from './components/FurnitureConfigurator.vue'
import FurniturePreview from './components/FurniturePreview.vue'
import FurnitureSelector, { type Furniture } from './components/FurnitureSelector.vue'

const isConfiguratorOpen = ref(true)
const selectedFurniture = ref<Furniture>()
const selectedConfig = ref<FurnitureConfig>()

const handleSelectFurniture = (furniture: Furniture) => {
  selectedFurniture.value = furniture
  isConfiguratorOpen.value = true
}

const handleCompleteConfig = (config: FurnitureConfig) => {
  selectedConfig.value = config
  isConfiguratorOpen.value = false
}
</script>
