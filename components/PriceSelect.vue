<script setup>
const props = defineProps({
  modelValue: Object,
});
</script>

<template>
  <div class="w-full">
    <div
      class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
    >
      Цена, руб.
    </div>
    <div class="filter-block-content py-[10px] mx-[30px]">
      <div class="mt-[20px] flex justify-between items-center w-full">
        <input
          class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"
          v-model="modelValue.from"
          type="text"
          placeholder="799"
        />
        <span class="w-[20px] h-[2px] bg-grey-light"></span>
        <input
          class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"
          v-model="modelValue.to"
          type="text"
          placeholder="13000"
        />
      </div>
    </div>
  </div>
</template>
