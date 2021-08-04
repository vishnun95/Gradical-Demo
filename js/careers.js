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
            smooth: false
        },
        getDirection: true
    });
    locoScroll.on('call', (func) => {
        // tl.from(".careerItem", {
        //     duration: 0.75,
        //     y: 250,
        //     autoAlpha: 0,
        //     ease: Power3.out,
        //     stagger: 0
        // });
        $('.careerItems').addClass('active');
        $('.careerItem').addClass('active');

        
    });
}


$(document).ready(function () {
    initiateScroll();
    customCursor();
    let tl = gsap.timeline();

    tl.from(".head span", {
    duration: 0.6,
    y: 650,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0
    });
});