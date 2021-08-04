var locoScroll;
var baseUrl = 'https://d1rgwuzou45mfe.cloudfront.net';


function customCursor() {
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
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

    $(document).on("mousemove", function(e) {
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
        let tl = gsap.timeline();
        switch(Number(func)){
            case 0:
                setTimeout(()=>{
                    $('.bg1').find('.bgSectionImage').addClass('fullHeight');
                    // if(window.innerWidth < 800){
                        $('.bg2').find('.bgSectionImage').addClass('fullHeight');
                    // }
                },300)
                break;
            case 1:
                $('.bg2').find('.bgSectionImage').addClass('fullHeight');
                $('.line').addClass('lineAnim');
                tl.from(".des2 span", {
                    duration: .5,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: 2.0
                });
                break;
            case 2:
                tl.from(".head2 .scrollerHead", {
                    duration: 1,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                break;
             case 3:
                $('.img1').find('.innerImage').addClass('fullHeight');
                tl.from(".imageHead span", {
                    duration: 0.75,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                tl.from(".imgDet1 span", {
                    duration: 0.75,
                    y: 450,
                    autoAlpha: 0,
                    ease: Power1.out,
                    stagger: .0
                });
                break;
            case 4:
                $('.img2').find('.innerImage').addClass('fullHeight');
                    tl.from(".imageHead2 span", {
                        duration: 0.75,
                        y: 450,
                        autoAlpha: 0,
                        ease: Power1.out,
                        stagger: .0
                    });
                    tl.from(".imgDet2 span", {
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
function swiperImages() {
    $.ajax({
        url: baseUrl + "/swipers",
        type: 'GET',
        success: function (data) {
            if (data.length) {
                for (let i = 0; i < data.length; i++) {
                    $('.bg1 .bgSectionImage').css({ 'backgroundImage': 'url(' + baseUrl + data[0]['image']['url'] + ')' });
                    $('.bg2 .bgSectionImage').css({ 'backgroundImage': 'url(' + baseUrl + data[2]['image']['url'] + ')' });
                    $('.in' + i).css({ 'backgroundImage': 'url(' + baseUrl + data[i]['image']['url'] + ')' });
                }
            }
        },
        error: function (error) {
        },
    });
}

$(window).on('load', function(){
    customCursor();
    initiateScroll();
    let tl = gsap.timeline();

    tl.from(".head span", {
    duration: 1,
    y: 450,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5
    });
    tl.from(".des1 span", {
        duration: .75,
        y: 450,
        autoAlpha: 0,
        ease: Power1.out,
        stagger: .0
    });
    swiperImages();
});
