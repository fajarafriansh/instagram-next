<template>
  <div class="flex items-center w-screen -ml-4 overflow-x-auto stories md:w-full md:-ml-0">
    <div v-for="story in stories" :key="story.user" class="flex flex-col items-center px-1">
      <div class="w-16 h-16 border-indigo-400 rounded-full border-3 lg:w-18 lg:h-18">
        <img class="object-cover w-full h-full border-2 border-white rounded-full" :src="`/profiles/${ story.profile }`" />
      </div>
      <span class="text-sm font-medium">{{ $filters.truncate(story.user, 11) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stories: {
      type: Object,
      default () {},
    },
  },
}
</script>

<style>
@media (max-width: 640px) {
  .stories::-webkit-scrollbar {
    display: none;
  }
}
.stories > div:first-child {
  @apply items-start pl-4 md:pl-0;
}
.stories > div:last-child {
  @apply pr-4 md:pr-0;
}
</style>