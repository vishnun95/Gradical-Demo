var baseUrl = 'https://d1rgwuzou45mfe.cloudfront.net';
var locoScroll;

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
        if($(this).hasClass('wipCursor')){
            $(".cursor").find('span').html('WIP');
        }else{
            $(".cursor").find('span').html('VIEW');
        }
        cursor.addClass("active");
        follower.addClass("active");
    });

    // $(".wipCursor").on("mouseenter", function () {
    //     $(".cursor").find('span').html('WIP');
    //     cursor.addClass("active");
    //     follower.addClass("active");
    // });

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
                    if(data[i]['isCompleted']){
                        // $('.project-img' + i).addClass('wipCursor');
                    }else{
                        $('.project-img' + i).find('.imageHolder').addClass('wipCursor');
                        $('.project-img' + i).addClass('wipCursorParent');
                    }
                }
            }
        },
        error: function (error) {
            customCursor();
        },
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
        console.log(func)
        switch(Number(func)){
            case 0:
                setTimeout(()=>{
                    $('.span0').addClass('swipeUp');
                    $('.span0').closest('.projectSectionItem').find('.projectName span').addClass('swipeUp');
                    $('.span0').closest('.projectSectionItem').find('.imageWrap').addClass('fullHeight');
                    $('.span0').closest('.projectSectionItem').find('.projectRight').addClass('animInProgress');
                },400); 
                break;
             case 1:
                $('.lineCall1').addClass('lineAnim');
                setTimeout(()=>{
                    $('.span1').addClass('swipeUp');
                    $('.span1').closest('.projectSectionItem').find('.projectName span').addClass('swipeUp');
                    $('.span1').closest('.projectSectionItem').find('.imageWrap').addClass('fullHeight');
                    $('.span1').closest('.projectSectionItem').find('.projectRight').addClass('animInProgress');
                },500)
                break;
             case 4:
                $('.lineCall4').addClass('lineAnim');
                setTimeout(()=>{
                    $('.span2').addClass('swipeUp');
                    $('.span2').closest('.projectSectionItem').find('.projectName span').addClass('swipeUp');
                    $('.span2').closest('.projectSectionItem').find('.imageWrap').addClass('fullHeight');
                    $('.span2').closest('.projectSectionItem').find('.projectRight').addClass('animInProgress');
                },500); 
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

$(document).ready(function (e) {
    $('body').addClass('bodyHidden');
    setTimeout(()=>{
        initiateScroll();
    },1200);
    let tl = gsap.timeline();

    tl.from(".Head span", {
    duration: 1,
    y: 350,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5
    });
    gsap.from(".line11", {
        scrollTrigger: {
          trigger: ".line11",
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
            if($(this).find('.imageHolder').hasClass('wipCursor')){

            }else{
                if($(this).find('.imageHolder').attr("data-id")){
                    window.location = 'projectDetails.html?id='+$(this).find('.imageHolder').attr("data-id");
                }
            }
        }catch(e){
            console.log(e)
        }
        
    })
});
