<script setup>
import TabsWrapper from "../UI/TabsWrapper.vue";
import Tab from "../UI/Tab.vue";

const { data, error } = await useAsyncData(`catalog-menu`, () =>
  GqlCatalogMenu()
);

const menu = data;

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const isExpandMenuOpen = computed(() => {
  return props.show;
});
</script>

<template>
  <transition name="ease-out-overlay">
    <div
      v-if="isExpandMenuOpen"
      class="expand-menu"
      :class="{ hidden: !isExpandMenuOpen }"
    >
      <div class="max-w-screen-xl w-full mx-auto flex items-center">
        <TabsWrapper column v-if="menu && menu.sections">
          <Tab
            v-for="section in menu.sections.data"
            :settings="section"
            :hello="true"
          >
            <ExpandMenuContentItem
              :title="section.attributes.title"
              :content="section.attributes"
            />
          </Tab>
        </TabsWrapper>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss" scoped>
.expand-menu {
  @apply absolute top-[80px] left-0 right-0 w-full bottom-0 h-screen bg-white z-50 overflow-auto;
}

.ease-out-overlay-enter-active,
.ease-out-overlay-leave-active {
  @apply opacity-100 duration-300;
}

.ease-out-overlay-enter,
.ease-out-overlay-leave-to {
  @apply opacity-0 duration-300;
}
</style>
