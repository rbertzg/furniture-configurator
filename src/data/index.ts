import { type FurnitureConfigs } from '@/components/FurnitureConfigurator.vue'
import type { Furniture } from '@/components/FurnitureSelector.vue'

export const furniture: Furniture[] = [
  {
    id: 'x921dn',
    name: 'Stół Adam',
    img: 'https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'dh997b',
    name: 'Sofa Victoria',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export const configOptions: Record<string, FurnitureConfigs> = {
  // stół
  x921dn: {
    topColors: [
      { id: 1, name: 'dąb' },
      { id: 2, name: 'mahoń' },
    ],
    legColors: [
      { id: 1, name: 'dąb' },
      { id: 2, name: 'mahoń' },
    ],
  },
  // sofa
  dh997b: {
    mainColors: [
      { id: 1, name: 'czerwony' },
      { id: 2, name: 'niebieski' },
      { id: 3, name: 'zielony' },
    ],
    pillowColors: [
      { id: 1, name: 'czerwony' },
      { id: 2, name: 'niebieski' },
      { id: 3, name: 'zielony' },
    ],
    legColors: [
      { id: 1, name: 'dąb' },
      { id: 2, name: 'mahoń' },
    ],
  },
}
