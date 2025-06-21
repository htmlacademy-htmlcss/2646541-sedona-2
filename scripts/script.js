const openBtn = document.querySelector(".button-search-hotel");
const closeBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal-wrapper");


openBtn.addEventListener("click", () => {
  modal.classList.add("modal-wrapper-show");
})

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-wrapper-show");
})
