let nextBtn = document.querySelector(".comment-btn.next");
let prevBtn = document.querySelector(".comment-btn.prev");
let slides = document.querySelectorAll(".comment-wrapper");
let activeSlide = document.querySelector(".active");
let nextIndex = parseInt(activeSlide.dataset.id) + 1;
nextBtn.addEventListener("click", () => {
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  document.querySelector(".active").classList.remove("active");
  slides[nextIndex].classList.add("active");
  nextIndex++;
});
prevBtn.addEventListener("click", () => {
  if (nextIndex<1) {
    nextIndex = slides.length;
  }
  document.querySelector(".active").classList.remove("active");
  slides[--nextIndex].classList.add("active");
});

console.log($(".comment__btn--prev"));

