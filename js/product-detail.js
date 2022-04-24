const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(
  ".product-content-left-small-img img"
);
smallImg.forEach((img, index) => {
  img.addEventListener("click", () => {
    bigImg.src = img.src;
  });
});

const baoQuan = document.querySelector(".baoquan");
const chiTiet = document.querySelector(".chitet");
if (baoQuan) {
  baoQuan.addEventListener("click", () => {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "block";
  });
}

if (chiTiet) {
  chiTiet.addEventListener("click", () => {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "block";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
  });
}

const buttonShow = document.querySelector(".product-content-right-bottom-top");
if (buttonShow) {
  buttonShow.addEventListener("click", () => {
    document
      .querySelector(".product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
