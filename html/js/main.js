// 프로그레스바 진행도 시작 ------------------------------
document.querySelector(".progress-bar-main").style.width = "0%";

window.addEventListener("scroll", function () {
    
    const scrollTop = document.querySelector("html").scrollTop;
    const scrollHeight = document.querySelector("html").scrollHeight;
    const clientHeight = document.querySelector("html").clientHeight;

    console.log("scrollTop: ", scrollTop);
    console.log("clientHeight: ", clientHeight);
    console.log("scrollHeight: ", scrollHeight);

    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    document.querySelector(".progress-bar-main").style.width = progress + "%";
});
// 프로그레스바 진행도 종료 ------------------------------


document.addEventListener("DOMContentLoaded", () => {

    // 메인 배너 텍스트 효과 시작 ------------------------------
    const textWave = document.querySelector(".startUp");
    if (textWave) {
        textWave.innerHTML = textWave.textContent
            .split("")
            .map((letter, idx) => {
                if (letter === " ") return " ";
                return `<span style="animation-delay:${idx * 30}ms" class="letter">${letter}</span>`;
            })
            .join("");
        }
        // 메인 배너 텍스트 효과 종료 ------------------------------


        // gsap 텍스트 효과 시작 ------------------------------
        gsap.registerPlugin(ScrollTrigger);

        const waveText = document.querySelector('.text02');
        waveText.innerHTML = waveText.textContent.split('').map(char => `<span>${char}</span>`).join('');

        const textSpans = document.querySelectorAll('.text02 span');

        // 텍스트 초기 opacity 설정
        gsap.set(textSpans, { opacity: 0 });

        // GSAP + ScrollTrigger를 사용한 애니메이션 설정
        gsap.to(textSpans, {
            scrollTrigger: {
                trigger: waveText, 
                start: "top 80%", 
                end: "bottom 20%", 
                toggleActions: "play none none reset",
            },
            opacity: 1, 
            duration: 0.3,
            ease: "power1.inOut",
            delay: 1, // 애니메이션이 1초 후에 시작
            stagger: {
                amount: 0.8, 
                from: "start",
            },
            onStart: function() {
                textSpans.forEach((span, i) => {
                    gsap.to(span, {
                        color: '#fff',  // 흰색으로 설정
                        duration: 0.3, 
                        delay: i * 0.03, 
                    });
                });
            },
        });
        // gsap 텍스트 효과 시작 ------------------------------
});