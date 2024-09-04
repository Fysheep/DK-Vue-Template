<script lang="ts">
import AppButton from '@/components/AppButton.vue';
import { ThemeStore } from '@/stores/theme';

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      themes: ThemeStore()
    }
  },
}
</script>

<template>
  <main class="dp-flex fd-c gap-3">
    <div>
      <AppButton @click="themes.cycle()">Change Theme</AppButton>
    </div>
  </main>
</template>
