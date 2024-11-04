// 메인배너 슬라이드
var mainBannerSwiper = new Swiper("#mainBanner-swiper.mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2600,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: "#mainBanner-swiper .swiper-button-next",
        prevEl: "#mainBanner-swiper .swiper-button-prev",
    }
});


// 고객후기 슬라이드
var reviewSwiper = new Swiper("#review-Swiper.mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    576: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 30,
    },
    768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 30,
    },
    1280: {
        slidesPerView: 3,  //브라우저가 768보다 클 때
        spaceBetween: 50,
    },
    },
});
$(function(){

    $("#review-Swiper").each(function() {
        var swp = this.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });

});


// 인스타그램 슬라이드
var instagramSwiper01 = new Swiper("#instagramBox01.mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
        },
        990: {
            slidesPerView: 4,  //브라우저가 768보다 클 때
        },
        1280: {
            slidesPerView: 5,  //브라우저가 768보다 클 때
        },
        },
});
var instagramSwiper02 = new Swiper("#instagramBox02.mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
        },
        990: {
            slidesPerView: 4,  //브라우저가 768보다 클 때
        },
        1280: {
            slidesPerView: 5,  //브라우저가 768보다 클 때
        },
        },
});
// $(function() {
//     // 두 개의 Swiper를 동시에 제어할 수 있는 hover 이벤트 추가
//     $("#instagramBox01, #instagramBox02").hover(function() {
//         instagramSwiper01.autoplay.stop();
//         instagramSwiper02.autoplay.stop();
//     }, function() {
//         instagramSwiper01.autoplay.start();
//         instagramSwiper02.autoplay.start();
//     });
// });




// 이벤트 페이지 페이지네이션 버튼 활성화
// 모든 페이지 링크 요소를 선택합니다.
// const pageLinks = document.querySelectorAll('.page-link');

// // 각 페이지 링크에 focus 이벤트와 blur 이벤트를 추가합니다.
// pageLinks.forEach(link => {
//     link.addEventListener('focus', function() {
//         this.classList.add('focused'); // 포커스 시 스타일 적용
//     });
    
//     link.addEventListener('blur', function() {
//         this.classList.remove('focused'); // 포커스 해제 시 스타일 제거
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.pagination').addEventListener('click', (event) => {
        if (event.target.matches('.page-link')) {
            event.preventDefault(); // 링크의 기본 동작 방지

            // 현재 활성화된 페이지 링크의 부모 요소에서 'active' 클래스 제거
            document.querySelector('.page-item.active')?.classList.remove('active');

            // 클릭된 페이지 링크의 부모 요소에 'active' 클래스 추가
            event.target.parentElement.classList.add('active');
        }
    });
});