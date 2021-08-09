<template>
  <router-link :to="to" class="flex items-center justify-between w-full py-4">
    <div class="flex items-center">
      <span class="w-6 h-6 rounded-lg bg-gray-800"></span>
      <span class="ml-4 font-semibold">
        <slot>Sidebar Link</slot>
      </span>
    </div>
    <div class="flex items-center justify-end space-x-2">
      <slot name="badge"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarLink',
  props: {
    to: {
      type: Object,
      default () {},
    },
  },
}
</script>
