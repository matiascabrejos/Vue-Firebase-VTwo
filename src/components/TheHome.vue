<template>
  <h1>The Home</h1>
  <h2>This is the home</h2>
  <ul v-for="note in filteredNotes" :key="note.id">
    <li>{{ note.title }}</li>
    <li>KAPPA</li>
  </ul>
</template>

<script>
export default {
  computed: {
    filteredNotes() {
      return this.$store.getters['notes/notes']
    }
  }
}
</script>

<style>

</style>