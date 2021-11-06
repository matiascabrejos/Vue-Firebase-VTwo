<template>
  <div>
    <the-form @save-data="saveData"></the-form>
    <ul v-for="note in filteredNotes" :key="note.id">
      <li>{{ note.title }}</li>
      <li>{{ note.description }}</li>
    </ul>
    <button @click="loadNotes">TOUCH ME</button>
  </div>
</template>

<script>
export default {
  methods: {
    saveData(data) {
      this.$store.dispatch("notes/registerNote", data);
      this.$router.replace("/");
    },
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

<style></style>
