<template>
  <div class="max-w-md mx-auto bg-white shadow-xl rounded my-14">
    <div class="bg-blue-100 pt-8 pb-16">
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
          <div class="flex justify-center items-center">
            <the-button
              class="bg-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 inline-block text-white text-base uppercase rounded shadow-md px-6 py-2 mr-4"
              >{{ submitButton }}</the-button
            >
            <the-button
              type="button"
              mode="flat"
              @click="switchAuthMode"
              class="bg-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 inline-block text-white text-base uppercase rounded shadow-md px-6 py-2"
              >{{ switchModeButtonCaption }}</the-button
            >
          </div>
        </form>
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

      try {
        if (this.mode === "login") {
          this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        } else {
          this.$store.dispatch("signup", {
            email: this.email,
            password: this.password,
          });
        }
        this.$router.replace("/");
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later.";
      }
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  .form-control {
    margin: 0.5rem 0;
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
      display: block;
    }
    input,
    textarea {
      display: block;
      width: 100%;
      font: inherit;
      border: 1px solid #ccc;
      padding: 0.15rem;
    }

    input:focus,
    textarea:focus {
      border-color: #3d008d;
      background-color: #faf6ff;
      outline: none;
    }
    form {
      margin: 1rem;
      border: 1px solid #ccc;
      border-radius: 12px;
      padding: 1rem;
    }
  }
}
</style>
