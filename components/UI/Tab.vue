<template>
  <div class="flex">
    <transition name="slide-up">
      <div class="left top absolute" v-show="selectedTabID == settings.id">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    settings: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const selectedTabID = inject("selectedTabID");

    return {
      selectedTabID,
    };
  },
};
</script>

<style scoped lang="postcss">
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.1s ease-in-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
