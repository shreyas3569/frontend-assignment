
$('.Slider__container').slick({
    infinite: false,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows:true,
    autoplay: true,
    infinite: true,
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows:false
      }
    },
    {
      breakpoint: 287,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false
      }
    },
  ],
    speed: 200,
    prevArrow: '<div class="slick-arrow prev"><span class="fas fa-arrow-left"></span></div>',
    nextArrow: '<div class="slick-arrow next"><span class="fas fa-arrow-right"></span></div>',

})

