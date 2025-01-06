<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EasyButton',
})
</script>

<template>
  <button class="easy-button" type="button">
    <slot />
  </button>
</template>
