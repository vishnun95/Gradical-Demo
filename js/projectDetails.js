var baseUrl = 'https://d1rgwuzou45mfe.cloudfront.net';
var locoScroll;
var swiper;

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

  // $(".imageHolder").on("mouseenter", function () {
  //     cursor.addClass("active");
  //     follower.addClass("active");
  // });

  // $(".imageHolder").on("mouseleave", function () {
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
  $(".customCursor").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
    $(".cursor").find('span').html('DRAG');
  });

  $(".customCursor").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
    $(".cursor").find('span').html('');
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
    getDirection: true,
    inertia: 1
  });
  locoScroll.on('call', (func) => {
    console.log(func)
    switch (Number(func)) {
      case 0:
        $('.overViewSec').find('.animImage1').addClass('fullHeight');
        // setTimeout(()=>{
        //   $('.overViewSec').find('.swipeUpInit').addClass('swipeUp');
        // },1000)
        // locoScroll.update();
        break;
        case 10:
          // $('.overViewSec').find('.animImage1').addClass('fullHeight');
          setTimeout(()=>{
            $('.overViewSec').find('.swipeUpInit').addClass('swipeUp');
          },1000)
          // locoScroll.update();
          break;  
      case 1:
        $('.line').addClass('lineAnim');
        setTimeout(() => {
          $('.topBanner').find('.animImage0').addClass('fullHeight');
        }, 500)

        break;
      case 2:
        // setTimeout(()=>{
        //   $('.strategy').find('.swipeUpInit').addClass('swipeUp');
        // },1000)
        $('.strategy').find('.animImage1').addClass('fullHeight');
        break;
        case 22:
          setTimeout(()=>{
            $('.strategy').find('.swipeUpInit').addClass('swipeUp');
          },600)
          // $('.strategy').find('.animImage1').addClass('fullHeight');
          break;  
      case 3:
        $('.bottomBanner').find('.animImage0').addClass('fullHeight');
        break;
        case 1111:
          setTimeout(()=>{
            $('.card').addClass('swiperActive');
          },1000)
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

function getProjectId() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get('id');

  $.ajax({
    url: baseUrl + "/swipers/" + id,
    type: 'GET',
    success: function (data) {
      try {
        for (const i in data.slider) {
          console.log(baseUrl + data['slider'][i]['url'])
          $('.swiper-wrapper').append(
            '<div class="swiper-slide" >' +
            '<div class="card customCursor"style=background-image:url(' + baseUrl + data['slider'][i]['url'] + ')>' +
            '</div>' +
            '</div>'
          )
        }
        swiperInit();
      }
      catch (e) {
        console.log(e);
      }
      setTimeout(() => {
        initiateScroll();
        customCursor();
      }, 300)
      $('.Head').find('span').html(data?.projectName);
      $('.bannerImage').css('background-image', 'url(' + baseUrl + data?.image?.url + ')');
      $('.innerImage1').css('background-image', 'url(' + baseUrl + data?.image1?.url + ')');
      $('.innerImage2').css('background-image', 'url(' + baseUrl + data?.image2?.url + ')');
      $('.bannerImage2').css('background-image', 'url(' + baseUrl + data?.image3?.url + ')');
      $('.det1 span').html(data?.focus);
      $('.detClient span').html(data?.clientName);
      $('.overDes span').html(data?.description1);
      $('.overDes2 span').html(data?.description2);
    },
    error: function (error) {
      initiateScroll();
      customCursor();
    },
  });
}

$(document).ready(function () {

  getProjectId();
  let tl = gsap.timeline();

  tl.from(".Head span", {
    duration: 1,
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


  // gsap.from(".line", {
  //     scrollTrigger: {
  //       trigger: ".line",
  //       scroller: ".smooth-scroll",
  //       scrub: true,
  //       start: "top bottom",
  //       end: "top top"
  //     },
  //     scaleX: 0,
  //     transformOrigin: "left center", 
  //     ease: "none"
  //   });
});
