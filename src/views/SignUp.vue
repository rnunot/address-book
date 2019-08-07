<template>
  <login-layout>
    <form class="w-full max-w-sm">
      <div class="mb-6">
        <label class="login__label" for="username">
          Username
        </label>
        <input id="username" type="text" class="login__input" />
      </div>
      <div class="mb-6">
        <label class="login__label" for="password">
          Password
        </label>
        <input id="password" type="password" class="login__input" />
      </div>
      <button
        class="login__button"
        type="button"
      >
        Sign Up
      </button>
      <div class="mt-6 text-gray-700">
        Already have an account?
        <router-link
          class="text-purple-900 hover:text-purple-800 hover:text-underline"
          to="/login"
        >
          Log in here
        </router-link>
      </div>
    </form>
  </login-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginLayout from '@/components/layouts/LoginLayout.vue';

export default Vue.extend({
  name: 'SignUp',

  components: { LoginLayout },
});
</script>

<style lang="scss" scoped></style>
