var baseUrl = 'https://d1rgwuzou45mfe.cloudfront.net';
var locoScroll;
var swiper;

function customCursor() {
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $(".imageHolder").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });

    $(".imageHolder").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

}


function initiateScroll() {
    let tl = gsap.timeline();
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: false
        },
        tablet: {
            smooth: true
        },
        getDirection: true
    });
    locoScroll.on('call', (func) => {
        console.log(func)
        switch(Number(func)){
            case 0:
                $('.overViewSec').find('.swipeUpInit').addClass('swipeUp');
                $('.overViewSec').find('.animImage1').addClass('fullHeight');
                // locoScroll.update();
                break;
             case 1:
                $('.topBanner').find('.animImage0').addClass('fullHeight');
                break;
             case 2:
                $('.strategy').find('.swipeUpInit').addClass('swipeUp');
                $('.strategy').find('.animImage1').addClass('fullHeight');
                break; 
            case 3:
                $('.bottomBanner').find('.animImage0').addClass('fullHeight');
                break;                
                      
        }
        
    });
}

function swiperInit() {
    swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 0,
      mousewheelControl: false,
      breakpoints: {
        550: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        650: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        850: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 2.5
        }
      }
    });
  }

$(document).ready(function () {
    initiateScroll();
    swiperInit();
    customCursor();
    let tl = gsap.timeline();

    tl.from(".Head span", {
    duration: 0.75,
    y: 650,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5
    });

    tl.from(".detHead span", {
        duration: 0.5,
        y: 350,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 0
    });

    tl.from(".projDetails span", {
        duration: 0.5,
        y: 350,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 0
    });
   
    gsap.from(".line", {
        scrollTrigger: {
          trigger: ".line",
          scroller: ".smooth-scroll",
          scrub: true,
          start: "top bottom",
          end: "top top"
        },
        scaleX: 0,
        transformOrigin: "left center", 
        ease: "none"
      });
});
