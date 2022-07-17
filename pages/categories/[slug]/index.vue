<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="flex items-center">
            <NuxtLink
              to="/"
              class="breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
            >
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span class="ml-[5px]">На главную</span>
            </NuxtLink>
            <div
              class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center"
            ></div>
            <NuxtLink
              :to="{
                path: `/categories`,
              }"
              class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            >
              <span>Все категории</span>
            </NuxtLink>
            <template v-if="parentCategory">
              <div
                class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center"
              ></div>
              <NuxtLink
                :to="{
                  path: `/categories/${parentCategory.slug}`,
                }"
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
              >
                <span>{{ parentCategory.title }}</span>
              </NuxtLink>
            </template>
          </div>
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold capitalize">
              {{ currentCategory.title }}
            </h1>
          </div>

          <div
            class="cards flex items-center gap-[20px]"
            v-if="
              currentCategory.items.data && currentCategory.items.data.length
            "
          >
            <NuxtLink
              v-for="category in currentCategory.items.data"
              :to="{
                path: `/categories/${category.attributes.slug}`,
              }"
              class="card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            >
              <div
                class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain"
                :style="`background-image: url('${categoryUrl(category)}')`"
              ></div>
              <div
                class="flex flex-grow card-text text-[21px] text-secondary capitalize"
              >
                {{ category.attributes.title }}
              </div>
            </NuxtLink>
          </div>
          <div
            v-if="
              isProductsVisible &&
              currentCategory.items.data &&
              currentCategory.items.data.length
            "
            class="section-divider w-full h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"
          ></div>
          <template v-if="isProductsVisible">
            <div class="flex justify-between items-start gap-[40px]">
              <aside class="catalog-filter min-w-[300px] flex flex-col">
                <ProductFilter
                  v-model="filterIsActive"
                  :brands="categoryBrands"
                  @apply="getFilteredProducts"
                  @clear="clearFilter()"
                />
              </aside>
              <!-- loading-cards -->
              <div
                class="catalog-list flex-grow flex flex-wrap gap-[25px]"
                v-if="loading"
              >
                <div
                  v-for="item in 4"
                  class="catalog-list-item font-medium text-[21px] bg-grey w-[calc(33.33%-16.7px)] h-[450px] shadow-card rounded-[4px] relative flex flex-col justify-start p-[30px] animate-pulse"
                ></div>
              </div>
              <!-- products-list -->
              <div
                v-else-if="dataProducts && dataProducts.length"
                class="catalog-list flex-grow flex flex-wrap gap-[25px]"
              >
                <div
                  v-for="(product, index) in dataProducts"
                  :key="index"
                  class="catalog-list-item font-medium text-[21px] h-[450px] shadow-card w-[calc(33.33%-16.7px)] hover:shadow-card-hover rounded-[4px] relative flex flex-col justify-start items-center p-[30px] transition-all"
                >
                  <NuxtLink
                    :to="`/products/${product.attributes.parent.data.attributes.slug}_${product.attributes.article}`"
                    class="flex item-image bg-center bg-no-repeat bg-cover w-[256px] h-[256px]"
                    :style="`background-image: url('${productUrl(product)}')`"
                  ></NuxtLink>
                  <div
                    class="item-content flex flex-1 flex-col justify-between text-center"
                  >
                    <div
                      class="flex flex-1 item-title font-medium justify-center items-center capitalize capitalize"
                    >
                      {{ product.attributes.title }}
                    </div>

                    <div class="flex gap-[5px]">
                      <div
                        class="flex-1 item-button border-[2px] border-primary rounded-[4px] flex justify-center items-center cursor-default select-none"
                      >
                        {{ product.attributes.price }} ₽
                      </div>
                      <button
                        class="item-button py-[4px] w-[70px] h-[40px] bg-primary text-white rounded-[4px] flex justify-center items-center active:scale-95 transition-all"
                        :class="{
                          'hover:bg-white border-[2px] border-primary hover:text-primary':
                            !productInCart(product),
                          'hover:bg-orange': productInCart(product),
                        }"
                        @click="cartHandler(product)"
                      >
                        <svg
                          v-if="productInCart(product)"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                        <svg
                          v-else
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
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="flex flex-1 flex-col justify-center items-center font-medium text-secondary"
              >
                <span class="text-[26px]">Пусто</span>
                <span class="text-[21px] mb-[25px]"
                  >По выбранным параметрам фильтра ничего не найдено</span
                >
                <div class="text-[21px] text-center">¯\_(ツ)_/¯</div>
              </div>
            </div>
          </template>

          <!-- related-categories -->
          <template
            v-if="isRelatedCategoriesVisible && relatedCategories.length"
          >
            <div class="my-[40px] flex items-center gap-[70px]">
              <h4 class="text-[36px] text-secondary font-bold">
                Сопутствующие категории
              </h4>
              <div
                class="section-divider flex-1 h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"
              ></div>
            </div>

            <div class="cards flex items-center gap-[20px]">
              <NuxtLink
                v-for="category in relatedCategories"
                :to="{
                  path: `/categories/${category.attributes.slug}`,
                }"
                class="card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
              >
                <div
                  class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain"
                  :style="`background-image: url('${categoryUrl(category)}')`"
                ></div>
                <div class="flex flex-grow card-text text-[21px] capitalize">
                  {{ category.attributes.title }}
                </div>
              </NuxtLink>
            </div>
          </template>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useCart } from "~/store/cart/cart";
import ProductFilter from "~/components/ProductFilter";

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const categorySlug = route.params.slug;
const dataProducts = ref([]);
const loading = ref(false);

const data = await GqlGetCategoryBySlug({ slug: categorySlug });

const categoryBrands = computed(() => data.brands.data);

const currentCategory = data?.categories?.data[0]?.attributes;

if (
  !currentCategory.value ||
  (currentCategory.value && !currentCategory.value.lenght)
) {
  // router.push("/404");
}

const isProductsVisible = computed(() => currentCategory.showProducts);
const isRelatedCategoriesVisible = computed(() => currentCategory.showRelated);

const relatedCategories = computed(() => currentCategory.related.data);

const parentCategory = computed(() => currentCategory.parent?.data?.attributes);

const getProducts = async (query) => {
  loading.value = true;
  const productsData = ref([]);
  const toSendData = {
    slug: currentCategory.slug,
  };

  if (query) {
    const brandsList = query.brandsList;
    const price = query.price;

    if (brandsList && brandsList.length) {
      toSendData.brands = brandsList;
    }

    if (price) {
      if (price.from) {
        toSendData.priceFrom = Number(price.from);
      }

      if (price.to) {
        toSendData.priceTo = Number(price.to);
      }
    }
  }
  // turn on filter
  if (Object.keys(toSendData).length > 1) {
    filterIsActive.value = true;
  }

  productsData.value = await GqlProductsBySubcategorySlug(toSendData);

  dataProducts.value = productsData.value.products.data;
  loading.value = false;
};

const filterIsActive = ref(false);

const clearFilter = async () => {
  await getProducts();
};

const getFilteredProducts = async () => {
  const query = {};
  const brands = route.query.brands;
  const from = route.query.from;
  const to = route.query.to;
  if (brands) {
    query.brandsList = brands.split(",").map((item) => Number(item));
  }

  if (from) {
    if (!query.price) {
      query.price = {};
    }
    query.price.from = from;
  }
  if (to) {
    if (!query.price) {
      query.price = {};
    }
    query.price.to = to;
  }

  await getProducts(query);
};

const preSearchQuery = ref({});
if (route.query.from) {
  if (!preSearchQuery.value.price) {
    preSearchQuery.value.price = {};
  }
  preSearchQuery.value.price.from = route.query.from;
}

if (route.query.to) {
  if (!preSearchQuery.value.price) {
    preSearchQuery.value.price = {};
  }
  preSearchQuery.value.price.to = route.query.to;
}

if (route.query.brands) {
  preSearchQuery.value.brandsList = route.query.brands.split(",");
}

await getProducts(preSearchQuery.value);

const categoryUrl = (category) => {
  const url = category.attributes?.image?.data?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const productUrl = (product) => {
  const url = product.attributes?.images?.data[0]?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const cart = useCart();

const cartItems = computed(() => {
  return cart.items;
});

const productInCart = (product) => {
  const foundItem = cartItems.value.find(
    (item) => item.article === product.attributes.article
  );

  return !!foundItem;
};

const cartHandler = (product) => {
  if (productInCart(product)) {
    cart.removeFromCart(product.attributes.article);
  } else {
    cart.addToCart({
      count: 1,
      color: product.attributes.color,
      article: product.attributes.article,
      amount: product.attributes.amount,
      size: product.attributes.size,
      title: product.attributes.title,
      price: product.attributes.price,
      imageUrl: product.attributes.images.data[0]?.attributes?.url,
      productCard: product.attributes.parent.data.attributes.slug,
    });
  }
};

useHead({
  title: `Прометей – ${data.categories.data[0].attributes.title}`,
});
</script>
