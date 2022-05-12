<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="page-header flex items-center">
            <div class="inline-flex">
              <NuxtLink
                to="/"
                class="breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:text-orange"
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
                v-if="section"
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
                v-if="category"
                :to="{
                  path: `/categories/${category.slug}`,
                }"
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              >
                <span>{{ category.title }}</span>
              </NuxtLink>

              <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
                /
              </code>

              <NuxtLink
                v-if="category && subcategory"
                :to="{
                  path: `/categories/${category.slug}/${subcategory.slug}`,
                }"
                class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              >
                <span>{{ subcategory.title }}</span>
              </NuxtLink>

              <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
                /
              </code>
            </div>
          </div>

          <div class="product flex items-start gap-[190px]">
            <div class="product-card flex-grow">
              <div class="product-title text-[36px] font-bold text-secondary">
                {{ productTitle }}
              </div>
              <div class="product-content flex items-start justify-between">
                <div class="product-info">
                  <div class="product-article text-grey-text mb-[40px]">
                    Код продукта: {{ productArticle }}
                  </div>
                  <ul
                    class="product-specifics flex flex-col text-left justify-start items-start gap-[15px]"
                  >
                    <li
                      v-for="tag in productTags"
                      class="product-specific px-[13px] py-[10px] border-[2px] rounded-[4px] border-primary text-primary"
                    >
                      {{ tag.attributes.name }}
                    </li>
                  </ul>
                </div>
                <div class="product-image">
                  <ImageViewer v-model="productImages" />
                </div>
              </div>
            </div>
            <aside class="product-action w-1/5">
              <div class="flex flex-col">
                <span class="text-[36px] font-bold text-secondary"
                  >{{ productPrice }} руб.</span
                >

                <div
                  v-if="productCardColors && productCardColors.length"
                  class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                ></div>
                <div class="flex flex-col">
                  <span class="text-[21px] text-secondary mb-[10px]"
                    >Выберите цвет</span
                  >
                  <div class="grid grid-cols-2 gap-[10px]">
                    <button
                      v-for="color in productCardColors"
                      :class="{
                        'opacity-50 disabled': disabledColor(color),
                        'hover:bg-primary active:bg-opacity-40 active:border-primary active:border-opacity-0':
                          !disabledColor(color),
                        'bg-primary text-white border-opacity-90 active:bg-opacity-100':
                          colorIsActive(color.value),
                        'bg-grey-light': !colorIsActive(color.value),
                        'hover:bg-opacity-20':
                          !disabledColor(color) && !colorIsActive(color.value),
                      }"
                      @click="colorHandler(color)"
                      class="w-[120px] h-[80px] rounded-[4px] flex flex-col justify-center items-center transition-colors"
                    >
                      <span
                        class="w-[36px] h-[36px] rounded-[4px] shadow-product-color"
                        :style="{
                          backgroundColor: `${color.value}`,
                        }"
                      ></span>
                      <span>{{ color.title }}</span>
                    </button>
                  </div>
                </div>
                <div
                  v-if="productCardSizes && productCardSizes.length"
                  class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                ></div>
                <div class="flex flex-col">
                  <span class="text-[21px] text-secondary mb-[10px]"
                    >Выберите размер</span
                  >
                  <div class="grid grid-cols-2 gap-[10px]">
                    <button
                      v-for="size in productCardSizes"
                      :class="{
                        'bg-primary text-white border-opacity-90 cursor-default active:bg-opacity-100':
                          sizeIsActive(size.value),
                        'bg-grey-light': !sizeIsActive(size.value),
                        'opacity-50 disabled': disabledSize(size),
                        'hover:bg-primary active:bg-opacity-40':
                          !disabledSize(size),
                        'hover:bg-opacity-20':
                          !disabledSize(size) && !sizeIsActive(size.value),
                      }"
                      @click="sizeHandler(size)"
                      class="w-[120px] h-[40px] rounded-[4px] flex flex-col justify-center items-center transition-colors"
                    >
                      {{ size.value }}
                    </button>
                  </div>
                </div>
                <div
                  class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                ></div>

                <button
                  v-if="!productInCart"
                  class="bg-primary h-[70px] text-[21px] font-medium text-white rounded-[4px] transition-all flex justify-center items-center"
                  :class="{
                    'bg-grey-text cursor-not-allowed': isCartHandlerDisabled,
                  }"
                  :disabled="isCartHandlerDisabled"
                  @click="cartHandler()"
                >
                  Добавить в корзину
                </button>
                <div
                  v-else
                  class="h-[70px] text-[18px] flex items-center justify-between"
                >
                  <button
                    class="h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:text-white hover:bg-orange"
                    @click="selectCounter(-1)"
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
                  <NuxtLink to="/cart">уже корзине ( {{ productCounter }} )</NuxtLink>
                  <button
                    class="h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:bg-primary hover:text-white"
                    :class="{
                      'cursor-not-allowed bg-grey-text hover:bg-grey-text text-grey-light':
                        !increaseAlowed,
                    }"
                    :disabled="!increaseAlowed"
                    @click="selectCounter(1)"
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div v-if="isCartHandlerDisabled" class="text-center">Товара нет в наличии</div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import ImageViewer from "~/components/UI/ImageViewer.vue";
import { useCart } from "~/store/cart/cart";

const router = useRouter();
const route = useRoute();

const productParams = route.params.params;

const [productCardSlug, article] = productParams.split("_");

const { data, error } = await useAsyncData(
  `product-card-data-by-slug-${productCardSlug}`,
  () => GqlProductCardDataBySlug({ slug: productCardSlug })
);

const productCard = computed(() => data?.value?.productCards?.data[0]);

if (!productCard.value) {
  router.push("/404");
}

const category = computed(
  () => productCard.value.attributes.category.data.attributes
);
const subcategory = computed(
  () => productCard.value.attributes.subcategory.data.attributes
);
const section = computed(
  () => productCard.value.attributes.section.data.attributes
);

const productData = await GqlProductByArticle({ article: article });

if (!productData.products.data.length) {
  router.push("/404");
}

const currentProduct = computed(() => productData.products.data[0]);

const productTitle = computed(
  () =>
    currentProduct.value.attributes.title ||
    productCard.value.attributes.title ||
    ""
);

const productPrice = computed(() => currentProduct.value.attributes.price || 0);

const productImages = computed(
  () => currentProduct.value.attributes.images.data || []
);

const productArticle = computed(
  () => currentProduct.value.attributes.article || "–"
);

const productTags = computed(() => []);

const productAmount = computed(() => currentProduct.value.attributes.amount);

const productCardProducts = computed(
  () => productCard.value.attributes.items.data
);

// colors
const productCardColors = computed(() =>
  unique(productCardProducts.value, "color")
);

const productColor = computed(() => currentProduct.value.attributes.color);

const colorIsActive = (value) => {
  return productColor.value.value === value;
};

const disabledColor = (color) => {
  const foundProduct = productCardProducts.value.find((product) => {
    if (
      product.attributes.color.value === color.value &&
      productSize.value.value === product.attributes.size.value
    ) {
      return true;
    }
  });
  if (foundProduct) {
    return false;
  }
  return true;
};

const colorHandler = (color) => {
  const totalMatch = productCardProducts.value.find((product) => {
    if (
      product.attributes.color.value === color.value &&
      productSize.value.value === product.attributes.size.value
    ) {
      return true;
    }
  });
  if (totalMatch) {
    router.push(`${productCardSlug}_${totalMatch.attributes.article}`);
  } else {
    const secondMatch = productCardProducts.value.find((product) => {
      if (product.attributes.color.value === color.value) {
        return true;
      }
    });
    if (secondMatch) {
      router.push(`${productCardSlug}_${secondMatch.attributes.article}`);
    }
  }
};

// sizes
const productCardSizes = computed(() =>
  unique(productCardProducts.value, "size")
);

const productSize = computed(() => currentProduct.value.attributes.size);

const sizeIsActive = (value) => {
  return productSize.value.value === value;
};

const disabledSize = (size) => {
  const foundProduct = productCardProducts.value.find((product) => {
    if (
      product.attributes.size.value === size.value &&
      productColor.value.value === product.attributes.color.value
    ) {
      return true;
    }
  });
  if (foundProduct) {
    return false;
  }
  return true;
};

const sizeHandler = (size) => {
  const totalMatch = productCardProducts.value.find((product) => {
    if (
      product.attributes.size.value === size.value &&
      productColor.value.value === product.attributes.color.value
    ) {
      return true;
    }
  });
  if (totalMatch) {
    router.push(`${productCardSlug}_${totalMatch.attributes.article}`);
  } else {
    const secondMatch = productCardProducts.value.find((product) => {
      if (product.attributes.size.value === size.value) {
        return true;
      }
    });
    if (secondMatch) {
      router.push(`${productCardSlug}_${secondMatch.attributes.article}`);
    }
  }
};

// amount and work with cart

const isCartHandlerDisabled = computed(
  () => currentProduct.value.attributes.amount <= 0
);

const cart = useCart();

const cartItem = computed(() =>
  cart.items.find(
    (item) => item.article === currentProduct.value.attributes.article
  )
);

const productCounter = computed(() => cartItem?.value?.count || 1);

const productInCart = computed(() => {
  return !!cartItem.value;
});

const increaseAlowed = computed(() => {
  const sum = productCounter.value + 1;
  return !(sum > productAmount.value);
});

const addToCart = () => {
  cart.addToCart({
    count: Number(productCounter.value),
    amount: productAmount.value,
    color: productColor.value,
    article: productArticle.value,
    size: productSize.value,
    title: productTitle.value,
    price: productPrice.value,
    productCard: productCard.value.attributes.slug,
    imageUrl: productImages.value[0]?.attributes?.url,
  });
};

const updateCartStateItem = (value) => {
  cart.updateCartItem({
    count: Number(value),
    amount: productAmount.value,
    color: productColor.value,
    article: productArticle.value,
    size: productSize.value,
    title: productTitle.value,
    price: productPrice.value,
    productCard: productCard.value.attributes.slug,
    imageUrl: productImages.value[0]?.attributes?.url,
  });
};

const selectCounter = (value) => {
  const newValue = Number(productCounter.value) + value;
  if (productCounter.value > 0 && newValue > 0) {
    productCounter.value = newValue;
    updateCartStateItem(newValue);
  } else {
    removeFromStateCart();
  }
};

const cartHandler = () => {
  if (!productInCart.value) {
    addToCart();
  }
};

const removeFromStateCart = () => {
  cart.removeFromCart(currentProduct.value.attributes.article);
};

// const selectedAmount = ref(1);

// const cart = useCart();

// const cartItems = computed(() => {
//   return cart.items;
// });

// const productInCart = computed(() => {
//   const foundItem = cartItems.value.find(
//     (item) => item.id === currentProduct.value.id
//   );

//   if (foundItem) {
//     nextTick(() => {
//       colorHandler(foundItem.color);
//     });
//     selectedAmount.value = foundItem.amount;
//     return true;
//   }
//   return false;
// });

// const addToCart = () => {
//   cart.addToCart({
//     id: currentProduct.value.id,
//     amount: Number(selectedAmount.value),
//     color: activeColor.value,
//     article: currentProduct.value.attributes.article,
//     title: currentProduct.value.attributes.title,
//     price: currentProduct.value.attributes.price,
//     imageUrl: productImages.value[0].attributes.url,
//   });
// };

// const amountDisabled = computed(() => {
//   const maxColorAmount = activeColor.value.amount;
//   return maxColorAmount === selectedAmount.value;
// });

// const isCartHandlerDisabled = ref(false);

// const cartHandler = () => {
//   if (!productInCart.value) {
//     addToCart();
//   }
// };

// const toggleDisabeldCartHandler = (value) => {
//   isCartHandlerDisabled.value = value;
// };

// // colors
// const productColors = computed(() => {
//   return currentProduct.value?.attributes.colors || null;
// });

// const activeColor = ref({});

// const colorHandler = (color) => {
//   activeColor.value = color;
// };

// if (productColors.value && productColors.value.length) {
//   const foundColor = productColors.value.find((color) => color.amount > 0);
//   if (foundColor && productInCart) {
//     colorHandler(foundColor);
//   } else {
//     toggleDisabeldCartHandler(true);
//   }
// }

function unique(arr, param) {
  const uniqueArr = [];
  const usedProps = [];

  arr.forEach((item) => {
    if (!usedProps.includes(item.attributes[param].value)) {
      uniqueArr.push(item.attributes[param]);
      usedProps.push(item.attributes[param].value);
    }
  });

  return uniqueArr;
}
</script>

<style scoped>
.skeleton {
  min-height: 40px;
  height: 100%;
  width: 100%;
  background: #ececec;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 240px;
  border-radius: 4px;
  animation: shine-loading-container-items 2s infinite ease-out;
}

@keyframes shine-loading-container-items {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 100px;
  }
}
</style>
