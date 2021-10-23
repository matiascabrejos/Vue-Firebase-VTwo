<template>
  <router-link to="/">HOME</router-link>
  <router-link to="/login">LOGIN</router-link>
  <div v-if="isLoggedIn">
    <button @click="logout">LOGOUT</button>
  </div>
  <router-link to=""></router-link>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style>

</style>