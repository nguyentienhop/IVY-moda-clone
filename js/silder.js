const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let index = 0;
imgPosition.forEach((img, index) => {
  img.style.left = index * 100 + "%";
  dotItem[index].addEventListener("click", () => {
    siler(index);
  });
});
setInterval(() => {
  auto();
}, 5000);
function auto() {
  index++;
  if (index === 5) {
    index = 0;
  }
  siler(index);
}
function siler(index) {
  imgContainer.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[index].classList.add("active");
}
