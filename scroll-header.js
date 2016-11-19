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
