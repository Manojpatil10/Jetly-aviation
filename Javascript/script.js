$(document).ready(function(){
  

  $(".customers").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    dots:false,
    responsive:{
      0:{
        items:1
      },
      992:{
        items:2
      }
    }
  });
  $(".price-right").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    dots:false,
    margin:20,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      }
    }
  });



  $(".menu").click(function () {
    $(".mobile-menu").css({ "left": "0px" });
  });

  $(".cancel-btn").click(function () {
    $(".mobile-menu").css({ "left": "-300px" });
  });
});