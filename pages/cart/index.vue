<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="page-header flex items-center">
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
            </div>
          </div>

          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              Корзина
            </h1>
          </div>
          <div class="flex gap-[40px]">
            <div class="flex-1">
              <ul class="flex flex-col gap-[20px]">
                <transition-group name="list">
                  <div v-if="!cartItems.length">
                    <div
                      class="flex flex-col justify-center items-center font-medium text-secondary"
                    >
                      <span class="text-[26px]">Тут пока пусто.</span>
                      <span class="text-[21px] mb-[25px]"
                        >Возвращайтесь сюда желаемыми товарами!</span
                      >
                      <div class="text-[21px] text-center">¯\_(ツ)_/¯</div>
                    </div>
                  </div>
                  <template v-else>
                    <li
                      v-for="item in cartItems"
                      class="flex items-center justify-between rounded-[4px] border-[2px] border-grey-text p-[50px]"
                    >
                      <NuxtLink
                        :to="`/products/${item.productCard}_${item.article}`"
                        class="breadcrumb flex items-start"
                      >
                        <div
                          class="image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]"
                          :style="`background-image: url('${getImageLink(
                            item.imageUrl
                          )}')`"
                        ></div>
                        <div class="flex flex-col max-w-[180px]">
                          <span class="text-[16px] text-grey-text">
                            Артикул {{ item.article }}
                          </span>
                          <span
                            class="text-[21px] text-secondary leading-[25px] font-medium"
                          >
                            {{ item.title }}
                          </span>
                          <span>
                            {{ item.color.title }}, {{ item.size.value }}
                          </span>
                        </div>
                      </NuxtLink>

                      <div
                        class="ml-[40px] flex flex-1 justify-between items-center"
                      >
                        <div class="relative">
                          <AmountCounter
                            v-model="item.count"
                            :max="item.amount"
                            @update:modelValue="updateCartItemAmount(item)"
                          />

                          <span
                            class="absolute bottom-[calc(-100%+5px)] left-0 text-[21px] text-grey-text font-medium"
                            v-if="item.count > 1"
                          >
                            {{ item.price }} ₽/ шт</span
                          >
                        </div>

                        <div class="text-[21px] text-secondary font-medium">
                          {{ item.count * item.price }} ₽
                        </div>

                        <button
                          class="text-secondary hover:text-orange hover:bg-grey-light rounded-[4px] p-[5px] h-[40px] w-[40px] transition-colors"
                          @click="deleteItem(item.article)"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div></li
                  ></template>
                </transition-group>
              </ul>
            </div>
            <div class="w-[300px] relative">
              <div class="left-0 top-0 sidebar">
                <div class="flex flex-col gap-[10px] mb-[10px]">
                  <button
                    class="flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative"
                    :class="{
                      'border-grey-text': pickedDelivery !== 'delivery',
                      'border-primary cursor-default':
                        pickedDelivery === 'delivery',
                    }"
                    :disabled="!cartItems.length"
                    @click="selectDelivery('delivery')"
                  >
                    <span class="text-secondary font-medium text-[21px]"
                      >Доставка</span
                    >
                    <span class="text-grey-text"
                      >Почта России, DHL, Boxberry</span
                    >
                    <div
                      v-if="pickedDelivery === 'delivery'"
                      class="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"
                    >
                      <div
                        class="flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white"
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
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                  <button
                    class="flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative"
                    :class="{
                      'border-grey-text': pickedDelivery !== 'pickup',
                      'border-primary': pickedDelivery === 'pickup',
                    }"
                    :disabled="!cartItems.length"
                    @click="selectDelivery('pickup')"
                  >
                    <span class="text-secondary font-medium text-[21px]"
                      >Самовывоз</span
                    >
                    <span class="text-grey-text"
                      >Заберите заказ в магазине</span
                    >

                    <div
                      v-if="pickedDelivery === 'pickup'"
                      class="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"
                    >
                      <div
                        class="flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white"
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
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>

                <div
                  class="flex flex-col gap-[15px] pt-[32px] px-[13px] pb-[20px] rounded-[4px] border-[2px] border-grey-text"
                >
                  <div
                    class="flex justify-between items-center text-[21px] text-grey-text"
                  >
                    <div>Товары ({{ cartTotalCounter }}):</div>
                    <div>{{ cartTotalSum }} ₽</div>
                  </div>

                  <div class="flex justify-between items-center text-[21px]">
                    <div class="text-grey-text">Доставка:</div>
                    <div class="text-primary">
                      {{
                        pickedDelivery === "delivery" ? "доставка" : "самовывоз"
                      }}
                    </div>
                  </div>

                  <div
                    class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full"
                  ></div>

                  <div
                    class="flex justify-between items-center text-[21px] text-secondary"
                  >
                    <div>Итого:</div>
                    <div>{{ cartTotalSum }} ₽</div>
                  </div>

                  <div
                    class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full"
                  ></div>

                  <button
                    class="bg-primary text-[21px] text-center py-[12px] rounded-[4px] transition-colors"
                    :class="{
                      'bg-grey-light text-grey-text': cartTotalSum === 0,
                      'hover:bg-white border-[2px] border-primary hover:text-primary text-white ':
                        cartTotalSum !== 0,
                    }"
                    :disabled="cartTotalSum === 0"
                  >
                    Перейти к оформлению
                  </button>
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
import { useCart } from "~/store/cart/cart";
import AmountCounter from "~~/components/UI/AmountCounter.vue";

const cart = useCart();

const cartItems = computed(() => {
  return cart.items;
});

const updateCartItemAmount = (item) => {
  cart.updateCartItem(item);
};

const deleteItem = (item) => {
  cart.removeFromCart(item);
};

const config = useRuntimeConfig();

const getImageLink = (imageUrl) => {
  return `${config.API_URL}${imageUrl}`;
};

const pickedDelivery = computed(() =>
  cartItems.value.length ? cart.$state.selectedDelivery : null
);

const selectDelivery = (value) => {
  cart.updateDelivery(value);
};

const cartTotalCounter = computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.count, 0)
);

const cartTotalSum = computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.count * item.price, 0)
);

useHead({
  title: `Prometei – Корзина`,
});
</script>

<style>
:root {
  --space: 120px;
}

.sidebar {
  --offset: var(--space);
  position: sticky;
  top: var(--offset);
}

.list-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 300ms;
}

.list-leave-active {
  transition: all 300ms ease-out;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
