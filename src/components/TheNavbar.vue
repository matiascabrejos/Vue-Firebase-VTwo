<template>
  <div class="font-sans antialiased" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
          />
          <path
            fill-rule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">iNOTES APP</span>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light text-white hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm sm:flex-grow">
          <router-link
            to="/home"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white  hover:text-blue-500 mr-4 font-bold"
          >
            HOME
          </router-link>
          <router-link
            to="/login"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-blue-500 mr-4 font-bold"
          >
            LOGIN
          </router-link>
          <router-link
            to="/add-note"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white  hover:text-blue-500 mr-4 font-bold"
          >
            NEW NOTE
          </router-link>
          <router-link
            to="/notes"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white  hover:text-blue-500 mr-4 font-bold"
            >NOTES</router-link
          >
        </div>
        <div v-if="isLoggedIn">
          <button
            @click="logout"
            class="font-semibold no-underline inline-block text-lg px-4 py-2 leading-none border rounded bg-blue-500 text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 sm:mt-0"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>

  <div v-if="isLoggedIn">
    <button @click="logout">LOGOUT</button>
  </div>
  <router-link to=""></router-link>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style></style>
