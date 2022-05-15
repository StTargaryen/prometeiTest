<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="page-header flex items-center">
            <div class="inline-flex">
              <NuxtLink
                to="/"
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              >
                <svg
                  class="w-6 h-6 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span>На главную</span>
              </NuxtLink>
              <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
                /
              </code>
              <NuxtLink
                to="/catalog"
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              >
                <span>Все категории</span>
              </NuxtLink>

              <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
                /
              </code>

              <NuxtLink
                :to="{
                  path: `/catalog/${section.slug}`,
                }"
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              >
                <span>{{ section.title }}</span>
              </NuxtLink>
              <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
                /
              </code>
              <NuxtLink
                :to="{
                  path: `/categories/${category.slug}`,
                }"
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              >
                <span>{{ category.title }}</span>
              </NuxtLink>
            </div>
          </div>
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              {{ subcategory.attributes.title }}
            </h1>
          </div>
          <button @click="getProducts()">fetchData</button>

          <div class="flex justify-between items-start gap-[40px]">
            <aside class="catalog-filter min-w-[300px] flex flex-col">
              <div class="filter-block mb-[20px]">
                <div
                  class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
                >
                  Бренд
                </div>
                <ul class="filter-block-content py-[10px] mx-[30px]">
                  <li
                    class="px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer"
                  >
                    <span class="flex-grow">Demix</span>
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
              v-if="loading"
              class="catalog-list flex-grow flex flex-wrap gap-[25px]"
            >
              <div
                v-for="item in 3"
                class="catalog-list-item font-medium text-[21px] bg-[#00000007] w-[calc(33.33%-16.7px)] h-[450px] shadow-card rounded-[4px] relative flex flex-col justify-start p-[30px] animate-pulse"
              ></div>
            </div>
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
                  :style="`background-image: url('${imageUrl(product)}')`"
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
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useCart } from "~~/store/cart/cart";

const route = useRoute();

const subcategorySlug = route.params.slug;

const loading = ref(false);
const dataProducts = ref([]);

const { data, error } = await useAsyncData(
  `subcategory-by-slug-${subcategorySlug}`,
  () => GqlSubcategoryDataBySlug({ slug: subcategorySlug })
);

const subcategory = data.value.subcategories.data[0];
const category = subcategory.attributes.parent.data.attributes;
const section = category.parent.data.attributes;

const getProducts = async () => {
  loading.value = true;
  const productsData = await GqlProductsBySubcategorySlug({
    slug: subcategory.attributes.slug,
  });
  dataProducts.value = productsData.products.data;
  loading.value = false;
};

await getProducts();

useHead({
  title: `Prometei – ${subcategory.attributes.title}`,
});

const config = useRuntimeConfig();
const imageUrl = (product) => {
  const url = product?.attributes?.images?.data[0]?.attributes?.url;
  if (url) {
    return `${config.API_URL}${url}`;
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
  console.log(product);
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
