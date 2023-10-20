<template>
  <div class="fixed z-50 bg-black/20 top-0 left-0 w-full h-full backdrop-blur-sm">
    <div class="fixed inset-x-6 top-6 max-w-screen-sm mx-auto bg-white rounded shadow p-4">
      <slot name="header"> </slot>
      <slot name="main"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
