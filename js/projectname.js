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
  
    $(".customCursor").on("mouseenter", function () {
      cursor.addClass("active");
      follower.addClass("active");
    });
  
    $(".customCursor").on("mouseleave", function () {
      cursor.removeClass("active");
      follower.removeClass("active");
    });
  }

  function getProjectId () {
      var url_string = window.location.href;
      var url = new URL(url_string);
      var id = url.searchParams.get('id');

       $.ajax({
        url: baseUrl + "/swipers/" +id,
        type: 'GET',
        success: function (data) {
           console.log(data);
           document.getElementById('projectname').innerHTML = data.projectName
           document.getElementById('para1').innerHTML = data.description1
           document.getElementById('para2').innerHTML = data.description2
           document.getElementById('img1').src = baseUrl+data.image.url
            document.getElementById('img1').style.width = '100%'
             document.getElementById('img1').style.height = '100%'
             document.getElementById('img2').style.width = '100%'
             document.getElementById('img2').style.height = '100%'
             document.getElementById('img3').style.width = '100%'
             document.getElementById('img3').style.height = '100%'
             document.getElementById('img4').style.width = '100%'
             document.getElementById('img4').style.height = '100%'


            document.getElementById('img2').src = baseUrl+data.image1.url
            document.getElementById('img3').src = baseUrl+data.image2.url
            document.getElementById('img4').src = baseUrl+data.image3.url
           customCursor();
        },
        error: function (error) {
            customCursor();
        },
    });
  }

  window.onload = function () {
    customCursor();
    getProjectId();
}

