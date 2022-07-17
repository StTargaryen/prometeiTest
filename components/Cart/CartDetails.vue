<script setup>
import { useCart } from "@/store/cart/cart";

import { scrollToElement, scrollTop } from "@/helpers";

const cart = useCart();
const cartIsEmpty = computed(() => cart.cartIsEmpty);

const pickedDelivery = computed(() =>
  !cartIsEmpty.value ? cart.selectedDelivery : null
);

const selectDelivery = (value) => {
  cart.updateDelivery(value);
};

const cartTotalCounter = computed(() =>
  cart.items.reduce((acc, item) => acc + item.count, 0)
);

const cartTotalSum = computed(() =>
  cart.items.reduce((acc, item) => acc + item.count * item.price, 0)
);

const cancelOrderProcess = () => {
  scrollTop();
  cart.toggleOrderStatus(false);
};

const cartHandler = async () => {
  if (cart.orderStatus) {
    cancelOrderProcess();

    // const res = await fetch(`${config.public.API_URL}/api/orders`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     data: cart.orderBody,
    //   }),
    // });
    // console.log(res);
  } else {
    cart.toggleOrderStatus(true);
  }

  nextTick(() => {
    if (!cart.orderStatus) {
      scrollTop();
    } else {
      scrollToElement("order", -79);
    }
  });
};
</script>

<template>
  <transition name="list-reverse">
    <div class="w-[300px] relative" v-if="!cartIsEmpty">
      <div class="left-0 top-0 sidebar">
        <div class="flex flex-col gap-[10px] mb-[10px]">
          <button
            class="flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative"
            :class="{
              'border-grey-text': pickedDelivery !== 'delivery',
              'border-primary cursor-default': pickedDelivery === 'delivery',
            }"
            @click="selectDelivery('delivery')"
          >
            <span class="text-secondary font-medium text-[21px]">Доставка</span>
            <span class="text-grey-text">Почта России, DHL, Boxberry</span>
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
            @click="selectDelivery('pickup')"
          >
            <span class="text-secondary font-medium text-[21px]"
              >Самовывоз</span
            >
            <span class="text-grey-text">Заберите заказ в магазине</span>

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
              {{ pickedDelivery === "delivery" ? "доставка" : "самовывоз" }}
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
            class="text-[21px] text-center py-[12px] rounded-[4px] transition-colors"
            :class="{
              'bg-grey-light text-grey-text': cartTotalSum === 0,
              'hover:bg-white border-[2px] hover:text-primary text-white ':
                cartTotalSum !== 0,
              ' opacity-50 text-white bg-grey-text border-grey-text hover:opacity-100 hover:bg-orange hover:border-orange hover:text-white':
                cart.orderStatus,
              'bg-primary border-primary': !cart.orderStatus,
            }"
            :disabled="cartTotalSum === 0"
            @click="cartHandler(true)"
          >
            {{ cart.orderStatus ? "Отменить" : "Перейти к оформлению" }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped></style>
