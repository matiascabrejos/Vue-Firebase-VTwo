<template>
 <the-navbar></the-navbar>
 <router-view></router-view>
</template>

<script>

export default {

}
</script>

<style>
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
