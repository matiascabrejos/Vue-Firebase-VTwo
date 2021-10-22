<template>
  <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_LQu2Ly.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
  <router-link to="/add-note">Add A Note!</router-link>
  <h1>Notes</h1>
  <button @click="loadNotes">Refresh</button>
    <ul v-for="note in filteredNotes" :key="note.id">
    <li>{{ note.title }}</li>
    <li>{{ note.description }}</li>
  </ul>
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