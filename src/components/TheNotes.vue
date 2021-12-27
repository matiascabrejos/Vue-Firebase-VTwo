<template>
  <div class="screen-height">
    <div class="mb-5 flex justify-between pt-6 pb-8">
      <div
        class="text-blue-500 flex items-center pb-2 pr-2 border-b-2 border-blue-500 uppercase mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <p class="font-semibold inline-block pl-1">Notes</p>
      </div>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-6 max-w-screen-2xl mx-auto">
      <div
        class="flex flex-col justify-between border-b pb-5 bg-white shadow-lg rounded-lg overflow-hidden mx-8 transform transition duration-500 hover:scale-110"
        v-for="note in filteredNotes"
        :key="note.id"
      >
        <p class="text-gray-900 font-medium hover:text-blue-500 pl-2 pt-3">
          {{ note.title }}
        </p>
        <div class="flex items-start justify-between mt-3">
          <div class="text-sm w-2/3">
            <p class="text-gray-700 pl-2">{{ note.description }}</p>
          </div>
          <div class="w-16 h-16 lg:w-20 lg:h-20 md:w-20 md:h-20 bg-cover bg-center pr-3">
            <img :src="note.imageLink" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loadNotes() {
      this.$store.dispatch("notes/loadNotes");
    },
  },
  computed: {
    filteredNotes() {
      return this.$store.getters["notes/notes"];
    },
  },
  created() {
    this.loadNotes();
  },
};
</script>

<style scoped>
.screen-height {
  min-height: 80vh;
}
</style>
