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
            <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
              /
            </code>
            <NuxtLink
              :to="{
                path: `/catalog/${currentSection.slug}`,
              }"
              class="breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            >
              <span>{{ currentSection.name }}</span>
            </NuxtLink>
            <code class="text-grey-text text-[24px] ml-[5px] mr-[5px]">
              /
            </code>
            <span
              disabled
              class="breadcrumb flex items-center text-[21px] text-grey-text cursor-default"
            >
              <span>{{ currentCategory.name }}</span>
            </span>
          </div>
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              {{ currentCategory.name }}
            </h1>
          </div>
          <div class="cards flex items-center gap-[20px]">
            <NuxtLink
              v-for="subcategory in categorySubcategories"
              :to="{
                path: `/categories/${currentCategory.slug}/${subcategory.attributes.slug}`,
              }"
              class="card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            >
              <div
                class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain"
                :style="`background-image: url('${imageUrl(subcategory)}')`"
              ></div>
              <div class="flex flex-grow card-text text-[21px]">
                {{ subcategory.attributes.title }}
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

const categorySlug = route.params.slug;

const { data: currentCategoryData } = await useFetch(
  `${config.public.API_URL}api/categories?filters[slug][$eq]=${categorySlug}&populate=parent`
);

const currentCategory = currentCategoryData.value.data[0].attributes;

useHead({
  title: `Prometei – ${currentCategory.name}`,
});

const currentSection = currentCategory.parent.data.attributes;

const { data: categorySubcategoriesData } = await useFetch(
  `${config.public.API_URL}api/subcategories?filters[parent][slug][$eq]=${currentCategory.slug}&populate=image`
);

const categorySubcategories = categorySubcategoriesData.value.data;

const imageUrl = (subcategory) => {
  const url = subcategory.attributes?.image?.data[0]?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};
</script>
