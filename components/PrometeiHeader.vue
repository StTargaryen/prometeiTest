<template>
  <header
    class="bg-white w-full pt-[10px] pb-[20px] fixed z-20 left-0 right-0 top-0 border-b-[2px] border-grey font-medium"
  >
    <div
      class="max-w-screen-xl w-full mx-auto flex justify-between items-center"
    >
      <NuxtLink to="/" class="logo">
        <img src="~/assets/images/header-logo.svg" alt="" />
      </NuxtLink>
      <div class="navigation flex items-center">
        <button
          class="h-[50px] px-[24px] mr-[16px] rounded-[4px] flex justify-center items-center text-white bg-primary"
          @click="toggleMenu"
        >
          <span class="mr-[7px]">Каталог товаров</span>
          <span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
        </button>
        <div
          class="h-[50px] w-[500px] flex justify-between items-center border-primary border-[2px] rounded-[4px]"
        >
          <input
            type="text"
            class="w-[360px] ml-[21px] rounded-[4px] outline-none placeholder:text-grey-text"
            placeholder="Поиск товаров"
          />
          <button
            class="m-[-1px] h-[50px] px-[27px] rounded-r-[4px] flex justify-center items-center text-white bg-primary"
          >
            Найти
          </button>
        </div>
      </div>
      <NuxtLink
        to="/cart"
        class="cart h-[50px] px-[18px] bg-white flex flex-col justify-center items-center rounded-[4px] outline-none transition-colors"
        :class="{
          'bg-primary text-white cursor-default':
            $router.currentRoute.value.name === 'cart',
          'text-secondary hover:bg-grey-light':
            $router.currentRoute.value.name !== 'cart',
        }"
        :disabled="$router.currentRoute.value.name === 'cart'"
      >
        <div class="relative">
          <svg
            class="w-5 h-5"
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
          <span
            class="absolute top-[-5px] right-[-10px] font-bold w-[20px] h-[20px] text-[13px] flex items-center justify-center rounded-full"
            :class="{
              'bg-primary text-white':
                $router.currentRoute.value.name !== 'cart',
              'bg-white text-secondary':
                $router.currentRoute.value.name === 'cart',
            }"
            v-if="cartItemsCounter > 0"
            >{{ cartItemsCounter }}</span
          >
        </div>
        <span class="mt-[-4px]">Корзина</span>
      </NuxtLink>

      <ExpandMenu :show="menuStore.$state.isExpandMenuOpen" />
    </div>
  </header>
</template>

<script setup>
import ExpandMenu from "./ExpandMenu/ExpandMenu.vue";

import { useMenuToggler } from "~/store/menu/menu";
import { useCart } from "~/store/cart/cart";

const cartItemsCounter = ref(0);

const cart = useCart();

const cartItems = computed(() => {
  return cart.items;
});

cart.$onAction(({ after, store }) => {
  after(() => {
    cartItemsCounter.value = store.items.length;
  });
});

if (cartItems.value && cartItems.value.length) {
  cartItemsCounter.value = cartItems.value.length;
}

const menuStore = useMenuToggler();
const toggleMenu = () => {
  menuStore.toggleMenu(!menuStore.$state.isExpandMenuOpen);
};
</script>
