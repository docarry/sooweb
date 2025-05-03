gsap.registerPlugin(ScrollTrigger);

function triggerGSAPAnimation(index) {
    if (index === 1){ 
        const tlSec2 = gsap.timeline();
    
        tlSec2.to(".brandStory .top h2", {
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
        .to(".brandStory .bottom .text > a", {  
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0        
        }, ">")
    }
}