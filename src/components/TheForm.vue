<template>
  <div class="p-6 screen-height bg-gray-200">
    <div
      v-if="!isLoggedIn"
      class="font-semibold pl-1 text-blue-500 text-center mx-auto pb-4 px-4 text-lg"
    >
      <p>
        If you see this message it is because you are not logged in. To write a
        note you have to be logged in.
      </p>
      <router-link to="/login" class=" hover:underline"
        >Click here to Login or Sign Up</router-link
      >
    </div>
    <div
      class="w-full max-w-md m-auto bg-blue-100 p-5 shadow-lg rounded-lg overflow-hidden"
    >
      <header>
        <img
          class="mx-auto mb-5"
          src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-write-news-journal-inipagistudio-mixed-inipagistudio.png"
        />
      </header>
      <form action="submit" @submit.prevent="submitForm">
        <label for="" class="block mb-2 text-blue-500 font-bold">Title</label>
        <input
          type="text"
          v-model.trim="title"
          class="w-full p-2 mb-6 text-gray-800 border-b-2 border-blue-500 outline-none focus:bg-gray-200"
        />
        <label for="" class="block mb-2 text-blue-500 font-bold"
          >Description</label
        >
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          v-model.trim="description"
          class="w-full p-2 mb-6 text-gray-800 border-b-2 border-blue-500 outline-none focus:bg-gray-200"
        ></textarea>
        <label for="" class="block mb-2 text-blue-500 font-bold"
          >Image Link</label
        >
        <input
          type="text"
          v-model.trim="imageLink"
          class="w-full p-2 mb-6 text-gray-800 border-b-2 border-blue-500 outline-none focus:bg-gray-200"
        />
        <button
          class="w-full border bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white font-bold py-2 px-4 mb-6 rounded"
        >
          New Note
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      title: "",
      decription: "",
      imageLink: "",
      levelImportance: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        title: this.title,
        description: this.description,
        levelImportance: this.levelImportance,
        imageLink: this.imageLink,
      };
      if (this.isLoggedIn) {
        this.$emit("save-data", formData);
        alert("Note added successfully!");
        this.$router.push("/notes");
      }
      else {
        alert('You are not logged in! In order to create a note, please logged in.')
      }
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.screen-height {
  min-height: 80vh;
}
</style>
