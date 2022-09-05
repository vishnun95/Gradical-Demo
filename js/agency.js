var locoScroll;
var baseUrl = 'http://174.138.121.68:1337';


function customCursor() {
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 1000,
        posY = 1000,
        mouseX = 1000,
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

    // $(".customCursor").on("mouseenter", function() {
    //     cursor.addClass("active");
    //     follower.addClass("active");
    // });

    // $(".customCursor").on("mouseleave", function() {
    //     cursor.removeClass("active");
    //     follower.removeClass("active");
    // });
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
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: false
        },
        tablet: {
            smooth: false
        },
        inertia: 1,
        getDirection: true
    });
    locoScroll.on('call', (func) => {
        let tl = gsap.timeline();
        switch (Number(func)) {
            case 0:
                setTimeout(() => {
                    $('.bg1').find('.bgSectionImage').addClass('fullHeight');
                    // if(window.innerWidth < 800){
                    $('.bg2').find('.bgSectionImage').addClass('fullHeight');
                    // }
                }, 300)
                break;
            case 1:
                $('.bg2').find('.bgSectionImage').addClass('fullHeight');
                
                tl.from(".des2 span", {
                    duration: 1,
                    y: 650,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: 2.0
                });
                break;
            case 2:
                $('.line').addClass('lineAnim');
                tl.from(".head2 .scrollerHead22", {
                    duration: 1,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .7
                });
                tl.from(".head2 .scrollerHead", {
                    duration: 1,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: 1.5
                });
                break;
            case 3:
                setTimeout(() => {
                    $('.img1').find('.innerImage').addClass('fullHeight');
                },300);
                tl.from(".imgDet3 span", {
                    duration: 0.75,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                tl.from(".imageHead3 span", {
                    duration: .5,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                break;
            case 32:
                setTimeout(() => {
                    $('.img2').find('.innerImage').addClass('fullHeight');
                },500);
                tl.from(".imgDet32 span", {
                    duration: 0.75,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                tl.from(".imageHead32 span", {
                    duration: .5,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                
                break;
            case 33:
                setTimeout(() => {
                    $('.img3').find('.innerImage').addClass('fullHeight');
                },300);
                tl.from(".imgDet33 span", {
                    duration: 0.75,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                tl.from(".imageHead33 span", {
                    duration: .5,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                break;
            case 35:
                setTimeout(() => {
                    $('.img5').find('.innerImage').addClass('fullHeight');
                },300);
                tl.from(".imageHead35 span", {
                    duration: .5,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                tl.from(".imgDet35 span", {
                    duration: 0.75,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                break;
            case 4:
                setTimeout(() => {
                    $('.img4').find('.innerImage').addClass('fullHeight');
                },300);
                tl.from(".imageHead4 span", {
                    duration: .5,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                tl.from(".imgDet4 span", {
                    duration: 0.75,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                break;
            case 5:
                tl.from(".awardHead .overflowHidden span", {
                    duration: 1,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                break;
        }

    });
}

// $(document).ready(function() {
//     customCursor();
//     initiateScroll();
//     let tl = gsap.timeline();

//     tl.from(".head span", {
//     duration: 1.0,
//     y: 450,
//     autoAlpha: 0,
//     ease: Power3.out,
//     stagger: 1.5
//     });
//     tl.from(".des1 span", {
//         duration: .75,
//         y: 450,
//         autoAlpha: 0,
//         ease: Power1.out,
//         stagger: .0
//     });
// });

$(document).ready(function(){
    $('body').addClass('bodyHidden');
    customCursor();
    setTimeout(()=>{
        initiateScroll();
    },1000)
    let tl = gsap.timeline();

    tl.from(".head span", {
        duration: 1,
        y: 650,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 1.5
    });
    tl.from(".des1 span", {
        duration: 1,
        y: 650,
        autoAlpha: 0,
        ease: Power1.out,
        stagger: 0
    });
    tl.from(".des3 span", {
        duration: 1,
        y: 650,
        autoAlpha: 0,
        ease: Power1.out,
        stagger: 0
    });
})
// $(window).on('load', function () {
   
// });
