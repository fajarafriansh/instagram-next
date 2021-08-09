<template>
  <div class="flex items-center h-6 px-2 text-sm font-medium text-white rounded-full" :class="color">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    color: {
      type: String,
      default: 'bg-red',
    },
  },
}
</script>

<style>

</style>