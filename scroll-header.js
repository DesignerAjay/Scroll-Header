
//primary
var previousScroll = 0;
   $(window).scroll(function() {
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll) $('body:not(.page-template-page-customer-onboarding) .header-container').removeClass('animate');
       else if (currentScroll < 1) $('body:not(.page-template-page-customer-onboarding) .header-container').removeClass('animate');
       else $('body:not(.page-template-page-customer-onboarding) .header-container').addClass('animate');
       previousScroll = currentScroll;
   });




//secondary
$(window).scroll(function(){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 300,
    body = document.querySelector(".custom-header-scroll");
    if ($(this).scrollTop() > 10){
        $('.custom-header-bg').addClass("smaller");
        $('.header-container-wrapper').addClass("scroll");
    }
    else{
        $('.custom-header-bg').removeClass("smaller");
        $('.header-container-wrapper').removeClass("scrolll");
    }
});
