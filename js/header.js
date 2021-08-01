$(document).ready(function () {
    locoScroll.on('scroll', (args) => {
        // Get all current elements : args.currentElements
        if (args.direction === 'down') {
          $('.headerOuter').addClass('moveUpHeader');
        } else {
          if (!checkIfScrollStopped) {
            $('.headerOuter').removeClass('moveUpHeader');
          }
        }
      });
    $('.menuActive').click(function(){
        $('.headerRight').addClass('active');
    });
    $('.popClose').click(function(){
        $('.headerRight').removeClass('active');
    });

})