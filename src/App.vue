<template>
  <div id="app" class="min-h-screen">
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

export default Vue.extend({
  components: {
    NewContentAvailableToastr,
    AppleAddToHomeScreenModal,
  },
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
