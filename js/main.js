var scrollCurrentPoistion = 0;
var lastScrollTop = 0;
var swiper;
var locoScroll;
var swiperEnded = false;
var checkIfScrollStopped = false;
var lastScrollDirection = '';

function check(element) {
  switch (element) {
    case '.slideUp':
      $(".slideUp").addClass("active");
      break;
    case '#description1':
      $("#description1").addClass("active2");
      $('.body').removeClass('invertColor');
      $('.cursor').css({ backgroundColor: "black" });

      break;
    case '#description2':
      $("#description2").addClass("active2");
      break;
    case '#line1':
      $("#line1").addClass("activeWidth");
      break;
    case '#button1':
      $("#button1").addClass("scaleUp");
      break;
    case '#header2':
      // console.log(locoScroll)
      $("#header2").addClass("active");
      break;
    case '#header3':
      $("#header3").addClass("active");
      $('.body').addClass('invertColor');
      $('.cursor').css({ backgroundColor: "white", transform: "scale(1)", fontSize: '0px' });

      break;
    case '#header4':
      // $("#grid1").addClass("active2");
      // $("#grid2").addClass("active3");
      // $("#grid3").addClass("active2");

      $('.slideUpCard').addClass('slideUpCardActive')

      $("#header4").addClass("active");
      $("#line3").addClass("activeWidth2");
      $('.desClass').addClass('active2');
      break;
    case '#line2':
      $("#line2").addClass("activeWidth2");
      break;
    case '#header5':
      $("#header5").addClass("active");
      break;
    case '#header6':
      $("#header6").addClass("active");
      $("#line4").addClass("activeWidth2");
      $("#description3").addClass("active2");
      $('#buttonBottom').addClass('active3');
      setTimeout(() => {
        $('.imageProject').addClass('imageAnim');
      }, 1000)
      break;
    case '#header7':
      $("#header7").addClass("active");
      break;
    case '#coll':
      $('.heightZero').addClass('heightOne');
      $('.zoomZero').addClass('scaleOne');
      break;
  }
}

function unCheck(element) {
  return;
  switch (element) {
    case '.slideUp':
      $(".slideUp").removeClass("active");
      break;
    case '#description1':
      $("#description1").removeClass("active2");
      break;
    case '#description2':
      $("#description2").removeClass("active2");
      break;
    case '#line1':
      $("#line1").removeClass("activeWidth");
      break;
    case '#button1':
      $("#button1").removeClass("scaleUp");
      break;
    case '#header2':
      $("#header2").removeClass("active");
      $('.body').removeClass('invertColor');
      $('.cursor').css({ backgroundColor: "black" });

      break;
    case '#header3':
      $("#header3").removeClass("active");
      break;
    case '#header4':
      $("#header4").removeClass("active");
      // $("#grid1").removeClass("active2");
      // $("#grid2").removeClass("active3");
      // $("#grid3").removeClass("active2");
      $('.slideUpCard').removeClass('slideUpCardActive')

      $("#line3").removeClass("activeWidth2");
      break;
    case '#header6':
      $("#header6").removeClass("active");
      $("#line4").removeClass("activeWidth2");
      $("#description3").removeClass("active2");
      $('#buttonBottom').removeClass('active3');
      $('.imageProject').removeClass('imageAnim');
      break;
    case '#header7':
      $("#header7").removeClass("active");
      break;
    case '#header5':
      $("#header5").removeClass("active");
      $('.desClass').removeClass('active2');
      break;
    case '#line2':
      $("#line2").removeClass("activeWidth2");
      break;
    case '#coll':
      $('.heightZero').removeClass('heightOne');
      $(".zoomZero").removeClass("scaleOne");
      break;
  }

}

function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  $(".slideUp").addClass("active");

  locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getDirection: true
  });

  // locoScroll.stop();

  locoScroll.on('scroll', (args) => {
    // Get all current elements : args.currentElements
    if (typeof args.currentElements['hey'] === 'object') {
      let progress = args.currentElements['hey'].progress;
      if (progress > 0.8 && progress < 0.9 && !swiperEnded) {
//         if (args.direction === 'down') {
//           locoScroll.stop();
//           if (checkIfScrollStopped === false) {
//             lastScrollDirection = args['direction'];
//             checkIfScrollStopped = true;
//             locoScroll.scrollTo('#line1');
//           }
//         }
      }
      // ouput log example: 0.34
      // gsap example : myGsapAnimation.progress(progress);
    }
    if (args.direction === 'down') {
      $('.header').addClass('moveUpHeader');
    } else {
      if (!checkIfScrollStopped) {
        $('.header').removeClass('moveUpHeader');
      }
    }
  });

  locoScroll.on('scroll', (func, dir, obj) => {
    // console.log(func)
    if (func['currentElements']) {
      if (func['currentElements']['el0']) {
        check('.slideUp');
        check('#description1');
        check('#line1');
        check('#button1');

        unCheck('#header2');
        unCheck('#header3');
      }
      if (func['currentElements']['el2']) {
        unCheck('#header2');
        unCheck('#header3');
        unCheck('#description2');
        unCheck('#line2');
        unCheck('#header4');
      }
      if (func['currentElements']['el3']) {
        unCheck('.slideUp');
        unCheck('#description1');
        unCheck('#line1');
        unCheck('#button1');
        check('#line2');

        check('#header2');
        check('#header3');
        check('#description2');

        unCheck('#line3');
        unCheck('#header5');
      }
      if (func['currentElements']['el4']) {
        // unCheck('#header2');
        unCheck('#header3');
        unCheck('#description2');
        unCheck('#line2');

        check('#header4');
        // check('#line3');
        // check('#header5');

        unCheck('#header6');
        unCheck('#header7');
        unCheck('#coll');
      }
      if (func['currentElements']['el5']) {
        unCheck('#header2');
        check('#header4');
        // check('#line3');
        check('#header5');

        check('#coll');
      }
      if (func['currentElements']['el6']) {

        check('#header6');
        check('#header7');
      }
      if (func['currentElements']['el7']) {
        unCheck('#coll');
        unCheck('#header4');
        unCheck('#line3');
        unCheck('#header5');
      }
    }
  })

};

$(document).ready(function () {
  swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
    initialSlide: 1,
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true,
    on: {
      slideChangeTransitionEnd: function () {
        console.log('images ready.'); // this doesn't work
      }
    }
  });

  swiper.on('slideChangeEnd', function () {
    if (swiper.isEnd && checkIfScrollStopped) {
      console.log('end', checkIfScrollStopped)
      this.swiperEnded = true;
      if (lastScrollDirection === 'down') {
        locoScroll.scrollTo('#three');
      }
      setTimeout(() => {
        console.log('entered')
        locoScroll.start();
        checkIfScrollStopped = false;
        swiper.slideTo(1);
      }, 700);
    }
  });
  var cursor = $(".cursor");

  $(window).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
  });

  $(window)
    .mouseleave(function () {
      cursor.css({
        opacity: "0",
        transform: "scale(1)",
      });
    })
    .mouseenter(function () {
      cursor.css({
        opacity: "1",
        transform: "scale(1)",
      });
    });

  $(".customCursor")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(6)",
        fontSize: '4px',
        transition: 'transform 0.2s'

      });
      setTimeout(() => {
        cursor.css({
          transform: "scale(4)",
          fontSize: '4px'
        });
      }, 200);
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(1)",
        backgroundColor: 'black',
        fontSize: '0px'
      });
      $('.cursor').css('transition', 'all 0.1s');
    });
  $(window)
    .mousedown(function () {
      cursor.css({
        transform: "scale(.2)"
      });
    })
    .mouseup(function (event) {
      try {
        if ($(event.target).hasClass('customCursor')) {
          cursor.css({
            transform: "scale(4)"
          });
        } else {
          cursor.css({
            transform: "scale(1)"
          });
        }
      } catch (e) {
        cursor.css({
          transform: "scale(1)"
        });
      }

    });
  $('.customCursor')
    .mousedown(function () {
      cursor.css({
        transform: "scale(.2)"
      });
    })
    .mouseup(function () {
      cursor.css({
        transform: "scale(4)"
      });
    });



});
