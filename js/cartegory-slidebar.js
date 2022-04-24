const itemsSlideBar = document.querySelectorAll(".cartegory-left-li");
console.log(itemsSlideBar);
itemsSlideBar.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("block");
  });
});
