<template>
  <div class="w-[400px]">
    <div
      class="w-full h-[400px] bg-center bg-cover mb-[10px] rounded-[4px]"
      :style="`background-image: url('${currentImage.imageLink}')`"
    ></div>
    <div class="flex gap-[10px]">
      <button
        class="w-[86px] h-[86px] flex items-center justify-center rounded-[4px]"
        :class="{
          'border-[2px] border-primary': currentImage.id === imageItem.id,
        }"
        v-for="imageItem in imagesWithImageLink"
        @click="selectImage(imageItem)"
      >
        <div
          class="w-[70px] h-[70px] bg-center bg-cover"
          :style="`background-image: url('${imageItem.imageLink}')`"
        >
          –
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "image-viewer",
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const images = props.modelValue;

    const config = useRuntimeConfig();

    const getImageLink = (image) => {
      const link = image.attributes.url;
      return `${config.API_URL}${link}`;
    };

    const imagesWithImageLink = images.map((image) => ({
      imageLink: getImageLink(image),
      ...image,
    }));

    const currentImage = ref({});

    const selectImage = (image) => {
      currentImage.value = image;
    };

    if (imagesWithImageLink && imagesWithImageLink.length) {
      selectImage(imagesWithImageLink[0]);
    }

    return { currentImage, selectImage, imagesWithImageLink };
  },
};
</script>

<style lang="scss" scoped></style>
