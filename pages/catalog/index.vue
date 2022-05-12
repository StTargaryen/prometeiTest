<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="inline-block">
            <NuxtLink
              to="/"
              class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            >
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
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span>На главную</span>
            </NuxtLink>
          </div>
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              Все категории
            </h1>
          </div>
          <div class="cards flex items-center gap-[20px]">
            <NuxtLink
              v-for="section in sectionsList"
              :to="{
                path: `/catalog/${section.attributes.slug}`,
              }"
              class="card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            >
              <div
                class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain"
                :style="`background-image: url('${imageUrl(section)}')`"
              ></div>
              <div class="flex flex-grow card-text text-[21px]">
                {{ section.attributes.name }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { data: sections } = await useFetch(
  "http://localhost:1337/api/sections?populate=*"
);

const sectionsList = sections.value.data;

const config = useRuntimeConfig();

const imageUrl = (section) => {
  const url = section.attributes?.image?.data?.attributes?.url;
  if (url) {
    return `${config.API_URL}${url}`;
  }
  return "";
};
</script>
