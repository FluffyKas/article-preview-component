const author = document.querySelector(".author");
const popup = document.querySelector(".socials-popup");
const shareBtns = document.querySelectorAll(".share-btn");


shareBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    author.classList.toggle("share-active");
    popup.classList.toggle("share-active");
  })
})