// var baseUrl = 'http://174.138.121.68:1337';
var baseUrl = 'http://3.110.166.154:1337'
var locoScroll;
var swiper;

function customCursor() {
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

        var posX = 1000,
        posY = 1000,
        mouseX =1000,
        mouseY = 1000;

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
    $(".footerOuterWrap").on("mouseenter", function () {
        cursor.addClass("activeWhite");
        follower.addClass("activeWhite");
      });
      $(".footerOuterWrap").on("mouseleave", function () {
        cursor.removeClass("activeWhite");
        follower.removeClass("activeWhite");
      });

}


function initiateScroll() {
    $('body').removeClass('bodyHidden');
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
        getDirection: true,
        inertia:1
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
        $('.btnWrapper').find('.btn').addClass('active');

        
    });
}


$(document).ready(function () {
    $('body').addClass('bodyHidden');
    initiateScroll();
    customCursor();
    let tl = gsap.timeline();

    tl.from(".head span", {
    duration: 1,
    y: 650,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0
    });
});
