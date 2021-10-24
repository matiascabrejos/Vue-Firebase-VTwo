<template>
  <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_LQu2Ly.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
  <router-link to="/add-note">Add A Note!</router-link>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
  <div class="border-b mb-5 flex justify-between text-sm">
    <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
      <p class="font-semibold inline-block pl-1">Notes</p>
    </div>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    
    <div class="flex flex-col justify-between border-b pb-5" v-for="note in filteredNotes" :key="note.id">
      <p class="text-gray-900 font-medium hover:text-indigo-600">{{ note.title }}</p>
    <div class="flex items-start justify-between mt-3">
      <div class="text-sm w-2/3">
        <p class="text-gray-700">{{ note.description }}</p>
        <p class="text-gray-600 text-xs">Aug 18</p>
      </div>
 <div class="w-20 h-20 bg-cover bg-center">
   <img :src="note.imageLink" alt="">
 </div>
    </div>   
  </div>    
  </div>
</div>

  <h1>Notes</h1>
  <button @click="loadNotes">Refresh</button>
</template>

<script>
export default {
  methods: {
            loadNotes() {
          this.$store.dispatch('notes/loadNotes')
        }
  },
      computed: {
      filteredNotes() {
        return this.$store.getters['notes/notes']
      }
    },
    created() {
      this.loadNotes();
    }
}
</script>

<style>

</style>