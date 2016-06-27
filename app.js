var main = function() {
  $('.dropdown-toggle').click(function(event) {
    event.stopPropagation();  // prevents hiding dropdown menu when clicked on Gallery
    $('.dropdown-menu').toggle();
  });
  $(document).click(function(){
    $('.dropdown-menu').hide(); // hides drop menu when clicked anywhere
  });

// If an event gets to the body
$("body").click(function(){
  $(".menu-popup").hide();
  $('#header').fadeIn(1000); 
  $('.fa-close').show();
  $('.fa-arrow-left').hide()
  $('.mobile-menu').show();
  $('.mobile-submenu').hide();

});

// Prevent events from getting pass .popup
$(".icon-menu, .menu-popup").click(function(e){
  e.stopPropagation();
  $('.menu-popup').show();  

});



    /* Push the body and the nav over by 285px over */
  
  $('.icon-menu').click(function() {
    $('#header').fadeOut(200);    
    $('.menu-popup').animate({
      top: "0"
    }, 600);
  });

  /* Then push them back */
  $('.fa-close').click(function() {
    $('#header').fadeIn(1000); 
    $('.menu-popup').animate({
      top: "-150px"
    }, 400);
  });

  $('#gallery').click(function(){
    $('.mobile-menu').hide();
    $('.mobile-submenu').show(500);
    $('.fa-close').hide();
    $('.fa-arrow-left').show().click(function(){
      $('.mobile-menu').show(500);
      $('.mobile-submenu').hide();
      $('.fa-arrow-left').hide()
      $('.fa-close').show();
    });;
  });

  $('#home').click(function(){
    $('#header').fadeIn(1000); 
    $('.menu-popup').animate({
      top: "-300px"
    }, 400);
  });

  $('#about').click(function(){
    $('#header').fadeIn(1000); 
    $('.menu-popup').animate({
      top: "-300px"
    }, 400);
  });

  $('.mobile-submenu a').click(function(){
    $('#header').fadeIn(1000); 
    $('.menu-popup').animate({
      top: "-300px"
    }, 400);

    $('.mobile-menu').show(500);
    $('.mobile-submenu').hide();
    $('.fa-arrow-left').hide()
    $('.fa-close').show(500);
  });

//Load Button for more pictures
  $('#load-1-btn').click(function(){
      $('#load-1').toggle(500);
      $(this).hide();
  });
  $('#load-2-btn').click(function(){
      $('#load-2').toggle(500);
      $(this).hide();
  });
  $('#load-3-btn').click(function(){
      $('#load-3').toggle(500);
      $(this).hide();
  });
  $('#load-4-btn').click(function(){
      $('#load-4').toggle(500);
      $(this).hide();
  });

//Back to the top arrow
  $('#arrow-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
  });
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});

var fixmeTop = $('header').offset().top;       // get initial position of the element
$(window).on("load resize scroll", function(e) {                  // assign scroll event listener
    var currentScroll = $(window).scrollTop(); // get current position
    var scrollPos = $(window).scrollTop();

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('header').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0'
        });
        $('header .menu').hide();
        $('#header-name').hide();
        $('.icon-menu').show();

    }else if (currentScroll <= fixmeTop && $(window).width() > 991 ) {                                   // apply position: static
        $('header').css({                      // if you scroll above it
            position: 'static'
        });
        $('.icon-menu').hide();
        $('header .menu').fadeIn();
        $('#header-name').fadeIn();



    }else if (currentScroll <= fixmeTop && $(window).width() < 991 ) {                                   // apply position: static
        $('header').css({                      // if you scroll above it
            position: 'static'
        });
        $('header .menu').hide();
        $('#header-name').fadeIn();
        $('.icon-menu').fadeIn();
    }

});

// Changing menu-popup opacity upon scrolling
$(window).scroll(function() {
  var current = $(window).scrollTop();
  if(current > 50){
    $('.menu-popup').css({
      opacity: '0.9'
    });
  }  else{
      $('.menu-popup').css({
      opacity: '0.9'
    });
  }
  
});

$(document).ready(main);
  


