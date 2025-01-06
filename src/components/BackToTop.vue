<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackToTop',
  data() {
    return {
      isShow: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        this.isShow = true
      }
      else {
        this.isShow = false
      }
    })
  },
  methods: {
    handleClick: () => {
      window.scrollTo(0, 0)
    },
  },
})
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="isShow" class="back-to-top" @click="handleClick" />
  </Transition>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-1000px);
}
</style>
