<template>
  <NuxtLayout name="shop">
    <div class="flex-grow">
      <main class="mt-[102px] mb-[40px] flex-grow">
        <div class="max-w-screen-xl w-full mx-auto">
          <div class="page-header flex items-center">
            <div class="inline-block">
              <NuxtLink
                to="/categories"
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
                <span>К категориям</span>
              </NuxtLink>
            </div>
          </div>
          <div class="page-header mb-[20px] flex items-center">
            <h1 class="flex-grow text-primary text-[36px] font-bold">
              Футбольные мячи
            </h1>
          </div>
          <div class="flex justify-between items-start gap-[40px]">
            <aside class="catalog-filter w-[300px] flex flex-col">
              <div class="filter-block mb-[20px]">
                <div
                  class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
                >
                  Бренд
                </div>
                <ul class="filter-block-content py-[10px] mx-[30px]">
                  <li
                    class="px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer"
                  >
                    <span class="flex-grow">Puma</span>
                    <span
                      ><svg
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
                        ></path></svg
                    ></span>
                  </li>
                </ul>
              </div>
              <div class="filter-block">
                <div
                  class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"
                >
                  Цена, руб.
                </div>
                <div class="filter-block-content py-[10px] mx-[30px]">
                  <div
                    class="mt-[20px] flex justify-between items-center w-full"
                  >
                    <input
                      class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"
                      type="text"
                      placeholder="799"
                    />
                    <span class="w-[20px] h-[2px] bg-grey-light"></span>
                    <input
                      class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"
                      type="text"
                      placeholder="13000"
                    />
                  </div>
                </div>
              </div>
            </aside>
            <div class="catalog-list flex-grow flex gap-[25px]">
              <div
                v-for="(product, index) in products.data"
                :key="index"
                class="catalog-list-item font-medium text-[21px] w-1/3 h-[450px] shadow-card hover:shadow-card-hover rounded-[4px] relative flex flex-col p-[30px]"
              >
                <NuxtLink
                  :to="`/product/${product.id}`"
                  class="item-image flex-grow bg-center bg-no-repeat bg-contain"
                  style="
                    background-image: url('assets/images/product-item.png');
                  "
                ></NuxtLink>
                <div
                  class="item-content flex flex-col items-stretch text-center"
                >
                  <div class="item-title mb-[30px] font-medium">
                    {{ product.attributes.Title }}
                  </div>
                  <button
                    class="item-button border-[2px] py-[4px] border-primary rounded-[4px] flex justify-center items-center"
                  >
                    {{ product.attributes.Price }} руб.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { data: products } = await useFetch("http://localhost:1337/api/products");
</script>
