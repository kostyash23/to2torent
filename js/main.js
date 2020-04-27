$(function () {
  $(".slider").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="./images/slick-next.svg" alt="arrow" /></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="./images/slick-prev.svg" alt="arrow" /></button>',
    responsive: [
      {
        breakpoint: 441,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
