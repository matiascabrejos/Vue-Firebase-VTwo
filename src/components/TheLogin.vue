<template>
  <div class="screen-height bg-gray-200">
    <div
      class="max-w-md mx-auto py-14"
    >
      <div class="bg-blue-100 pt-8 pb-16 m-2 lg:m-0 md:m-0 lg:shadow-xl md:shadow-xl rounded">
        <div class="text-center text-blue-500 mb-6 font-bold">
          Login or Sign Up
        </div>
        <div class="w-4/5 mx-auto">
          <form @submit.prevent="submitForm">
            <div class="flex items-center bg-white rounded shadow-md mb-4">
              <span class="px-3">
                <svg
                  class="fill-current text-gray-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                  />
                </svg>
              </span>
              <input
                class="w-full h-12 focus:outline-none"
                type="email"
                name="email"
                placeholder="Email"
                v-model.trim="email"
              />
            </div>
            <div class="flex items-center bg-white rounded shadow-md mb-4">
              <span class="px-3">
                <svg
                  class="fill-current text-gray-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  />
                </svg>
              </span>
              <input
                class="w-full h-12 focus:outline-none"
                type="password"
                name="password"
                placeholder="Password"
                v-model.trim="password"
              />
            </div>
            <p v-if="!formIsValid" class="text-red-600 mb-2">
              Remember! Password must be at least 6 characters long.
            </p>
            <div class="flex justify-center items-center">
              <button
                @click="login"
                class="bg-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 inline-block text-white text-base uppercase rounded shadow-md px-6 py-2 mr-4"
              >
                Login
              </button>
              <button
                @click="signUp"
                class="bg-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 inline-block text-white text-base uppercase rounded shadow-md px-6 py-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
    };
  },
  computed: {
    submitButton() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Signup instead";
      } else {
        return "Login";
      }
    },
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          alert("You are now logged in!");
          this.$router.push("/");
        });
    },
    signUp() {
      this.$store
        .dispatch("signup", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          alert("Successfully signed up!");
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
.screen-height {
  min-height: 80vh;
}
</style>
