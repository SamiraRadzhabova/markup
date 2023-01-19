// let nextBtn = $(".comment__btn--next");
// let prevBtn = $(".comment__btn--prev");
// let slides = $(".comment__wrapper");
// let activeSlide = $(".comment__wrapper--active");
// let nextIndex = parseInt(activeSlide.data("id")) + 1;
// nextBtn.click(() => {
//   if (nextIndex >= slides.length) {
//     nextIndex = 0;
//   }
//   activeSlide.removeClass("comment__wrapper--active");
//   slides.eq(nextIndex).addClass("comment__wrapper--active");
//   nextIndex++;
// });
// prevBtn.click(() => {
//   if (nextIndex<1) {
//     nextIndex = slides.length;
//   }
//   activeSlide.removeClass("comment__wrapper--active");
//   slides.eq(--nextIndex).addClass("comment__wrapper--active");
// });

$(".comment__slick").slick({
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        dots: true,
      }
    }
  ]
});
$(".header__listToggle").click(()=>{
  $(".nav__list").css('display','flex');
  $(".header__listToggle").toggleClass("header__listToggle--open")
  if(!$(".header__listToggle").hasClass("header__listToggle--open")) $(".nav__list").css('display','none');
})



// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("comment__wrapper");
//   var dots = document.getElementsByClassName("comment__dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" comment__active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " comment__active";
// }
