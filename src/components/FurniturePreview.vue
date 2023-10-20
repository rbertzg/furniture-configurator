<template>
  <section>
    <h2 class="font-bold text-3xl text-sky-800 text-center mb-10">Podgląd</h2>
    <div class="flex lg:justify-center gap-10 px-20 flex-wrap lg:flex-nowrap">
      <div class="basis-1/2">
        <p class="font-bold text-lg text-sky-600">Wybrany mebel:</p>
        <pre class="mt-2 whitespace-pre-wrap">{{ furniture }}</pre>
      </div>
      <div>
        <p class="font-bold text-lg text-sky-600">Wybrane konfiguracje:</p>
        <pre class="mt-2 whitespace-pre-wrap">{{ config }}</pre>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FurnitureConfig } from '@/components/FurnitureConfigurator.vue'
import type { Furniture } from './FurnitureSelector.vue'

defineProps<{
  furniture: Furniture
  config: FurnitureConfig
}>()
</script>
