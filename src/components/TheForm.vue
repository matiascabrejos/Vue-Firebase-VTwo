<template>
    <div class="py-5">
      <div class="w-full max-w-md m-auto bg-indigo-100 rounded p-5">  
        <header>
        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>    
            <form action="submit" @submit.prevent="submitForm">
        <label for="" class="block mb-2 text-indigo-500">Title</label>
        <input type="text" v-model.trim="title" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300">
        <label for="" class="block mb-2 text-indigo-500">Description</label>
        <textarea name="" id="" cols="30" rows="8" v-model.trim="description" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"></textarea>
        <label for="" class="block mb-2 text-indigo-500">Image Link</label>
        <input type="text" v-model.trim="imageLink" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300">
        <div>
            <h3>Level Of Importance</h3>
            </div>
            <div class="flex">
            <input type="checkbox" id="vimportant" value="vimportant" v-model="levelImportance"  class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300">
            <label for="vimportant" class="block mb-2 text-indigo-500">Very Important</label>
            <input type="checkbox" id="important" value="important" v-model="levelImportance"  class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300">
            <label for="important" class="block mb-2 text-indigo-500">Important</label>
            <input type="checkbox" id="ntimportant" value="ntimportant" v-model="levelImportance"  class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300">
            <label for="ntimportant" class="block mb-2 text-indigo-500">Not That Important</label>
        </div>
        <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded">New Note</button>
      </form>
      </div>
  </div>
</template>

<script>
export default {
  emits: ['save-data'],
    data() {
        return {
            title: '',
            decription: '',
            imageLink: '',
            levelImportance: []
        }
    },
    methods: {
      submitForm() {
        const formData = {
          title: this.title,
          description: this.description,
          levelImportance: this.levelImportance,
          imageLink: this.imageLink          
        }
        this.$emit('save-data', formData)
      }
    }
}
</script>



