var emailBaseURL = 'https://d466zlemro9wi.cloudfront.net'; //send mail 
var baseUrl = 'https://d1rgwuzou45mfe.cloudfront.net'; // api call contact


function contact() {
   
    var contactUS = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        Description: document.getElementById('message').value, 
        company: document.getElementById('company').value,
    }
    let radio = document.getElementsByName('type')
     for(var i = 0; i < radio.length; i++) {
                if(radio[i].checked) {
                    contactUS.type = radio[i].value;
                }
                
            }
   console.log(contactUS);
   if(contactUS.name == '' && contactUS.email == '' && contactUS.phone == '' && contactUS.company == '') {
       alert('Please fill all fields');
       return;
   }
    else {
         $.ajax({
    url: baseUrl + "/contacts",
    type: 'POST',
    data: contactUS,
    success: function  (data) {
        console.log(data);
        alert('Admin team will contact you shortly');
        sendMail(contactUS)
    },
    error: function(error) {
        console.log(error);
        alert('Invalid Email or Phone Number')
    }
   
  });
    }
}

function sendMail(contact) {
    
    let data = {
        email:  'hey@gradical.xyz',
        message: 'Hi Team \n \n Name: '+ contact.name + '\n Email: '+ contact.email + '\n Phone: '+ contact.phone + '\n Type: ' + contact.type + '\n Message:' + contact.Description
    }
    //  contact.name + ' raised a query. Please reach him/her on ' + contact.phone + ' or ' + contact.email + '\n '
    $.ajax({
        url:'https://d2krj3pr4i8060.cloudfront.net/users',
        type: 'POST',
        data: data,
        success: function (res) {
            alert(res);
        },
        error: function (error) {
            console.log(error)
        }

    });
}

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


window.onload = function () {
  
    $(".slideUp").addClass("active");
    customCursor();
  
}
