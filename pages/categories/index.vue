<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
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
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              Все категории
            </h1>
          </div>
          <div
            class="cards flex items-center gap-[20px]"
            v-if="categoriesList && categoriesList.length"
          >
            <NuxtLink
              v-for="category in categoriesList"
              :to="{
                path: `/categories/${category.attributes.slug}`,
              }"
              class="card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            >
              <div
                class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain"
                :style="`background-image: url('${imageUrl(category)}')`"
              ></div>
              <div class="flex flex-grow card-text text-[21px]">
                {{ category.attributes.title }}
              </div>
            </NuxtLink>
          </div>
          <h4 class="text-[26px]" v-else>
            <div
              class="flex flex-col justify-center items-center font-medium text-secondary"
            >
              <span class="text-[26px]">Тут пока пусто.</span>
              <span class="text-[21px] mb-[25px]"
                >Возвращайтесь сюда позднее!</span
              >
              <div class="text-[21px] text-center">¯\_(ツ)_/¯</div>
            </div>
          </h4>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();

const { data, error } = await useAsyncData("root-categories", () =>
  GqlGetRootCategories({ type: "section" })
);

console.log(data.value);
const categoriesList = data.value?.categories?.data;

useHead({
  title: `Прометей – Все категории`,
});

const imageUrl = (category) => {
  const url = category.attributes?.image?.data?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};
</script>
