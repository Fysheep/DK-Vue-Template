<script lang="ts">
import { RouterView } from 'vue-router'

import { go, go_outwards } from './scripts/routing';

export default {
  components: {
    RouterView
  },
  setup() {
    return {
      go, go_outwards
    }
  }
}
</script>

<template>
  <div class="dp-flex gap-2 p-5">
    <span @click="go('/')" clickable shadow> ROUTE </span>
    <span @click="go_outwards('https://github.com/Fysheep')" clickable underlined shadow> NEW TAB </span>
  </div>
  <RouterView />
</template>
