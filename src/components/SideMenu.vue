<template>
  <div>
    <nav :class="{ 'side-menu--visible': isSideMenuOpen }" class="side-menu">
      <div class="flex flex-1 flex-col">
        Groups
      </div>
    </nav>
    <div
      v-show="isSideMenuOpen"
      class="absolute md:hidden inset-0 z-20"
      @click="toggleSideMenu"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  name: 'SideMenu',

  computed: mapState('app', ['isSideMenuOpen']),

  methods: mapActions('app', ['toggleSideMenu']),
});
</script>

<style lang="scss" scoped>
.side-menu {
  @apply bg-white flex flex-col absolute shadow-2xl top-0 z-30 p-5;
  height: 100%;
  width: 280px;
  transform: translateX(-100%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0s linear 0.25s;

  &--visible {
    transform: translateX(0);
  }

  @screen md {
    @apply sticky shadow-none z-0;
  }
}
</style>
