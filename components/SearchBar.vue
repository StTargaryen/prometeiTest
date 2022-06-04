<script setup>
const router = useRouter();
const searchString = ref(null);

const productsList = ref([]);

const categoriesList = ref([]);

const expandResults = ref(false);

const hasResults = computed(
  () => !!productsList.value.length || !!categoriesList.value.length
);

const toggleExpand = (value) => {
  setTimeout(() => {
    expandResults.value = value;
  }, 200);
};

const loading = ref(false);
const debounceTimeout = ref(null);

const searchByEntities = async () => {
  if (searchString.value.length <= 0) {
    return false;
  }

  loading.value = true;
  const response = await GqlSearchEntitiesByTitle({
    value: searchString.value.toLowerCase(),
  });

  console.log(response);

  categoriesList.value = [];
  productsList.value = [];

  if (response.categories?.data) {
    response.categories?.data.forEach((category) => {
      const categoryItem = {
        title: category.attributes.title,
        slug: category.attributes.slug,
      };
      categoriesList.value.push(categoryItem);
    });
  }
  if (response.products?.data) {
    response.products?.data.forEach((product) => {
      const productItem = {
        title: product.attributes.title,
        article: product.attributes.article,
        cardSlug: product.attributes.parent.data.attributes.slug,
      };
      productsList.value.push(productItem);
    });
  }

  toggleExpand(true);
  loading.value = false;
};

const debounceSearch = () => {
  clearTimeout(debounceTimeout.value);
  debounceTimeout.value = setTimeout(searchByEntities, 300);
};

const mainSearch = async () => {
  if (!searchString.value || searchString.value === "") {
    return false;
  }

  const result = await GqlMainSearch({
    value: searchString.value.toString().toLowerCase(),
  });
  const foundProducts = result?.products?.data;
  const foundCategories = result?.categories?.data;
  result.products.data[0];
  if (foundProducts && foundProducts[0]) {
    const foundProduct = foundProducts[0]?.attributes;
    const article = foundProduct?.article;
    const parentSlug = foundProduct?.parent?.data?.attributes?.slug;
    if (article && parentSlug) {
      router.push(`/products/${parentSlug}_${article}`);
    }
  } else if (foundCategories && foundCategories[0]) {
    const foundCategory = foundCategories[0]?.attributes;
    const categorySlug = foundCategory.slug;
    if (categorySlug) {
      router.push(`/categories/${categorySlug}`);
    }
  } else {
    router.push(`/404`);
  }
};
</script>

<template>
  <div class="h-[50px] w-[500px] flex justify-between items-center">
    <span
      class="h-[50px] relative flex-1 border-y-[2px] border-l-[2px] rounded-tl-[4px] border-primary flex justify-center items-center transition-all duration-300"
      :class="{
        'rounded-bl-[4px]': !expandResults || !hasResults,
        'border-b-grey-text': expandResults && hasResults,
      }"
    >
      <input
        v-model="searchString"
        type="text"
        class="w-[360px] outline-none placeholder:text-grey-text"
        @input="debounceSearch"
        placeholder="Поиск товаров"
        @focusin="toggleExpand(true)"
        @focusout="toggleExpand(false)"
        @keyup.enter="mainSearch()"
      />
      <transition name="fade">
        <div
          v-if="expandResults && hasResults"
          class="absolute top-[100%] right-[-2px] left-[-2px] z-[99] bg-white border-primary border-x-[2px] border-b-[2px] rounded-b-[4px] flex flex-col gap-[10px] py-[10px] transition-all duration-300"
        >
          <span
            class="h-[2px] bg-grey-light flex rounded-full mx-[20px]"
          ></span>

          <div class="result-list px-[10px]" v-if="productsList.length">
            <span
              class="text-grey-text text-[14px] font-thin pointer-events-none select-none"
              >Товары</span
            >
            <transition-group name="fade">
              <NuxtLink
                class="result-item px-[10px] py-[5px] hover:bg-grey-light cursor-pointer rounded-[4px] flex items-center justify-between"
                v-for="item in productsList"
                :to="`/products/${item.cardSlug}_${item.article}`"
              >
                <span class="text-secondary capitalize">{{ item.title }}</span>
              </NuxtLink>
            </transition-group>
          </div>
          <div class="result-list px-[10px]" v-if="categoriesList.length">
            <span
              class="text-grey-text text-[14px] font-thin pointer-events-none select-none"
              >Категории</span
            >
            <transition-group name="fade">
              <NuxtLink
                class="result-item px-[10px] py-[5px] hover:bg-grey-light cursor-pointer rounded-[4px] flex items-center justify-between"
                v-for="item in categoriesList"
                :to="`/categories/${item.slug}`"
              >
                <span class="text-secondary capitalize">{{ item.title }}</span>
              </NuxtLink>
            </transition-group>
          </div>
        </div>
      </transition>
    </span>
    <button
      class="h-[50px] px-[27px] rounded-r-[4px] flex justify-center items-center text-white bg-primary outline-none"
      @click="mainSearch()"
    >
      Найти
    </button>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
