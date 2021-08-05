var scrollCurrentPoistion = 0;
var lastScrollTop = 0;
var swiper;
var locoScroll;
var swiperEnded = false;
var checkIfScrollStopped = false;
var lastScrollDirection = '';
var baseUrl = 'https://d1rgwuzou45mfe.cloudfront.net';

function check(element) {
  switch (element) {
    case '.slideUp':
      $(".slideUp").addClass("active");
      break;
    case '#description1':
      $("#description1").addClass("active2");
      $('.body').removeClass('invertColor');
      // $('.cursor').css({ backgroundColor: "black" });
      // $('.cursor').css({ 'transform': 'scale(0.8)' })

      break;
    case '#description2':
      $("#description2").addClass("active2");
      break;
    case '#line1':
      $("#line1").addClass("activeWidth");
      setTimeout(() => {
        $('.card').addClass('swiperActive');
      }, 500);
      break;
    case '#button1':
      $("#button1").addClass("scaleUp");
      break;
    case '#header2':
      // console.log(locoScroll)
      $("#header2").addClass("active");
      setTimeout(()=>{
        $("#header3").addClass("active");
        setTimeout(()=>{
          $('#descri').addClass('active');
        },200)
      },300);
      break;
    case '#header3':
      setTimeout(()=>{
        $("#header3").addClass("active");
        $('#descri').addClass('active');
      },500)
      $('.body').addClass('invertColor');
      $('.slideUp4').css({opacity: 1});

      break;
    case '#header4':
      // $("#grid1").addClass("active2");
      // $("#grid2").addClass("active3");
      // $("#grid3").addClass("active2");
      $('.slideUpCard').addClass('slideUpCardActive')
      $("#line3").addClass("activeWidth2");
      break;
    case '#line2':
      $("#line2").addClass("activeWidth2");
      break;
    case '#header5':
      setTimeout(()=>{
        $('.desClass').addClass('active2');
        $("#header4").addClass("active");
        $("#header5").addClass("active");
      },800)
      break;
    case '#header6':
      $("#line4").addClass("activeWidth2");
      setTimeout(() => {
        $("#header6").addClass("active");
        setTimeout(()=>{
          $('#buttonBottom').addClass('active3');
        },700);
        $("#description3").addClass("active");
        $('.imageProject').addClass('imageAnim');
        $("#header7").addClass("active");
      }, 700)
      break;
    case '#header7':
      // $("#header7").addClass("active");
      break;
    case '#coll':
      setTimeout(()=>{
        $('.heightZero').addClass('heightOne');
        $('.zoomZero').addClass('scaleOne');
      },700);
      break;
  }
}

function unCheck(element) {
  
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
      // $('.card').removeClass('swiperActive');
      break;
    case '#button1':
      $("#button1").removeClass("scaleUp");
      break;
    case '#header2':
      $("#header2").removeClass("active");
      $('.body').removeClass('invertColor');
      $("#header3").removeClass("active");
      $('#descri').removeClass('active');
      // $('.cursor').css({ backgroundColor: "black" });

      break;
    case '#header3':
      $("#header3").removeClass("active");
      $('#descri').removeClass('active');
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
    getDirection: true,
    inertia:1
  });

  // locoScroll.stop();

 

  locoScroll.on('scroll', (func, dir, obj) => {
    if (func['currentElements']) {
      if (func['currentElements']['el0'] || func['currentElements']['0']) {
        check('.slideUp');
        check('#description1');
        check('#line1');
        check('#button1');

        unCheck('#header2');
        // unCheck('#header3');
      }
      if (func['currentElements']['el2'] || func['currentElements']['2']) {
        unCheck('#header2');
        // unCheck('#header3');
        // unCheck('#description2');
        // unCheck('#line2');
        // unCheck('#header4');
         check('#line2');
      }
      if (func['currentElements']['el3'] || func['currentElements']['3']) {
        // unCheck('.slideUp');
        unCheck('#description1');
        // unCheck('#line1');
        // unCheck('#button1');
       

        check('#header2');
        check('#header3');
        check('#description2');

        // unCheck('#line3');
        // unCheck('#header5');
      }
      if (func['currentElements']['el4'] || func['currentElements']['4']) {
        // unCheck('#header2');
        // unCheck('#header3');
        // unCheck('#description2');
        // unCheck('#line2');

        check('#header4');
        // check('#line3');
        // check('#header5');

        // unCheck('#header6');
        // unCheck('#header7');
        // unCheck('#coll');
      }
      if (func['currentElements']['el5'] || func['currentElements']['5']) {
        unCheck('#header2');
        check('#header4');
        // check('#line3');
        check('#header5');

        check('#coll');
      }
      if (func['currentElements']['el6'] || func['currentElements']['6']) {

        check('#header6');
        check('#header7');
      }
      if (func['currentElements']['el7'] || func['currentElements']['7']) {
        // unCheck('#coll');
        // unCheck('#header4');
        // unCheck('#line3');
        // unCheck('#header5');
      }
    }
  })

};

function swiperImages() {
  $.ajax({
    url: baseUrl + "/swipers",
    type: 'GET',
    success: function (data) {
      customCursor();
      if (data.length) {
        for (const i in data) {
          $('.swiper-wrapper').append(
            '<div class="swiper-slide ">' +
            '<div class="card customCursor" style=background-image:url(' + baseUrl + data[i]['image']['url'] + ')>' +
            '</div>' +
            '<div class="projDetails">' +
            '<div class="view"><a href=projectDetails.html?id='+data[i].id+'>view</a></div>' +
            data[i]['projectName'] +
            '</div>' +
            '</div>'
          )
          $('#mobileCards').append(
            '<div class="featureCardItem">'+
            '<div class="featureCard" style=background-image:url(' + baseUrl + data[i]['image']['url'] + ')></div>'+
            '<div class="featureDetails">'+
              '<div class="projectName">'+data[i]['projectName'] +'</div>'+
              '<div class="view"><a href=projectDetails.html?id='+data[i].id+'>VIEW</a></div>'+
            '</div>'+
          '</div>'
            )
        }
        $('.project-img1').find('.imageHolder').css({ 'backgroundImage': 'url(' + baseUrl + data[0]['image']['url'] + ')' })
        swiperInit();
      }
    },
    error: function (error) {
      customCursor();
    },
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
}

function customCursor() {
  var cursor = $(".cursor"),
    follower = $(".cursor-follower");
    // $(window).load(function(eventObj){
    //   console.log(eventObj);
    // });
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

  setTimeout(()=>{
    $(".customCursor").on("mouseenter", function () {
      cursor.addClass("active");
      follower.addClass("active");
    });

    $(".customCursor").on("mouseleave", function () {
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
  },1000);
}

$(document).ready(function () {
  swiperImages();
});
