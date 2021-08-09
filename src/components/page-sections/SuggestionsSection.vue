<template>
  <div class="hidden lg:block lg:w-5/12 lg:h-screen lg:sticky lg:top-0 lg:-mt-22 lg:pt-22">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold leading-tight">Suggestions for you</h2>
      <button class="text-dark-1">More</button>
    </div>
    <div class="flex flex-col mt-8 space-y-4">
      <div v-for="suggestion in suggestions" :key="suggestion.user" class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="w-12 h-12 border-2 border-indigo-400 rounded-full lg:w-14 lg:h-14">
            <img class="object-cover w-full h-full border border-white rounded-full" :src="`/profiles/${ suggestion.profile }`" />
          </div>
          <div class="hidden ml-4 text-left lg:inline-block">
            <p class="font-semibold leading-tight">{{ suggestion.user }}</p>
            <p class="text-sm leading-tight text-gray-400">Engineer</p>
          </div>
        </div>
        <button class="px-2 py-1 text-sm font-semibold leading-tight rounded-md bg-blue-1 text-blue-2">Follow</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    suggestions: {
      type: Object,
      default () {},
    },
  },
}
</script>

<style>

</style>