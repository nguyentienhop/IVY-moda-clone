const hearder = document.getElementsByTagName("header")[0];
console.log(hearder);
window.addEventListener("scroll", () => {
  let y = window.pageYOffset;
  if (y > 0) {
    hearder.classList.add("sticky");
  } else {
    hearder.classList.remove("sticky");
  }
});
