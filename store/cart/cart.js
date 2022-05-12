import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => {
    return {
      cartItems: [],
      selectedDelivery: "delivery",
    };
  },
  getters: {
    items: ({ cartItems }) => cartItems,
  },
  actions: {
    updateDelivery(value) {
      this.selectedDelivery = value;
    },
    initCart(cartData) {
      this.cartItems = cartData;
    },
    addToCart(product) {
      const newArr = JSON.parse(JSON.stringify(this.cartItems));
      newArr.push(product);
      this.cartItems = newArr;
    },
    updateCartItem(itemData) {
      this.cartItems = this.items.map((item) => {
        if (item.article === itemData.article) {
          return itemData;
        }
        return item;
      });
    },
    removeAllCartItems() {
      this.cartItems = [];
    },
    removeFromCart(productArticle) {
      const newArr = [];
      for (let index in this.cartItems) {
        const item = this.cartItems[index];
        if (item.article !== productArticle) {
          newArr.push(item);
        }
      }
      console.log(newArr);
      this.cartItems = newArr;
    },
  },
});
