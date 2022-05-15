<template>
  <NuxtLayout name="shop">
    <div
      class="flex-grow"
      :class="{
        'overflow-hidden': isExpandMenuShow,
      }"
    >
      <main class="mt-[136px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="page-header flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              Популярные категории
            </h1>
            <div>
              <NuxtLink
                to="/catalog"
                class="flex items-center justify-center text-[21px] text-primary hover:text-orange"
              >
                <span class="mr-[5px]">Все категории</span>
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
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div
            class="slider-image mt-[40px] image-slider flex justify-between gap-[25px]"
          >
            <div
              class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative"
              :style="{
                backgroundImage: `url(${getLocalBackgroundImageUrl(
                  'basketball'
                )})`,
              }"
            >
              <span
                class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"
                >Баскет<br />бол</span
              >
            </div>
            <div
              class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative"
              :style="{
                backgroundImage: `url(${getLocalBackgroundImageUrl(
                  'football'
                )})`,
              }"
            >
              <span
                class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"
                >Фут<br />бол</span
              >
            </div>
            <div
              class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative"
              :style="{
                backgroundImage: `url(${getLocalBackgroundImageUrl(
                  'voleyball'
                )})`,
              }"
            >
              <span
                class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"
                >Волей<br />бол</span
              >
            </div>
          </div>
          <div class="slider-category"></div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useMenuToggler } from "~/store/menu/menu";
import voleyball from "~/assets/images/voleyball.png";
import basketball from "~/assets/images/basketball.png";
import football from "~/assets/images/football.png";
const menuStore = useMenuToggler();

const isExpandMenuShow = computed(() => {
  return menuStore.$state.isExpandMenuOpen;
});

const url = "/api/stuff";
const { data } = await useFetch(url, {
  transform: (response) => {
    response = JSON.parse(response);
    const res = [];
    for (const person in response) {
      console.log(person);
      if (response.hasOwnProperty(person)) {
        res.push({ name: person, message: response[person] });
      }
    }
    return res;
  },
});

const getLocalBackgroundImageUrl = (name) => {
  switch (name) {
    case "voleyball":
      return voleyball;
    case "football":
      return football;
    case "basketball":
      console.log("hi");
      return basketball;
    default:
      return "";
  }
};
</script>
