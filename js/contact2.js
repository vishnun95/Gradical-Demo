var baseUrl = 'https://d2t8qrdrj0iymv.cloudfront.net';
var emailBaseURL = 'https://d466zlemro9wi.cloudfront.net';

var locoScroll;
var swiper;
var types = [];

function contact() {
   
    var contactUS = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        Description: document.getElementById('message').value, 
        company: document.getElementById('company').value,
        type: types.toString()
    }
    // let radio = document.getElementsByName('type')
    //  for(var i = 0; i < radio.length; i++) {
    //             if(radio[i].checked) {
    //                 contactUS.type = radio[i].value;
    //             }
                
    //         }
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
        // alert('Admin team will contact you shortly');
        document.getElementById('successText').innerHTML = 'ENQUIRY SUBMITTED SUCESSFULLY :)'
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
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        type: types.toString(),
        message: document.getElementById('message').value,
    }
    //  contact.name + ' raised a query. Please reach him/her on ' + contact.phone + ' or ' + contact.email + '\n '
    $.ajax({
        url: 'https://d2krj3pr4i8060.cloudfront.net/users',
        type: 'POST',
        data: data,
        success: function (res) {
            document.getElementById('successText').innerHTML = 'ENQUIRY SUBMITTED SUCESSFULLY :)'
        },
        error: function (error) {
            console.log(error)
        }

    });
}

function customCursor() {
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

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

    $(".imageHolder").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });

    $(".imageHolder").on("mouseleave", function () {
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

}


function initiateScroll() {
    $('body').removeClass('bodyHidden');
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
        inertia:1
    });
    locoScroll.on('call', (func) => {
        // tl.from(".carrer" + func, {
        //     duration: 0.75,
        //     y: 250,
        //     autoAlpha: 0,
        //     ease: Power3.out,
        //     stagger: 1.5
        // });
        // $('.careerItems'+func).addClass('active');
    });
}

function checkSelect($this){
    console.log('page',types.indexOf($this));
    if(types.includes($this)) {
      types.splice(types.indexOf($this), 1);
    } else {
        types.push($this);
    }

    console.log(types)
   
    
 
}


$(document).ready(function () {
    customCursor();
    $('body').addClass('bodyHidden');
    setTimeout(()=>{
        initiateScroll();
    },1200)
    let tl = gsap.timeline();
    $("input").on("input", function() {
        if($(this).val()){
            $(this).closest('.fieldInput').addClass('active');
        }else{
            $(this).closest('.fieldInput').removeClass('active');
        } 
     });

     $("textarea").on("input", function() {
        if($(this).val()){
            $(this).closest('.fieldInput').addClass('active');
        }else{
            $(this).closest('.fieldInput').removeClass('active');
        } 
     });

     $('.checkBoxWrap').click(function(){
        $(this).toggleClass('activeCheck');
    });
    tl.from(".head span", {
    duration: 1,
    y: 650,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: .3
    });
    tl.from(".left span", {
        duration: 0.75,
        y: 250,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: .2
    });
    tl.from(".contactDes span", {
        duration: 0.5,
        y: 250,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 0
    });
    tl.from(".contactLink a", {
        duration: 0.75,
        y: 250,
        autoAlpha: 0,
        ease: Power3.out,
        stagger: 0
    });
});
