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
    }
}