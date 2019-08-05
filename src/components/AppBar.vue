<template>
  <header
    class="py-5 shadow-md flex justify-start items-center sticky top-0 z-10 bg-white text-purple-900"
  >
    <div class="text-2xl mx-5 cursor-pointer" @click="toggleSideMenu">
      <font-awesome-icon icon="bars" />
    </div>

    <div class="font-bold text-3xl text-left md:max-w-xs md:flex-1">
      <font-awesome-icon icon="address-book" />
      <span class="hidden md:inline">&nbsp;Address Book</span>
    </div>

    <div class="mx-5 relative flex-1 max-w-2xl">
      <input
        type="search"
        name="search"
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pr-4 pl-10 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <div
        class="pointer-events-auto md:pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"
      >
        <font-awesome-icon icon="search" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'AppBar',

  methods: mapActions('app', ['toggleSideMenu']),
});
</script>

<style lang="scss" scoped></style>
