<template>
  <div class="flex justify-between items-center gap-[5px] h-[50px]">
    <button
      class="w-[54px] h-[54px] p-[12px] flex justify-center items-center text-grey-text transition-colors rounded-[4px] bg-grey-light"
      :class="{
        'cursor-pointer hover:text-white hover:bg-orange': !disabled,
      }"
      :disabled="disabled"
      @click="decreaseCounter()"
    >
      <svg
        class="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 12H4"
        ></path>
      </svg>
    </button>

    <input
      v-model="counter"
      class="h-[60px] w-[60px] text-center focus:border-primary focus:border-[2px] outline-none text-secondary border-grey-light border-[2px] rounded-[4px]"
      :disabled="disabled"
      @blur="nullOrEmptyHandler()"
    />
    <button
      class="w-[54px] h-[54px] p-[12px] flex justify-center items-center text-grey-text transition-colors rounded-[4px] bg-grey-light"
      :class="{
        'cursor-pointer hover:bg-primary hover:text-white': !increaseDisabled,
        'bg-grey-text text-grey-light': increaseDisabled,
      }"
      :disabled="increaseDisabled"
      @click="increaseCounter()"
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits();
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  max: {
    type: [Number, String],
    default: 1,
  },
});

const counter = ref(0);

counter.value = props.modelValue;

const changeCounterValue = (value) => {
  const newValue = Number(counter.value) + value;
  if (counter.value > 0 && newValue > 0) {
    counter.value = newValue;
  }
  emit("update:modelValue", counter.value);
};

const increaseCounter = () => {
  changeCounterValue(1);
};
const decreaseCounter = () => {
  changeCounterValue(-1);
};

const increaseDisabled = computed(() => counter.value + 1 > props.max);

const setCounterValue = (value) => {
  counter.value = value;
  emit("update:modelValue", counter.value);
};

const nullOrEmptyHandler = () => {
  typeHandler();

  if (counter.value === null || counter.value === "" || counter.value == 0) {
    setCounterValue(1);
  } else if (counter.value > props.max) {
    setCounterValue(props.max);
  }
};

const typeHandler = () => {
  const newValue = counter.value.toString().replace(/[^0-9]/g, "");
  setCounterValue(Number(newValue));
};
</script>

<style lang="scss" scoped></style>
