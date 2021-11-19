<template>
  <div>
    <the-form @save-data="saveData"></the-form>
  </div>
</template>

<script>
export default {
  methods: {
    saveData(data) {
      this.$store.dispatch("notes/registerNote", data);
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
