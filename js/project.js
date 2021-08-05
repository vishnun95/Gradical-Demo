var baseUrl = 'https://d1rgwuzou45mfe.cloudfront.net';
var locoScroll;

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
    $(".footerOuterWrap").on("mouseenter", function () {
        cursor.addClass("activeWhite");
        follower.addClass("activeWhite");
      });
      $(".footerOuterWrap").on("mouseleave", function () {
        cursor.removeClass("activeWhite");
        follower.removeClass("activeWhite");
      });

}

function swiperImages() {
    $.ajax({
        url: baseUrl + "/swipers",
        type: 'GET',
        success: function (data) {
            customCursor();
            if (data.length) {
                for (let i = 0; i < data.length; i++) {
                    $('.project-img' + i).find('.imageHolder').css({ 'backgroundImage': 'url(' + baseUrl + data[i]['image']['url'] + ')' });
                    $('.project-img' + i).find('.imageHolder').attr('data-id', data[i]['id']);
                    $('.project-img' + i).find('.projectName span').html(data[i]['projectName']);
                }
            }
        },
        error: function (error) {
            customCursor();
        },
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
        console.log(func)
        switch(Number(func)){
            case 0:
                setTimeout(()=>{
                    $('.span0').addClass('swipeUp');
                    $('.span0').closest('.projectSectionItem').find('.projectName span').addClass('swipeUp');
                    $('.span0').closest('.projectSectionItem').find('.imageWrap').addClass('fullHeight');
                },400); 
                break;
             case 1:
                $('.span1').addClass('swipeUp');
                $('.span1').closest('.projectSectionItem').find('.projectName span').addClass('swipeUp');
                $('.span1').closest('.projectSectionItem').find('.imageWrap').addClass('fullHeight');
                $('.line2').addClass('lineAnim');
                break;
             case 2:
                setTimeout(()=>{
                    $('.span2').addClass('swipeUp');
                    $('.span2').closest('.projectSectionItem').find('.projectName span').addClass('swipeUp');
                    $('.span2').closest('.projectSectionItem').find('.imageWrap').addClass('fullHeight');
                    $('.line3').addClass('lineAnim');
                },1000); 
                break;       
        }
    });
    // locoScroll.on('scroll', (func, dir, obj) => {
    //     console.log(func)
    //     if (func['currentElements']) {
    //         console.log(func['currentElements'])
    //         if (func['currentElements']['el0']) {
    //             tl.from(".projectHead span", {
    //                 duration: 0.75,
    //                 y: 350,
    //                 autoAlpha: 0,
    //                 ease: Power3.out,
    //                 stagger: 1.5
    //             });
    //             tl.from(".projectDescription span", {
    //                 duration: 0.75,
    //                 y: 350,
    //                 autoAlpha: 0,
    //                 ease: Power3.out,
    //                 stagger: 1.5
    //             });
    //         }
    //     }
    // });
}

$(document).ready(function () {
    initiateScroll();
    let tl = gsap.timeline();

    tl.from(".Head span", {
    duration: 1,
    y: 350,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5
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
    $('.projectImage').click(function($event){
        try{
            if($(this).find('.imageHolder').attr("data-id")){
                window.location = 'projectDetails.html?id='+$(this).find('.imageHolder').attr("data-id");
            }
        }catch(e){
            console.log(e)
        }
        
    })
});
