import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => {
    return {
      cartItems: [],
      selectedDelivery: "delivery",
      orderStatus: false,
      orderBody: null,
    };
  },
  getters: {
    items: ({ cartItems }) => cartItems,
    cartIsEmpty: ({ cartItems }) => !cartItems.length,
  },
  actions: {
    updateDelivery(value) {
      this.selectedDelivery = value;
    },
    initCart(cartData) {
      this.cartItems = cartData;
    },
    toggleOrderStatus(value) {
      this.orderStatus = value;
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
      this.cartItems = newArr;
    },
  },
});
