
$(document).ready(function(){
                  
    $('.js--section-features').waypoint(function(direction){
    
    if(direction == "down"){
        $('nav').addClass('sticky');
       }else{
          $('nav').removeClass('sticky');
      }
  },{
        offset: '60px;'
    });
    
    /* button Scroll animation to the meal price-plan-section */
    $('.js--scroll-meals').click(function(){
        $('html, body').animate({scrollTop: $('.js--meal-plan').offset().top},1000);s
    });
    
     /*button Scroll animation to the meal features-section*/
    $('.js--scroll-show-more').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
     /* Navigation scroll */
    
    /*
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    */
        $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
                  
