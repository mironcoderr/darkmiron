//for preloader when open this site
$(window).on("load", function(){
    var preload = document.querySelector(".preloader");
    preload.classList.add("load-finish");
});




//for back to top button show and hide when scrolling
$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    if(scroll > 1000){
        $(".top-btn").show();
    }else{
        $(".top-btn").hide();
    }
});




//for menu fixed when scrolling
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 130){
        $(".menu-head").addClass("menu-fixed");
    }else{
        $(".menu-head").removeClass("menu-fixed");
    }
});


    
    

//portfolio slider js
$('.prot-plugin').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 1000,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





    
    

//blog slider js
$('.blog-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 1000,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});








//skills percent counting js
$('.skill-number').counterUp({
    delay: 50,
    time: 1500
});

































