$(function() {
    $('#fullpage').fullpage({
        anchors: ['banner', 'brandStory', 'bestSeller', 'category', 'media', 'news', 'footer'],
        scrollingSpeed: 1000,
        scrollOverflow: false,
        afterLoad: function(anchorLink, index) {
            if (typeof index === 'object') {
                index = index.index;
            }
            if (index === 0) {
                $('#vs-quick').removeClass('show');
            } else {
                $('#vs-quick').addClass('show');
            }

            triggerGSAPAnimation(index);
        }
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
    initialSlide: 0,
    autoplay: {
        enabled: false,
        delay: 2000,
        disableOnInteraction: false,
    },
});

$("#bestSeller-slide .swiper-slide").hover(
    function () {
        if ($(this).hasClass("swiper-slide-active")) {
            bestSeller.autoplay.stop();
        }
    },
    function () {
        if ($(this).hasClass("swiper-slide-active")) {
            bestSeller.autoplay.start();
        }
    }
);


// 04 카테고리
var category = new Swiper(".category-slide", {
    observer: true, 
    observeParents: true, 
    pagination: {
    el: ".category-slide .swiper-pagination",
    clickable: true,
    },
    slidesPerView: 2,
    loop: true,
    spaceBetween: 80,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
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