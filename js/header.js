var position;
$(document).ready(function () {
<<<<<<< HEAD
  try {
    locoScroll.on("scroll", (args) => {
      // Get all current elements : args.currentElements
      if (args.direction === "down") {
        $(".headerOuter").addClass("moveUpHeader");
      } else {
        $(".headerOuter").removeClass("moveUpHeader");
      }
=======
    try{
        locoScroll.on('scroll', (args) => {
            // console.log(args.scroll.y)
            // Get all current elements : args.currentElements
            if (args.direction === 'down') {
                $('.headerOuter').addClass('moveUpHeader');
            } else {
                $('.headerOuter').removeClass('moveUpHeader');
            }
          });
    }
    catch(e){
        console.log(e)
    }
    $('.menuActive').click(function(){
        $('.headerRight').addClass('active');
    });
    $('.popClose').click(function(){
        $('.headerRight').removeClass('active');
>>>>>>> 7d6b9876d7403be76f5d3c889cb592d1c3192058
    });
  } catch (e) {
    console.log(e);
  }
  $(".menuActive").click(function () {
    $(".headerRight").addClass("active");
  });
  $(".popClose").click(function () {
    $(".headerRight").removeClass("active");
  });

<<<<<<< HEAD
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
      console.log("scrollDown");
      $(".headerOuter").addClass("moveUpHeader");
    } else {
      console.log("scrollUp");
      $(".headerOuter").removeClass("moveUpHeader");
    }
    position = scroll;
  });
  $(".logo img").click(function () {
    window.location = "index.html";
  });
  $(".footerLogo").click(function () {
    window.location = "index.html";
  });
});
=======
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log('scrollDown', scroll);
        if (scroll > position && scroll > 30) {
            $('.headerOuter').addClass('moveUpHeader');
        } else {
            console.log('scrollUp');
            $('.headerOuter').removeClass('moveUpHeader');
        }
        position = scroll;
    });
    $('.logo img').click(function(){
        window.location = 'index.html';
    })
    $('.footerLogo').click(function(){
        window.location = 'index.html';
    })
})
>>>>>>> 7d6b9876d7403be76f5d3c889cb592d1c3192058
