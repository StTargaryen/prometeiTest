<script setup>
import { useCart } from "@/store/cart/cart";
import { api } from "@/helpers/api";
import { scrollTop, scrollToElement } from "~~/helpers";

const cart = useCart();

const setDelivery = (deliveryType) => {
  switch (deliveryType) {
    case "delivery":
      return "Доставка";
    case "pickup":
      return "Самовывоз";
    default:
      return "Неизвестно";
  }
};

const selectPayment = () => {};

const payment = ref({
  offline: "Оплата наличными или картой в магазине",
  online: "Онлайн оплата",
});

const setPayment = (paymentType) => {
  switch (paymentType) {
    case "offline":
      return "Оплата в магазине";
    case "online":
      return "Онлайн оплата";
    default:
      return "Неизвестно";
  }
};

const initOrderDetails = () => {
  const orderDetails = [];
  cart.items.forEach((item) => {
    const orderDetailsItem = {
      "Заголовок товара": item.title,
      "Кол-во": item.count,
      "Артикул товара": item.article,
      "Цена за ед.товара": item.price,
      "Сумма товаров": item.price * item.count,
    };
    orderDetails.push(orderDetailsItem);
  });
  return orderDetails;
};

const cartTotalSum = computed(() =>
  cart.items.reduce((acc, item) => acc + item.count * item.price, 0)
);

console.log(cart.items);

const config = useRuntimeConfig();

const onSubmit = async () => {
  try {
    const req = await api.post(`${config.API_URL}/api/orders`, {
      data: order,
    });
    const res = await req.json();
    if (res.data?.id) {
      scrollToElement("order", -79);
      orderNumber.value = res.data.id;
      successOrder.value = true;
    }
  } catch (error) {
    console.log(error);
  }
};

const details = computed(() => initOrderDetails());

const order = reactive({
  name: "",
  phone: "",
  delivery: setDelivery(cart.selectedDelivery),
  description: "",
  details: details,
  total: cartTotalSum.value,
  payment: setPayment("offline"),
});

cart.$subscribe((mutation, state) => {
  if (mutation.events.key === "selectedDelivery") {
    order.delivery = state.selectedDelivery;
  }
});

const successOrder = ref(false);
const orderNumber = ref("");

const closeOrder = () => {
  scrollTop();
  successOrder.value = false;
  orderNumber.value = "";

  cart.toggleOrderStatus(false);
  cart.removeAllCartItems();
};

watch(order, () => {
  cart.orderBody = order;
});
</script>

<template>
  <VForm
    id="order"
    class="page-header mb-[20px] w-full my-[40px] relative"
    @submit="onSubmit"
  >
    <div
      class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full"
    ></div>

    <h2 class="flex-grow text-primary text-[36px] font-bold my-[30px]">
      Оформление заказа
    </h2>
    <div class="grid grid-cols-2 grid-rows-2 gap-[30px]">
      <div
        class="form px-[45px] py-[30px] border-grey-text border-[2px] rounded-[4px] row-start-1 row-end-3 max-w-[445px]"
      >
        <div class="text-secondary text-[36px] font-bold mb-[20px]">
          Получатель
        </div>
        <div>
          <div class="font-medium text-secondary mb-[12px] text-[21px]">
            Ваше ФИО
          </div>

          <VField
            v-model="order.name"
            name="name"
            rules="required"
            type="text"
            placeholder="Иванов Иван Иванович"
            class="bg-grey-light h-[50px] text-[16px] text-secondary placeholder-grey-text rounded-[4px] px-[15px] py-[6px] w-full outline-none focus-visible:outline-[2px] focus-visible:outline-primary max-w-[360px]"
          />
          <VErrorMessage class="text-orange" name="name" />
        </div>
        <div>
          <div class="font-medium text-secondary mb-[12px] text-[21px]">
            Ваш номер телефона
          </div>
          <VField
            v-model="order.phone"
            v-maska="{
              mask: '+7 (###) ###-##-##',
            }"
            class="bg-grey-light h-[50px] text-[16px] text-secondary placeholder-grey-text rounded-[4px] px-[15px] py-[6px] w-full outline-none focus-visible:outline-[2px] focus-visible:outline-primary max-w-[360px]"
            rules="phone"
            name="phone"
            type="phone"
            placeholder="+7 (___) ___ __ __"
          />
          <VErrorMessage class="text-orange" name="phone" />
        </div>
        <div>
          <div class="font-medium text-secondary mb-[12px] text-[21px]">
            Ваша электронная почта
          </div>
          <VField
            v-model="order.email"
            autocomplete="email"
            type="email"
            rules="email"
            name="email"
            class="bg-grey-light h-[50px] text-[16px] text-secondary placeholder-grey-text rounded-[4px] px-[15px] py-[6px] w-full outline-none focus-visible:outline-[2px] focus-visible:outline-primary max-w-[360px]"
            placeholder="ivanov@mail.ru"
          />
          <VErrorMessage class="text-orange" name="email" />
        </div>

        <div
          class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full my-[30px]"
        ></div>
        <div>
          <div class="font-medium text-secondary mb-[12px] text-[21px]">
            Комментарий к заказу
          </div>
          <textarea
            v-model="order.description"
            type="textarea"
            rows="4"
            class="bg-grey-light h-[50px] text-[16px] text-secondary placeholder-grey-text rounded-[4px] px-[15px] py-[6px] w-full max-h-[300px] max-w-[360px] outline-none focus-visible:outline-[2px] focus-visible:outline-primary"
            placeholder="Доставить как можно скорее"
          />
        </div>
      </div>
      <div
        class="address px-[45px] py-[30px] border-grey-text border-[2px] rounded-[4px]"
      >
        <div class="text-secondary text-[36px] font-bold">Адрес самовывоза</div>
        <div class="font-medium text-secondary mb-[12px] text-[21px]">
          Профсоюзная 7А, 1 этаж
        </div>
        <div class="font-medium text-grey-text mb-[12px] text-[21px]">
          Ежедневно, с 11:00 до 19:00
        </div>
      </div>
      <div class="map">
        <iframe
          class="w-full h-full"
          title="map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A92215954429a4c254887c138f530327df8f054518c2db6c2b2da1f0db01017ef&amp;source=constructor"
        ></iframe>
      </div>
    </div>
    <div>
      <h4 class="text-[36px] my-[28px]">Способ оплаты</h4>
      <div class="flex items-center gap-[30px] justify-center">
        <button
          class="flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative h-[80px] justify-center"
          :class="{
            'border-grey-text': false,
            'border-primary cursor-default': true,
          }"
          @click="selectPayment('offline')"
        >
          <span class="text-secondary font-medium text-[21px]"
            >Оплата наличными или картой в магазине</span
          >
          <div
            v-if="true"
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
          class="flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative h-[80px] justify-center"
          :class="{
            'border-grey-text opacity-40 cursor-not-allowed': true,
            'border-primary cursor-default': false,
          }"
          @click="selectPayment('online')"
        >
          <span class="text-secondary font-medium text-[21px]"
            >Оплата онлайн (пока недоступно)</span
          >
          <div
            v-if="false"
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
      <div class="flex items-center justify-center">
        <button
          class="bg-primary rounded-[4px] text-[26px] text-white h-[50px] mt-[30px] h-[80px] w-[calc(50%-15px)]"
          type="submit"
        >
          Оформить заказ
        </button>
      </div>
    </div>
    <div
      class="absolute left-0 top-0 bottom-0 right-0 border-[2px] backdrop-blur-[20px] border-primary rounded-[4px] flex items-center justify-center flex-col"
      v-if="successOrder"
    >
      <div class="uppercase text-[46px] text-primary font-bold">
        Номер вашего заказа:
        <span>{{ orderNumber }}</span>
      </div>
      <div class="text-[26px] underline">
        Сообщите его менеджеру, когда будете подтверждать заказ
      </div>
      <button
        type="button"
        class="bg-primary rounded-[4px] text-[26px] text-white h-[50px] mt-[30px] h-[80px] w-[calc(50%-15px)]"
        @click="closeOrder()"
      >
        Принять
      </button>
    </div>
  </VForm>
</template>

<style lang="scss" scoped></style>
