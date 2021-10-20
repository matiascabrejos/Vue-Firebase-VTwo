<template>
  <h1>Add A Note!</h1>
  <the-form @save-data="saveData"></the-form>
</template>

<script>
export default {
    methods: {
        saveData(data) {
          this.$store.dispatch('notes/registerNote', data)
          this.$router.replace('/notes')
        }
    }

}
</script>

<style>

</style>