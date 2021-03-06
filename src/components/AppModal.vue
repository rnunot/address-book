<template>
  <transition name="modal-fade">
    <div class="app-modal__backdrop" @click.self="close">
      <div
        :class="{ 'app-modal--mobile-fullscreen': mobileFullScreen }"
        class="app-modal"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <header id="modal-title" class="app-modal__header">
          <div class="flex-1">
            <slot name="header" />
          </div>

          <button
            type="button"
            class="app-modal__close-button"
            aria-label="Close modal"
            @click="close"
          >
            <font-awesome-icon icon="times" size="lg" />
          </button>
        </header>
        <section id="modal-description" class="app-modal__body">
          <slot name="body" />
        </section>
        <footer v-if="$slots.footer" class="app-modal__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppModal',

  props: {
    mobileFullScreen: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    document.addEventListener('keydown', this.handleEscKey);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.handleEscKey);
  },

  methods: {
    handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation();
        this.close();
      }
    },

    close() {
      this.$emit('close');
    },
  },
});
</script>

<style lang="scss" scoped>
.app-modal__backdrop {
  @apply z-40 fixed inset-0 flex justify-center items-center;
  background-color: rgba(0, 0, 0, 0.3);
}

.app-modal {
  @apply flex flex-col shadow-lg bg-white fixed w-full max-w-sm overflow-x-auto rounded max-h-screen;

  &--mobile-fullscreen {
    @apply inset-0 max-w-full;
  }

  @screen md {
    @apply inset-auto w-full max-w-3xl;
  }
}

.app-modal__header,
.app-modal__footer {
  @apply py-3 px-5 flex;

  @screen md {
    @apply py-4;
  }

  @screen xl {
    @apply p-6;
  }
}

.app-modal__header {
  @apply border-b justify-between;
}

.app-modal__footer {
  @apply border-t justify-end;
}

.app-modal__body {
  @apply p-5 flex-1 overflow-y-auto;

  @screen xl {
    @apply p-6;
  }
}

.app-modal__close-button {
  @apply text-purple-900 cursor-pointer;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.35s ease;
}
</style>
