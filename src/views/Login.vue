<template>
  <div class="flex flex-col justify-center items-center w-full">
    <form>
      <input type="email" name="email" class="block" />
      <input type="password" name="password" class="block" />

      <button>Log-in</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
});
</script>
