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
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              >
                <span>{{ parentCategory.title }}</span>
              </NuxtLink>
            </template>
          </div>
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
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
              <div class="flex flex-grow card-text text-[21px]">
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
                <div class="filter-block mb-[20px]">
                  <div
                    class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
                  >
                    Бренд
                  </div>
                  <!-- <ul class="filter-block-content py-[10px] mx-[30px]">
                  <li
                    class="px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer"
                    v-for="brand in brands"
                  >
                    <span class="flex-grow">{{ brand.attributes.title }}</span>
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
                </ul> -->
                </div>
                <div class="filter-block">
                  <div
                    class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
                  >
                    Цена, руб.
                  </div>
                  <div class="filter-block-content py-[10px] mx-[30px]">
                    <div
                      class="mt-[20px] flex justify-between items-center w-full"
                    >
                      <input
                        class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"
                        type="text"
                        placeholder="799"
                      />
                      <span class="w-[20px] h-[2px] bg-grey-light"></span>
                      <input
                        class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"
                        type="text"
                        placeholder="13000"
                      />
                    </div>
                  </div>
                </div>
              </aside>
              <!-- loading-cards -->
              <div
                class="catalog-list flex-grow flex flex-wrap gap-[25px]"
                v-if="loading"
              >
                <div
                  v-for="item in 3"
                  class="catalog-list-item font-medium text-[21px] bg-[#00000007] w-[calc(33.33%-16.7px)] h-[450px] shadow-card rounded-[4px] relative flex flex-col justify-start p-[30px] animate-pulse"
                ></div>
              </div>
              <!-- products-list -->
              <div
                v-else
                class="catalog-list flex-grow flex flex-wrap gap-[25px]"
              >
                <div
                  v-for="(product, index) in dataProducts"
                  :key="index"
                  class="catalog-list-item font-medium text-[21px] h-[450px] shadow-card w-[calc(33.33%-16.7px)] hover:shadow-card-hover rounded-[4px] relative flex flex-col justify-start items-center p-[30px] transition-shadow"
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
                      class="flex flex-1 item-title font-medium justify-center items-center"
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
                        class="item-button py-[4px] w-[70px] h-[40px] bg-primary text-white rounded-[4px] flex justify-center items-center"
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
                <div class="flex flex-grow card-text text-[21px]">
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
import { useCart } from "~~/store/cart/cart";

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const categorySlug = route.params.slug;
const dataProducts = ref([]);
const loading = ref(false);

const data = await GqlGetCategoryBySlug({ slug: categorySlug });

const currentCategory = data?.testCategories?.data[0]?.attributes;

if (
  !currentCategory.value ||
  (currentCategory.value && !currentCategory.value.lenght)
) {
  // router.push("/404");
}

const isProductsVisible = computed(() => currentCategory.showProducts);
const isRelatedCategoriesVisible = computed(
  () => currentCategory.showRelatedCategories
);

const relatedCategories = computed(
  () => currentCategory.relatedCategories.data
);

const parentCategory = computed(() => currentCategory.parent?.data?.attributes);

const getProducts = async () => {
  loading.value = true;
  const productsData = await GqlProductsBySubcategorySlug({
    slug: currentCategory.slug,
  });
  console.log(productsData);
  dataProducts.value = productsData.products.data;
  loading.value = false;
};

await getProducts();

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
      productCard: product.attributes.parent.slug,
    });
  }
};
</script>
