<script setup>
import BrandsSelect from "~/components/BrandsSelect.vue";
import PriceSelect from "~/components/PriceSelect.vue";

const route = useRoute();
const router = useRouter();

const props = defineProps({
  modelValue: Boolean,
  brands: Array,
  price: Object,
});

const emit = defineEmits(["apply", "clear", "update:modelValue"]);

const brandsList = computed(() => props.brands);

const activeBrandsList = ref([]);

let activeBrands = computed({
  get() {
    return activeBrandsList.value;
  },
  set(newValue) {
    activeBrandsList.value = [...newValue].sort();
  },
});

const priceRange = ref({
  from: null,
  to: null,
});

const currentBrandsFilter = computed(() => route.query?.brands?.split(","));
const currentPriceFilter = computed(() => {
  let query = null;
  if (route.query?.from) {
    if (!query) {
      query = {};
    }
    query.from = route.query.from;
  }

  if (route.query?.to) {
    if (!query) {
      query = {};
    }
    query.to = route.query.to;
  }

  return query;
});

if (currentBrandsFilter.value) {
  activeBrands.value = currentBrandsFilter.value;
}

if (currentPriceFilter.value) {
  if (currentPriceFilter.value.from) {
    priceRange.value.from = currentPriceFilter.value.from;
  }

  if (currentPriceFilter.value.to) {
    priceRange.value.to = currentPriceFilter.value.to;
  }
}

const brandsHandler = (type, brand) => {
  if (type === "add") {
    activeBrands.value = [...activeBrands.value, brand.id];
  }
  if (type === "remove") {
    activeBrands.value = activeBrands.value.filter((item) => item !== brand.id);
  }
};

// отфильтровано или нет (влияет на то, будет ли сброс)
// пустой ли список выбранных брендов
// пустые ли цены
// отличаются ли текущий список брендов от брендов в фильтре
// отличаются ли текущие цены от цен в фильтре

// Заблокированная "применить":
// Ничего не выбрано и поиск неактивен

// !isActive && allIsEmpty

// –––––––––––––––––––––––––––––––––––––––––––––

// Активная "применить":
// 1 – поиск неактивен и что-то выбрано
// 2 – поиск активен и выбрано что-то новое

// 1 – !isActive && isNotSame
// 2 – isActive && !allIsEmpty

// –––––––––––––––––––––––––––––––––––––––––––––

// Активная "отменить":
// Поиск активен и совпадают значения текущего фильтра и примененного

// isActive && isSame

// –––––––––––––––––––––––––––––––––––––––––––––

// helpers:
let filterIsActive = computed(() => props.modelValue);

const usedBrands = computed(
  () => (route.query.brands && route.query.brands.split(",")) || []
);
const usedPriceFrom = computed(() => route.query.from || null);
const usedPriceTo = computed(() => route.query.to || null);
// brands
const brandsSame = computed(
  () => JSON.stringify(usedBrands.value) === JSON.stringify(activeBrands.value)
);
const brandsIsEmpty = computed(() =>
  activeBrands.value && activeBrands.value.length ? false : true
);
// price
const priceIsSame = computed(() => {
  if (
    priceRange.value.from === usedPriceFrom.value &&
    priceRange.value.to === usedPriceTo.value
  ) {
    return true;
  }
  return false;
});
const priceIsEmpty = computed(
  () =>
    (!priceRange.value.from || priceRange.value.from === "") &&
    (!priceRange.value.to || priceRange.value.to === "")
);

// button
const applyDisabled = computed(
  () => !filterIsActive.value && priceIsEmpty.value && brandsIsEmpty.value
);

const applyDisplay = computed(
  () =>
    (!filterIsActive.value && (priceIsSame.value || brandsSame.value)) ||
    (!filterIsActive.value && (!priceIsSame.value || !brandsSame.value)) ||
    (filterIsActive.value && (!priceIsSame.value || !brandsSame.value))
);

const cancelDisplay = computed(
  () => filterIsActive.value && priceIsSame.value && brandsSame.value
);

const filterHandler = () => {
  if (filterIsActive.value && brandsSame.value && priceIsSame.value) {
    activeBrands.value = [];
    priceRange.value.from = null;
    priceRange.value.to = null;
    emit("update:modelValue", false);
    // filterIsActive = false;
    router.push({ query: null });
    emit("clear");
  } else {
    const query = {};

    if (activeBrands.value && activeBrands.value.length) {
      query.brands = activeBrands.value.sort().join(",");
    }

    if (priceRange.value.from) {
      query.from = priceRange.value.from;
    }

    if (priceRange.value.to) {
      query.to = priceRange.value.to;
    }

    router.replace({
      query,
    });

    setTimeout(() => {
      emit("apply");
    }, 0);
    emit("update:modelValue", true);
    // filterIsActive = true;
  }
};
</script>

<template>
  <div class="filter-block flex flex-col items-center">
    <BrandsSelect
      :list="brandsList"
      v-model="activeBrands"
      @removeBrand="(value) => brandsHandler('remove', value)"
      @addBrand="(value) => brandsHandler('add', value)"
    />
    <PriceSelect v-model="priceRange" />
  </div>

  <!-- <div>
    <pre>
      filterIsActive: {{ filterIsActive }}
      applyDisabled: {{ applyDisabled }}
      usedBrands: {{ usedBrands }}
      activeBrands: {{ activeBrands }}
      brandsSame: {{ brandsSame }}
      brandsIsEmpty: {{ brandsIsEmpty }}
      priceIsSame: {{ priceIsSame }}
      priceIsEmpty: {{ priceIsEmpty }}
    </pre>
  </div> -->

  <button
    class="bg-primary text-white text-[21px] py-[10px] w-full rounded-[4px] mt-[20px] mx-auto flex justify-center items-center transition-all"
    :class="{
      'bg-orange bg-opacity-70': cancelDisplay,
      'disabled bg-opacity-70': applyDisabled,
    }"
    :disabled="applyDisabled"
    @click="filterHandler()"
  >
    <span v-if="cancelDisplay" class="flex justify-center items-center">
      <span class="mr-[5px]">Сбросить фильтр</span>

      <svg
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
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </span>

    <span v-if="applyDisplay" class="flex justify-center items-center">
      <span class="mr-[5px]">Применить фильтр</span>
    </span>
  </button>
</template>
