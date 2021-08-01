function initiateScroll() {
    let tl = gsap.timeline();
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: false
        },
        tablet: {
            smooth: false
        },
        getDirection: true
    });
    locoScroll.on('call', (func) => {
       switch(func){
           case 1:
               break;
       }
    });
}

$(document).ready(function () {
    initiateScroll();
    let tl = gsap.timeline();

    tl.from(".slideUpContainer .up", {
    duration: 0.75,
    y: 650,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0.0
    });
    tl.from(".topHeaderFirst .up", {
        duration: 0.75,
        y: 650,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 0.0
    });
    tl.from(".topSection .description span", {
        duration: 0.75,
        y: 450,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 0
    });
    tl.from(".topSection .btnOutWrap .btn", {
        duration: 0.3,
        y: 450,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 0
    });
    setTimeout(()=>{
        $('.topSection .line').addClass('lineActive');
    },3000);
});