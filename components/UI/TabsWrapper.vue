<template>
  <div class="tabs" :class="{ flex: isColumn }">
    <ul
      class="tabs__header"
      :class="{
        'flex-col  min-w-[350px]': isColumn,
      }"
    >
      <li v-for="tab in tabs" :key="tab.id" class="tabs__header-item">
        <button
          class="tabs__header-item__button"
          :class="{
            active: tab.id == selectedTabID,
          }"
          @click="selectedTabID = tab.id"
        >
          <div
            v-if="tab.attributes.navIcon"
            class="icon mr-[20px] w-full max-w-[22px] h-[22px] bg-center bg-contain bg-no-repeat"
            :style="{
              backgroundImage: `url(${tabIcon(tab.attributes.navIcon)})`,
            }"
          ></div>
          <div class="text text-left grow mr-[10px] capitalize">
            {{ tab.attributes.title }}
          </div>

          <svg
            class="arrow w-4 h-4 text-grey-text"
            :class="{ 'text-orange': tab.id == selectedTabID }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
    <div class="tabs-content">
      <div
        class="divider mr-[60px] bg-grey-light w-[2px] rounded shadow-divider h-full min-h-screen"
      ></div>
      <slot />
    </div>
  </div>
</template>

<script>
import { provide, ref } from "vue";

export default {
  props: {
    column: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const config = useRuntimeConfig();
    const isColumn = ref(props.column);

    const tabSmall = ref(false);
    const toggleSize = (value) => {
      tabSmall.value = value;
    };

    const tabs = ref(
      slots.default()[0].children.map((tab) => tab.props.settings)
    );

    const selectedTabID = ref(tabs.value[0].id);
    provide("selectedTabID", selectedTabID);

    const tabIcon = (icon) => {
      if (!icon || (icon && !icon.data)) {
        return "none";
      }
      const url = icon.data.attributes.url;
      if (!url) {
        return "none";
      }
      return `${config.API_URL}${url}`;
    };

    return { selectedTabID, tabs, tabIcon, isColumn, tabSmall, toggleSize };
  },
};
</script>

<style scoped lang="postcss">
.tabs {
  @apply w-full justify-start items-start gap-[60px];
}
.tabs__header {
  @apply list-none p-0 flex mt-[60px];
}

.tabs__header-item__button {
  @apply flex items-center w-full text-[21px] p-[10px] mx-[-10px] hover:bg-grey-light rounded-[4px] text-secondary transition-all duration-200 ease-out;
}

.tabs__header-item__button.active {
  @apply text-orange hover:bg-opacity-0 pointer-events-none select-none;
}
.tabs__header-item__button:not(.active):active {
  @apply scale-95;
}

.tabs-content {
  @apply flex items-start;
}
</style>
