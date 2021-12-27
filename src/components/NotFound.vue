<template>
  <div class="screen-height">
      <div class="text-center shadow-lg rounded-lg inline-block p-4">
        <div class="text-gray-900">
          <h1 class="font-bold">Page not found</h1>
          <h2 class="font-semibold">
            This page could not be found - Check out our
            <router-link to="/home" class="text-blue-500">Homepage</router-link>
          </h2>
        </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.screen-height {
  min-height: 80vh;
}
</style>
