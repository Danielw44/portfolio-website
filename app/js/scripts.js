(function($) {
  "use strict";



  // ======================================
  //    Smooth Scroll to element
  // ======================================
  $(function() {
    var $scrollTo = $('.scroll-to');
    $scrollTo.on('click', function(event){
      var $elemOffsetTop = $(this).data('offset-top');
      $('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1500, easing:'easeInOutCubic', mobileHA: false});
      event.preventDefault();
    });
});

  // ======================================
  //    Smooth scroll to top button
  // ======================================
  $(function() {
    // Animated Scroll to Top Button
    var $scrollTop = $('.scroll-to-top-btn');
    if ($scrollTop.length > 0) {
      $(window).on('scroll', function(){
        if ($(window).scrollTop() > 600) {
          $scrollTop.addClass('visible');
        } else {
          $scrollTop.removeClass('visible');
        }
      });
      $scrollTop.on('click', function(e){
        e.preventDefault();
        $('html').velocity("scroll", { offset: 0, duration: 1500, easing:'easeInOutCubic', mobileHA: false });
      });
    };
});


  //------------------------------------- START: Mobile navigation setup ------------------------------------------------//

  $(function() {

    $(window).resize(function(){

      if ($(window).width() >= 1024) {
        $('.mobile-nav').css('display', 'none');
        $('.site-nav__items').css('display', 'block');

        if ($('.mobile-nav').hasClass('open-nav')) {
          $('.mobile-nav').removeClass('open-nav');
        }
      } else if ($(window).width() < 1024) {
        $('.mobile-nav').css('display', 'block');
        $('.site-nav__items').css('display', 'none');
      }

    });

    $('.mobile-nav').on('click', function() {

    	if (!$(this).hasClass('open-nav')) {
    		$(this).addClass('open-nav');
    		toggleNav(true);
    	} else {
    		$(this).removeClass('open-nav');
    		toggleNav(false);
    	}

    });

    function toggleNav(bool) {

    	if (bool === true) $('.site-nav__items').slideDown(300);
    	else $('.site-nav__items').slideUp(300);

    }

  });

  //------------------------------------- END: Mobile navigation setup ------------------------------------------------//


  })(jQuery);
