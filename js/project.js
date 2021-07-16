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
                }
            }
        },
        error: function (error) {
            customCursor();
        },
    });
}

$(document).ready(function () {
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getDirection: true
    });

    swiperImages();
});
