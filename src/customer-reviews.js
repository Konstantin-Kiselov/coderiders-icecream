$('.slide-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    asNavFor: '.slide-customer',
    
  
    autoplay: true,

    infinite: false,
     });
   $('.slide-customer').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.slide-reviews',
   dots: true,
   centerMode: true,
   focusOnSelect: true,

    infinite: false,
    arrows: false,
   });