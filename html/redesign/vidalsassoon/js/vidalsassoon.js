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
var category01 = new Swiper("#category01", {
    pagination: {
    el: "#category01 .swiper-pagination",
    clickable: true,
    },
    freeMode:false,
    navigation: {
        nextEl: "#category01 .swiper-button-next",
        prevEl: "#category01 .swiper-button-prev",
    },
    slidesPerView: 2,
    centeredSlides: true,
    loop:true,
    spaceBetween: 160,
});

var category02 = new Swiper("#category02", {
    pagination: {
    el: "#category02 .swiper-pagination",
    clickable: true,
    },
    freeMode:false,
    navigation: {
        nextEl: "#category02 .swiper-button-next",
        prevEl: "#category02 .swiper-button-prev",
    },
    slidesPerView: 2,
    centeredSlides: true,
    loop:true,
    spaceBetween: 160,
});