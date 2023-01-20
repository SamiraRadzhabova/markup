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
$(".table__slick").slick({
  arrows: false,
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
  $(".header__listToggle").toggleClass("header__listToggle--open");
  if(!$(".header__listToggle").hasClass("header__listToggle--open")) $(".nav__list").css('display','none');
})

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

