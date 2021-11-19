<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    <div
      class="flex flex-col justify-between border-b pb-5 bg-white shadow-lg rounded-lg overflow-hidden"
      v-for="note in filteredNotes"
      :key="note.id"
    >
      <p class="text-gray-900 font-medium hover:text-indigo-600 pl-2 pt-1">
        {{ note.title }}
      </p>
      <div class="flex items-start justify-between mt-3">
        <div class="text-sm w-2/3">
          <p class="text-gray-700 pl-2">{{ note.description }}</p>
        </div>
        <div class="w-20 h-20 bg-cover bg-center">
          <img :src="note.imageLink" alt="" />
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
