$(function(){


    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="images/arrow left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/arrow right.png" alt="next"></button>'
      });
      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        // dots: true,
        // centerMode: true,
        // focusOnSelect: true
        fade: true,
        arrows:false
      });

      
      

});