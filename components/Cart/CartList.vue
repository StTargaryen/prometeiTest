<script setup>
import { useCart } from "@/store/cart/cart";
import AmountCounter from "../UI/AmountCounter.vue";

const config = useRuntimeConfig();

const getImageLink = (imageUrl) => {
  return `${config.API_URL}${imageUrl}`;
};

const cart = useCart();

const cartItems = computed(() => cart.items);

const cartIsEmpty = computed(() => cart.cartIsEmpty);

const updateCartItemAmount = (item) => {
  cart.updateCartItem(item);
};

const removeCartItem = (item) => {
  cart.removeFromCart(item);
};
</script>

<template>
  <div style="position: relative">
    <div class="flex-1">
      <transition name="list" class="flex flex-col gap-[20px]">
        <div
          v-if="cartIsEmpty"
          class="flex flex-col justify-center items-center font-medium text-secondary"
        >
          <span class="text-[26px]">Тут пока пусто.</span>
          <span class="text-[21px] mb-[25px]"
            >Возвращайтесь сюда желаемыми товарами!</span
          >
          <div class="text-[21px] text-center">¯\_(ツ)_/¯</div>
        </div>
      </transition>
      <template v-if="!cartIsEmpty">
        <transition-group name="list" tag="ul" class="flex flex-col gap-[20px]">
          <li
            v-for="item in cartItems"
            :key="item.article"
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
                  class="text-[21px] text-secondary leading-[25px] font-medium capitalize"
                >
                  {{ item.title }}
                </span>
                <span> {{ item.color.title }}, {{ item.size.value }} </span>
              </div>
            </NuxtLink>

            <div class="ml-[40px] flex flex-1 justify-between items-center">
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
                @click="removeCartItem(item.article)"
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
            </div>
          </li>
        </transition-group>
      </template>
    </div>
    <div
      class="scale-y-[1.02] scale-x-[1.01]"
      :class="{
        'opacity-50 transition-all absolute top-0 w-full h-full bg-grey rounded-[4px]':
          cart.orderStatus,
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped></style>
