<template>
  <div id="app">
    <nav-bar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    />
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import NewContentAvailableToastr from '@/components/pwa/NewContentAvailableToastr.vue';
import AppleAddToHomeScreenModal from '@/components/pwa/AppleAddToHomeScreenModal.vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  components: { NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp']),
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting',
  ]),
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.new-content-available-toastr {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.apple-add-to-home-screen-modal {
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  height: fit-content;
  width: fit-content;
  margin: auto;
  z-index: 1000;
}
</style>
