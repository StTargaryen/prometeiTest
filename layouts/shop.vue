<template>
  <div class="flex flex-col h-screen">
    <PrometeiHeader />
    <slot />
    <PrometeiFooter />
  </div>
</template>

<script setup>
import PrometeiHeader from "/components/PrometeiHeader.vue";
import PrometeiFooter from "/components/PrometeiFooter.vue";

import { useMenuToggler } from "~/store/menu/menu";
import { useCart } from "~/store/cart/cart";

const cookieCartData = useCookie("cart");
const delivery = useCookie("delivery");

const cart = useCart();

cart.$onAction(({ after, store, name }) => {
  after(() => {
    if (name !== "initCart" || name !== "updateDelivery") {
      cookieCartData.value = store.items;
    }
    if (name === "updateDelivery") {
      delivery.value = store.$state.selectedDelivery;
    }
  });
});

if (cookieCartData.value && cookieCartData.value.length && !cart.items.length) {
  cart.initCart(cookieCartData.value);
}

if (delivery.value) {
  cart.$state.selectedDelivery = delivery.value;
}

const route = useRoute();
const menuStore = useMenuToggler();

const closeMenu = () => {
  menuStore.toggleMenu(false);
};

watch(route, () => {
  closeMenu();
});
</script>

<style>
* {
  font-family: inherit;
}

body {
  font-family: "Exo 2", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-longer-enter-active,
.fade-longer-leave-active {
  transition: all 0.5s ease;
}

.fade-longer-enter-from,
.fade-longer-leave-to {
  opacity: 0;
}
</style>
