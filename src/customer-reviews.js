$('.slide-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    //fade: true,
    asNavFor: '.slide-customer',
    autoplay: true,
    infinite: true,
     });
   $('.slide-customer').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.slide-reviews',
   dots: true,
   //centerMode: true,
   focusOnSelect: true,
    arrows: false,
   });