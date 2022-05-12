import { defineStore } from "pinia";

export const useMenuToggler = defineStore("menu", {
  state: () => {
    return {
      isExpandMenuOpen: false,
    };
  },
  actions: {
    toggleMenu(value) {
      this.isExpandMenuOpen = value;
    },
  },
});
