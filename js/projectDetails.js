var baseUrl = 'https://d2t8qrdrj0iymv.cloudfront.net';
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
        getDirection: true
    });
}

function swiperInit() {
    swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 50,
      initialSlide: 0,
      mousewheelControl: false,

      on: {
        slideChangeTransitionEnd: function () {
          console.log('images ready.'); // this doesn't work
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
    swiperImages();
});
