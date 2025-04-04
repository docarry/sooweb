$(function() {
    $('#fullpage').fullpage({
        anchors: ['banner', 'brandStory', 'bestSeller', 'category', 'media', 'news', 'footer'],
        menu: '#menu',
        scrollingSpeed: 1000,
        scrollOverflow: false,
    });
});

// new fullpage('#fullpage', {
//     autoScrolling: true,
//     scrollHorizontally: true,
//     scrollOverflow: true,
//     anchors: ['banner', 'brandStory', 'bestSeller', 'category', 'media', 'news', 'footer'],
//     menu: '#menu',
//     overflow: false,
//     afterLoad: function(origin, destination, direction) {
//         const anchorLink = destination.anchor; // 현재 섹션의 anchor
    
//         // 'banner' 섹션을 제외한 다른 섹션들에서만 scrolled 클래스 추가
//         if (anchorLink !== 'banner') {
//             $('#header').addClass('scrolled');
//         } else {
//             $('#header').removeClass('scrolled');
//         }
//     }
// });

// 03 베스트셀러
var bestSeller = new Swiper("#bestSeller-slide", {
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

// 04 카테고리
var category = new Swiper(".category-slide", {
    pagination: {
    el: ".category-slide .swiper-pagination",
    clickable: true,
    },
    slidesPerView: 2,
    loop:true,
    spaceBetween: 80,
    autoplay: {
        delay: 2000,
        disableOnlnteraction: false,
    },
});


$(".category-slide").each(function() {
    var swp = this.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
});