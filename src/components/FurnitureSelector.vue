<template>
  <section>
    <h2 class="font-bold text-3xl text-sky-800 text-center mb-10">
      Wybierz produkt do konfiguracji
    </h2>
    <ul class="flex items-center justify-center flex-wrap gap-2">
      <li
        v-for="f in furniture"
        :key="f.id"
        @click="onSelectFurniture(f)"
        class="cursor-pointer relative gap-4 hover:scale-95 duration-300 rounded overflow-hidden"
      >
        <span class="absolute top-0 left-0 font-bold bg-gray-800/50 text-white p-1">
          {{ f.name }}
        </span>
        <img
          :src="f.img"
          alt=""
          class="aspect-square w-[250px]"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { furniture } from '@/data'

export type Furniture = {
  id: string
  name: string
  img?: string
}

const emit = defineEmits<{
  select: [furniture: Furniture]
}>()

const onSelectFurniture = (furniture: Furniture) => {
  emit('select', furniture)
}
</script>
