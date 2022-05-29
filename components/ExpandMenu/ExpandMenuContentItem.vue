<template>
  <div class="mt-[60px] text-secondary">
    <div class="text-[36px] text-primary font-bold mb-[35px]">
      {{ title }}
    </div>
    <div class="subcategory">
      <ul class="flex gap-[60px]">
        <li v-for="category in categories" :key="category.id">
          <template v-if="category.attributes">
            <div class="text-[21px] hover:text-orange mb-[30px]">
              <nuxt-link
                :to="{
                  path: `/categories/${category.attributes.slug}`,
                }"
              >
                {{ category.attributes.title }}
              </nuxt-link>
            </div>

            <ul>
              <li
                v-for="subcategory in category.attributes.items.data"
                :key="subcategory.id"
                class="hover:text-orange mb-[20px]"
              >
                <nuxt-link :to="`/categories/${subcategory.attributes.slug}`">{{
                  subcategory.attributes.title
                }}</nuxt-link>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "Пункт меню",
    },
    content: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const categories = computed(() => {
      return props.content.items.data;
    });

    return { categories };
  },
};
</script>

<style lang="scss" scoped></style>
