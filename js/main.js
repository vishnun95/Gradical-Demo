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
        $('.desktopOnly .featureSubAnim').find('.slideUp4').addClass('active');
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

};

function intiateScrollNew(){
  $('body').removeClass('bodyHidden');
  locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    elMobile: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartPhone:{
      smooth:true
    },
    getDirection: true,
    inertia:1,
  });

  locoScroll.on('call', (func, dir, obj) => {
    console.log(func);
    if(func==='welcomeSection'){
      setTimeout(()=>{
        $('.line2').addClass('lineActive');
        $('.welcomeTop .slideUpWelcome').addClass('active');
      },200)
    }
    if(func==='welcomeSection2'){
      setTimeout(()=>{
        $('.session1 .slideUpWelcome').addClass('active');
      },200)
    }
    if(func==='welcomeSection3'){
      setTimeout(()=>{
        $('.session2 .slideUpWelcome').addClass('active');
      },200)
    }
    if(func==='welcomeSection4'){
      setTimeout(()=>{
        $('.session3 .slideUpWelcome').addClass('active');
      },200)
    }
    if(func==='collab'){
      $('.line3').addClass('lineActive');
      setTimeout(()=>{
        $('.collabTopSection .slideUpWelcome').addClass('active');
      },200)
    }
    if(func==='got'){
      setTimeout(()=>{
        $('.line4').addClass('lineActive');
        $('.gotTopSection .slideUpWelcome').addClass('active');
        $('.gotAproject .description span').addClass('active');
        $('.gotAproject .btnContainer .btn').addClass('active');
      },200)
    }
    if(func==='welcomeFeature'){
      $('.mobileOnly').find('.featureSubAnim .slideUp4').addClass('active');
    }
    $('.'+func).find('.'+func+'In').addClass('fullHeight');
    $('.'+func).find('.projectName').addClass('active');
    $('.'+func).find('.view').addClass('active');

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
}

function swiperImages() {
  $.ajax({
    url: baseUrl + "/swipers",
    type: 'GET',
    success: function (data) {
      customCursor();
      // intiateScrollNew();
      if (data.length) {
        for (const i in data) {
          if(data[i]['isCompleted']){
            $('.swiper-wrapper').append(
              '<div class="swiper-slide ">' +
              '<div class="card customCursor" style=background-image:url(' + baseUrl + data[i]['image']['url'] + ')>' +
              '</div>' +
              '<div class="projDetails">' +
              '<div class="view viewNew"><a href=projectDetails.html?id='+data[i].id+'>view</a></div>' +
              data[i]['projectName'] +
              '</div>' +
              '</div>'
            )
            $('#mobileCards').append(
              '<div class="featureCardItem mob'+i+'" >'+
              '<div class="featureCardItemInner">'+
              '<div class="featureCard mob'+i+'In" style=background-image:url(' + baseUrl + data[i]['image']['url'] + ')></div>'+
              '</div>'+
              '<div class="featureDetails overflowHiddenNew">'+
                '<div class="projectName slideUp" data-scroll data-scroll-call="mob'+i+'">'+data[i]['projectName'] +'</div>'+
                '<div class="view viewNew slideUpView"><a href=projectDetails.html?id='+data[i].id+'>VIEW</a></div>'+
              '</div>'+
            '</div>'
              )
          } else{
            $('.swiper-wrapper').append(
              '<div class="swiper-slide ">' +
              '<div class="card customCursor" style=background-image:url(' + baseUrl + data[i]['image']['url'] + ')>' +
              '</div>' +
              '<div class="projDetails">' +
              '<div class="view viewNew"><a class="bordera" href="#">IN PROGRESS</a></div>' +
              data[i]['projectName'] +
              '</div>' +
              '</div>'
            )
            $('#mobileCards').append(
              '<div class="featureCardItem  mob'+i+'">'+
              '<div class="featureCardItemInner">'+
              '<div class="featureCard  mob'+i+'In" style=background-image:url(' + baseUrl + data[i]['image']['url'] + ')></div>'+
              '</div>'+
              '<div class="featureDetails overflowHiddenNew">'+
                '<div class="projectName slideUp" data-scroll data-scroll-call="mob'+i+'">'+data[i]['projectName'] +'</div>'+
                '<div class="view viewNew slideUpView"><a class="bordera" href="#">IN PROGRESS</a></div>'+
              '</div>'+
            '</div>'
              )
          }
        }
        $('.project-img1').find('.imageHolder').css({ 'backgroundImage': 'url(' + baseUrl + data[0]['image']['url'] + ')' })
        swiperInit();
        setTimeout(()=>{
          intiateScrollNew();
        },500)
      }
    },
    error: function (error) {
      setTimeout(()=>{
        intiateScrollNew();
      },500)
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
  $('body').addClass('bodyHidden');
  swiperImages();
});


function toContact() {
  window.location = 'contact.html'
}

function toCareer() {
  window.location = 'careers.html'
}

function toFrontend() {
  window.open('https://gradical.notion.site/Creative-Front-End-Developer-fe0cd2ec050645a1849a41ad5529475c') 
}

function toDesigner() {
  window.open('https://gradical.notion.site/Mid-Level-Visual-Designer-be4682eeb7c34217b9855f20c8fe3239')
}

function toContent() {
  window.open('https://gradical.notion.site/Content-Writer-28e827b7216e4917b70d299e8305e6d5')
}

function toStrategist() {
  window.open('https://gradical.notion.site/Paid-Ads-Strategist-b71c5d8c0bbd4c3e932aa4e6a9d7612c')
}

function toMediamanager() {
  window.open('https://gradical.notion.site/Social-Media-Manager-b0f6c373c0534b0cbd8f9290889bcc7b')
}

function toMail() {
  window.location.href = "mailto:hey@gradical.xyz"
}

function toCall() {
  window.location = "tel:+91 73561 35061"
}

function toInsta() {
  window.open('https://www.instagram.com/gradicalstudio/')
}

function toLinkedin() {
  window.open('https://www.linkedin.com/company/gradical') 
}

function toFacebook() {
  window.open('https://www.facebook.com/gradicalstudio')
}