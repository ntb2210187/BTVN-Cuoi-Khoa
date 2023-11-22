$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })

  });