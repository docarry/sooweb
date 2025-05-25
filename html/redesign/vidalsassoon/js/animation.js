gsap.registerPlugin(ScrollTrigger);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video');
}

function triggerGSAPAnimation(index) {
    if (index === 1){ 
        const tlSec1 = gsap.timeline();
    
        tlSec1
        .to(".brandStory .top h2", {
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0   
        })
        .to(".brandStory .top h3", {  
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0   
        }, "-=0.1")
        .to(".brandStory .top img", {  
            duration: 2.4,
            opacity: 1,
            ease: "power2.out",
            delay: 0   
        }, "-=0.2")
        .to(".brandStory .bottom", {
            duration: 1.6,
            opacity: 1,
            ease: "power1.inOut",
            delay: 0   
        }, "-=2")
        .to(".brandStory .bottom .text .sub-text div p", {
            duration: 0.6,
            y: 0,              
            opacity: 1,        
            ease: "power2.out",
            stagger: 0.2       
        }, "-=0.6")
        .to(".brandStory .bottom .text .sub-text > p", {  
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0.2        
        }, ">")
        .to(".brandStory .bottom .content", {  
            duration: 1,
            y: 0,
            opacity: 0.5,
            ease: "power1.inOut",
            delay: 0        
        }, ">")
        .to(".brandStory .bottom .text > a", {  
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0        
        }, ">");
    }

    if (index === 2){ 
        const tlSec2 = gsap.timeline();
    
        tlSec2
        .to(".bestSeller h2", {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            delay: 0   
        })
        .to(".bestSeller #bestSeller-slide", {  
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            delay: 0   
        }, "-=0.6")
        .call(() => {
            bestSeller.autoplay.start();
        });
    }

    if (index === 3){ 
        const tlSec3 = gsap.timeline();
    
        tlSec3
        .to(".category .category-tab-name h2", {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            delay: 0   
        })
        .to(".category .nav-pills > div", {  
            duration: 0.6,
            y: 0,              
            opacity: 1,        
            ease: "power2.out",
            stagger: 0.2       
        }, "-=0.6")
        .to(".category .tab-content", {  
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            delay: 0   
        }, "-=0.6");
    }

    if (index === 4){ 
    const tlSec4 = gsap.timeline();
    
        tlSec4
        .to(".media .media-wrap h2", {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            delay: 0   
        })
        .to(".media .media-wrap iframe", {
            duration: 1,
            top: "25%",            
            opacity: 1,        
            ease: "power1.inOut",
            onComplete: () => {
                if (player && typeof player.playVideo === "function") {
                    player.playVideo();
                }
            }
        }, "-=1");
    }

    if (index === 5) {
    const tlSec5 = gsap.timeline();
        
        tlSec5
        .to(".new-wrap", {
            duration: .6,
            onStart: () => $(".new-wrap").addClass("animate-border"),
            ease: "power1.inOut",
        })
        .to(".new-wrap h2", {
            duration: .6,
            onStart: () => $(".new-wrap h2").addClass("animate-border"),
            ease: "power1.inOut",
        }, "+=0.2")
        .to(".news-item", {
            duration: .6,
            onStart: () => $(".news-item").addClass("animate-border"),
            ease: "power1.inOut",
        }, "+=0.2")
        .to(".new-wrap", {
        duration: 1,
        backgroundColor: "#282934",
        ease: "power1.inOut",
        delay: 0   
        })
        .to(".news .new-wrap h2 span", {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            delay: 0   
        });
    }
}