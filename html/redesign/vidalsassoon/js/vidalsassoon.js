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
    loop: true,
    spaceBetween: 160,
});

// 04 카테고리
function categorySwiper(slideClass) {
    // Swiper 초기화
    new Swiper(slideClass, {
        autoplay: {
            delay: 2000, // 자동 재생 시간 설정 (5초)
            disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
        },
        spaceBetween: 80, // 슬라이드 사이의 간격을 20px로 설정
        slidesPerView: 2, // 슬라이드 하나에 보이는 항목의 수를 'auto'로 설정 (슬라이드의 크기에 맞춰 자동 결정)
        loop: true, // 슬라이드를 무한 반복 (마지막 슬라이드에서 처음 슬라이드로 돌아감)
        pagination: {
            el: `${slideClass} .swiper-pagination`,
            clickable: true, // 페이지네이션 클릭 가능하게 설정
        },
    });
}

// 슬라이드 각각 호출 (각각의 카테고리 클래스를 사용)
categorySwiper(".straightener"); // straightener 클래스에 대해 초기화
categorySwiper(".dryer"); // dryer 클래스에 대해 초기화
categorySwiper(".curling"); // curling 클래스에 대해 초기화
categorySwiper(".air"); // air 클래스에 대해 초기화
categorySwiper(".hair"); // hair 클래스에 대해 초기화


// var category = new Swiper(".category-slide", {
//     observer: true, // DOM 변경 감지 활성화
//     observeParents: true, // 부모 요소의 변경 감지 활성화
//     pagination: {
//     el: ".category-slide .swiper-pagination",
//     clickable: true,
//     },
//     slidesPerView: 2,
//     loop: true,
//     spaceBetween: 80,
//     autoplay: {
//         delay: 2000,
//     },
//     initialSlide: 0,
// });

$(".category-slide").each(function() {
    var swp = this.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
});