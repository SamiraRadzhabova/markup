// let nextBtn = document.querySelector(".comment-btn.next");
// let prevBtn = document.querySelector(".comment-btn.prev");
// let slides = document.querySelectorAll(".comment-wrapper");
// let activeSlide = document.querySelector(".active");
// let activeIndex=parseInt(activeSlide.dataset.id);
// let nextIndex = activeIndex + 1;
// console.log(typeof activeIndex);
// slides.forEach((slide, i, arr)=> {
//     console.log(slide, i, arr)
// })
// nextBtn.addEventListener("click", () => {
//     if(nextIndex >= slides.length) {

//         activeIndex=0
//         nextIndex=1
//     }
//     console.log(nextIndex, activeIndex, slides.length);
//     document.querySelector(".active").classList.remove("active");
//     slides[nextIndex].classList.add("active")
//     activeIndex= nextIndex;
//     nextIndex++;
// });
// prevBtn.addEventListener("click", () => {
//   console.log("click prev");
// });
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
