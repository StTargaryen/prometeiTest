<script setup>
import { scrollToElement } from "@/helpers";
import { useCart } from "~/store/cart/cart";

const cart = useCart();

const clearCart = () => {
  cart.removeAllCartItems();
};

const cartIsEmpty = computed(() => cart.cartIsEmpty);

const orderStatus = computed(() => cart.orderStatus);

onMounted(() => {
  if (orderStatus.value) {
    setTimeout(() => {
      scrollToElement("order", -79);
    }, 200);
  }
});

useHead({
  title: `Прометей – Корзина`,
});
</script>

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

          <div
            class="page-header mb-[20px] w-[calc(100%-340px)] flex items-end justify-between"
          >
            <h2 class="flex-grow text-primary text-[36px] font-bold">
              Корзина
            </h2>

            <button
              v-if="!cartIsEmpty"
              class="text-grey-text text-[16px]"
              :class="{
                'hover:text-orange transition-colors': !orderStatus,
              }"
              :disabled="orderStatus"
              @click="clearCart()"
            >
              Очистить корзину
            </button>
          </div>
          <div class="flex gap-[40px]">
            <div class="flex-1">
              <CartList />
              <transition name="fade-longer">
                <ShopOrder v-if="!cartIsEmpty && orderStatus" />
              </transition>
            </div>
            <CartDetails />
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<style>
:root {
  --space: 120px;
}

.sidebar {
  --offset: var(--space);
  position: sticky;
  top: var(--offset);
}

.list-reverse-enter-active,
.list-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 300ms;
}

.list-reverse-leave-active,
.list-leave-active {
  transition: all 300ms ease-out;
}
.list-reverse-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.list-reverse-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
