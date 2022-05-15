<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="inline-flex">
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
            <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
              /
            </code>
            <NuxtLink
              to="/catalog"
              class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            >
              <span>Все категории</span>
            </NuxtLink>
          </div>
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              {{ sectionTitle }}
            </h1>
          </div>
          <div class="cards flex items-center gap-[20px]">
            <NuxtLink
              v-for="category in sectionCategories"
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
                {{ category.attributes.name }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const sectionSlug = route.params.slug;

const { data: currentSection } = await useFetch(
  `${config.public.API_URL}/api/sections?filters[slug][$eq]=${sectionSlug}`
);
const { data: sectionCategoriesData } = await useFetch(
  `${config.public.API_URL}/api/categories?filters[parent][slug][$eq]=${sectionSlug}&populate=image`
);

const sectionTitle = currentSection.value.data[0].attributes.title;

useHead({
  title: `Prometei – ${sectionTitle}`,
});

const sectionCategories = sectionCategoriesData.value.data;

const imageUrl = (category) => {
  const url = category.attributes?.image.data?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};
</script>
