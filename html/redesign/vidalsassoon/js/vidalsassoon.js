$(function() {
    $('#fullpage').fullpage({
        anchors: ['banner', 'brandStory', 'bestSeller', 'category', 'media', 'news', 'footer'],
        menu: '#menu',
        scrollingSpeed: 1000,
        scrollOverflow: false,
    });
});


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
    loop: true,
    spaceBetween: 160,
    // autoplay: {
    // delay: 3000,
    // disableOnInteraction: false,
    // },
});

// $("#bestSeller-slide").each(function() {
//     var swp = this.swiper;
//     $(this).hover(function() {
//         swp.autoplay.stop();
//     }, function() {
//         swp.autoplay.start();
//     });
// });

// 04 카테고리
var category = new Swiper(".category-slide", {
    observer: true, // DOM 변경 감지 활성화
    observeParents: true, // 부모 요소의 변경 감지 활성화
    pagination: {
    el: ".category-slide .swiper-pagination",
    clickable: true,
    },
    slidesPerView: 2,
    loop: true,
    spaceBetween: 80,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
});

// $(".category-slide").each(function() {
//     var swp = this.swiper;
//     $(this).hover(function() {
//         swp.autoplay.stop();
//     }, function() {
//         swp.autoplay.start();
//     });
// });