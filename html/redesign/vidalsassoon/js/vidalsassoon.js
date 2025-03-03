$(function(){

    // GB 고정
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');
        }else{
            $('#header').removeClass('fix');
        }
    });
});


new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally: true,
    // 옵션 설정
    // sectionsColor: ['#7BAABE', '#4BBFC3', '#f2f2f2', 'whitesmoke'],
    anchors: ['banner', 'brandStory', 'bestSeller', 'category', 'footer'],
    menu: '#menu',
    // scrollingSpeed: 1000,
});

// 03 베스트셀러
var collection = new Swiper("#bestSeller-slide", {
    pagination: {
    el: "#bestSeller-slide .swiper-pagination",
    clickable: true,
    },
    freeMode:false,
    navigation: {
        nextEl: "#bestSeller-slide .swiper-button-next",
        prevEl: "#bestSeller-slide .swiper-button-prev",
    },
    slidesPerView: 3,
    centeredSlides: true,
    loop:true,
    spaceBetween: 160,
});