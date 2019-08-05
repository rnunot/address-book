<template>
  <nav class="py-5 shadow-md flex justify-start items-center">
    <div class="text-2xl mx-5" @click="isMenuOpen = !isMenuOpen">
      <font-awesome-icon icon="bars" />
    </div>

    <div class="font-bold text-3xl ">
      <font-awesome-icon icon="address-book" />
      Address Book
    </div>

    <div class="mx-5 relative w-full max-w-2xl">
      <input
        type="search"
        name="search"
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pr-4 pl-10 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <div
        class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"
      >
        <font-awesome-icon icon="search" />
      </div>
    </div>

    <div class="absolute">Menu</div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',

  data() {
    return {
      isMenuOpen: true,
    };
  },
});
</script>
