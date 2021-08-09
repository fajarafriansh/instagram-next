<template>
  <div class="flex space-x-8">
    <div class="w-full lg:w-7/12">
      <StoriesSection :stories="stories" />
      <div class="mt-8">
        <h1 class="text-2xl font-semibold">Feed</h1>
        <div v-for="post in posts" :key="post.user" class="flex flex-col mt-6 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-10 h-10 border-2 border-indigo-400 rounded-full md:w-12 md:h-12">
                <img class="w-full h-full border border-white rounded-full" :src="`/profiles/${ post.profile }`" />
              </div>
              <div class="ml-4 text-left">
                <p class="font-semibold leading-tight">{{ post.user }}</p>
              </div>
            </div>
            <button class="focus:outline-none">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
          <div class="w-screen -mx-4 md:-mx-0 md:w-full">
            <img class="w-full md:rounded-lg" :src="`/posts/${ post.post }`" alt="post" />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        
      </div>
    </div>
    <SuggestionsSection :suggestions="suggestions" />
  </div>
</template>

<script>
import StoriesSection from '@/components/page-sections/StoriesSection'
import SuggestionsSection from '@/components/page-sections/SuggestionsSection'

export default {
  name: 'PageHome',
  components: {
    StoriesSection,
    SuggestionsSection,
  },
  data: () => ({
    stories: [
      {
        user: 'captain.deadpool',
        profile: 'deadpool.jpg',
      },
      {
        user: 'cap.rogers',
        profile: 'roger.jpg',
      },
      {
        user: 'tonystark',
        profile: 'ironman.jpg',
      },
      {
        user: 'saitama',
        profile: 'saitama.jpg',
      },
      {
        user: 'xbox01',
        profile: 'xbox01.jpg',
      },
      {
        user: 'cap.rogers',
        profile: 'roger.jpg',
      },
      {
        user: 'xbox02',
        profile: 'xbox02.jpg',
      },
      {
        user: 'captain.deadpool',
        profile: 'deadpool.jpg',
      },
      {
        user: 'cap.rogers',
        profile: 'roger.jpg',
      },
    ],
    suggestions: [
      {
        user: 'fajar.afriansh',
        profile: 'ironman.jpg',
      },
      {
        user: 'cap.rogers',
        profile: 'roger.jpg',
      },
      {
        user: 'tonystark',
        profile: 'ironman.jpg',
      },
      {
        user: 'captain.deadpool',
        profile: 'deadpool.jpg',
      },
    ],
    posts: [
      {
        user: 'captain.deadpool',
        profile: 'deadpool.jpg',
        post: 'deadpool.jpg',
      },
      {
        user: 'cap.rogers',
        profile: 'roger.jpg',
        post: 'roger.jpg',
      },
      {
        user: 'tonystark',
        profile: 'ironman.jpg',
        post: 'ironman.jpg',
      },
      {
        user: 'saitama',
        profile: 'saitama.jpg',
        post: 'saitama.jpg',
      },
      {
        user: 'xbox01',
        profile: 'xbox01.jpg',
        post: 'xbox01.jpg',
      },
      {
        user: 'xbox02',
        profile: 'xbox02.jpg',
        post: 'xbox01.jpg',
      },
      {
        user: 'captain.deadpool',
        profile: 'deadpool.jpg',
        post: 'deadpool.jpg',
      },
    ]
  }),
}
</script>

<style>

</style>
