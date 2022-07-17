import { defineRule } from "vee-validate";
// import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", (value) => {
    if (!value || !value.length) {
      return "Поле обязательно для заполнения!";
    }
    return true;
  });

  defineRule("phone", (value) => {
    if (!value || !value.length) {
      return "Поле обязательно для заполнения!";
    }

    if (value.length !== 18) {
      return "Введите корректный телефон";
    }

    return true;
  });

  defineRule("email", (value) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Field is empty, should pass
    if (!value || !value.length) {
      return "Поле обязательно для заполнения!";
    }
    // Check if email
    if (!regex.test(value)) {
      return "Введите корректный email!";
    }
    return true;
  });
  // Object.keys(rules).filter((k) => k !== "default");
  // .forEach((rule) => {
  //   defineRule(rule, rules[rule]);
  //   console.log(rule);
  // });
});
