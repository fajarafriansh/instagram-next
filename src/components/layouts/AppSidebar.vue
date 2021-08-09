<template>
  <aside class="sticky top-0 hidden h-screen w-60 lg:flex lg:flex-col">
    <h1 class="py-4 text-2xl leading-relaxed text-dark-3">Insafgan</h1>
    <dropdown width="56">
      <template v-slot:trigger>
        <button class="flex items-center justify-between w-full py-4 focus:outline-none">
          <div class="flex items-center">
            <div class="w-12 h-12 border-2 border-indigo-400 rounded-full lg:w-14 lg:h-14">
              <img class="object-cover w-full h-full border border-white rounded-full" :src="user.profile" />
            </div>
            <div class="ml-3 text-left">
              <p class="font-semibold leading-tight">{{ user.username }}</p>
              <p class="text-sm leading-tight text-gray-400">Software Engineer</p>
            </div>
          </div>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </template>
      <template v-slot:content>The content goes here</template>
    </dropdown>
    
    <div class="py-2 border-b border-gray-300">
      <sidebar-link :to="{ name: 'PageHome' }">Feed</sidebar-link>
      <sidebar-link :to="{ name: 'PageExplore' }">Explore</sidebar-link>
      <button class="flex items-center w-full py-4">
        <span class="w-6 h-6 bg-gray-800 rounded-lg"></span>
        <span class="ml-4 font-semibold">Saved</span>
      </button>
    </div>
    <div class="py-2">
      <sidebar-link :to="{ name: 'PageMessage' }">
        <span>Direct</span>
        <template v-slot:badge>
          <badge color="bg-red">2</badge>
          <badge color="bg-gray-300">2021</badge>
        </template>
      </sidebar-link>
      <button class="flex items-center w-full py-4">
        <span class="w-6 h-6 bg-gray-800 rounded-lg"></span>
        <span class="ml-4 font-semibold">Activity</span>
      </button>
    </div>
    <div class="py-4 text-xs">
      About - Help - Press - Jobs - Privacy - Term - Locations - Top Accounts - Hashtags
    </div>
    <p class="text-xs">&copy; 2021</p>
  </aside>
</template>

<script>
import Dropdown from '@/components/ui/Dropdown'
import SidebarLink from '@/components/ui/SidebarLink'
import Badge from '@/components/ui/Badge'

export default {
  name: 'AppSidebar',
  components: {
    Dropdown,
    SidebarLink,
    Badge,
  },
  data: () => ({
    user: {
      username: 'fajar.afriansh',
      fullname: 'Fajar',
      profile: 'profiles/ironman.jpg',
    },
  }),
}  
</script>
