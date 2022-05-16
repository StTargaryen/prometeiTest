<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: Array,
  list: Array,
});

const emit = defineEmits(["update:modelValue"]);

// $emit("update:modelValue");
</script>

<template>
  <div class="filter-block mb-[20px]">
    <div
      class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
    >
      Бренд
    </div>
    <ul class="filter-block-content py-[10px] mx-[30px]">
      <li
        class="px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer"
        v-for="brand in list"
        :key="brand.id"
      >
        <span class="flex-grow">{{ brand.title }}</span>
        <span
          ><svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path></svg
        ></span>
      </li>
    </ul>
  </div>
</template>
