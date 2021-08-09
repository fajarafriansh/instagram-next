<template>
  <div class="container flex justify-center w-full">
    <AppSidebar />
    <main class="flex flex-col w-full lg:ml-8 lg:w-3/4 md:w-2/3">
      <AppHeader />
      <div class="mt-4">
        <slot />
      </div>
    </main>
  </div>
  <div class="container fixed bottom-0 flex items-center justify-between w-full py-2 bg-indigo-300 md:hidden">
    <router-link :to="{ name: 'PageHome' }" class="flex items-center justify-start px-2">
      <span class="w-8 h-8 bg-gray-800 rounded-lg"></span>
    </router-link>
    <router-link :to="{ name: 'PageHome' }" class="flex items-center justify-center px-2">
      <span class="w-8 h-8 bg-gray-800 rounded-lg"></span>
    </router-link>
    <router-link :to="{ name: 'PageHome' }" class="flex items-center justify-center px-2">
      <span class="w-8 h-8 bg-gray-800 rounded-lg"></span>
    </router-link>
    <router-link :to="{ name: 'PageHome' }" class="flex items-center justify-center px-2">
      <span class="w-8 h-8 bg-gray-800 rounded-lg"></span>
    </router-link>
    <router-link :to="{ name: 'PageProfile' }" class="flex items-center justify-end px-2">
      <span class="w-8 h-8 bg-gray-800 rounded-lg"></span>
    </router-link>
  </div>
</template>

<script>
import AppSidebar from '@/components/layouts/AppSidebar'
import AppHeader from '@/components/layouts/AppHeader'

export default {
  name: 'AppLayoutDefault',
  components: {
    AppSidebar,
    AppHeader,
  },
}
</script>
