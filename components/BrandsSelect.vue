<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits();
const props = defineProps({
  modelValue: Array,
  list: Array,
});

const isActive = (brand) => {
  const foundBrand = props.modelValue.find((item) => item === brand.id);

  return !!foundBrand;
};

const brandHandler = (brand) => {
  if (isActive(brand)) {
    emit("removeBrand", brand);
  } else {
    emit("addBrand", brand);
  }
};
</script>

<template>
  <div class="filter-block mb-[20px] w-full">
    <div
      class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
    >
      Бренды
    </div>
    <ul class="filter-block-content py-[10px] mx-[30px]">
      <li
        class="px-[18px] py-[10px] my-[5px] border-2 text-[16px] rounded-[4px] flex justify-center items-center cursor-pointer transition-all"
        :class="{
          'text-primary border-primary bg-white active:border-orange active:border-opacity-70 active:text-orange': isActive(brand),
          'border-white bg-white text-secondary hover:bg-grey-light active:scale-95 active:bg-primary active:bg-opacity-20': !isActive(brand),
        }"
        @click="brandHandler(brand)"
        v-for="brand in list"
        :key="brand.id"
      >
        <span class="flex-grow">{{ brand.attributes.title }}</span>
        <span v-if="isActive(brand)"
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
