new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally: true,
    // 옵션 설정
    // sectionsColor: ['#7BAABE', '#4BBFC3', '#f2f2f2', 'whitesmoke'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    // scrollingSpeed: 1000,
});

// 컬렉션
var collection = new Swiper("#collection-slide", {
    pagination: {
    el: "#collection-slide .swiper-pagination",
    clickable: true,
    },
    freeMode:false,
    navigation: {
        nextEl: "#collection-slide .swiper-button-next",
        prevEl: "#collection-slide .swiper-button-prev",
    },
    slidesPerView: 3,
    centeredSlides: true,
    loop:true,
    spaceBetween: 160,
});


// 디바이스
var device = new Swiper("#device-slide", {
    pagination: {
    el: "#device-slide .swiper-pagination",
    clickable: true,
    },
    freeMode:false,
    slidesPerView: 3,
    loop:true,
    initialSlide: 3,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});