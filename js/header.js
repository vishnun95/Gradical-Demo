var position;
$(document).ready(function () {
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
    });

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
    // $('.logo img').click(function(){
    //     window.location = 'index.html';
    // })
    // $('.footerLogo').click(function(){
    //     window.location = 'index.html';
    // })
})