export const scrollToElement = (DOMid, yOffset) => {
  const element = document.getElementById(DOMid);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
