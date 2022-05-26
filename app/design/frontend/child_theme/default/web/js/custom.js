/**
 *CUSTOM JS
 *
 */

 require( ['jquery'], function ($) {

    $(document).ready(function(){ 
        alert('1');
        var $sidebar = $('.product-info-main');
        var sidebarTop = $sidebar.position().top;
        var contentHeight = $('.product.media').outerHeight() - 10;

        $(window).scroll(fixSidebarOnScroll);

        function fixSidebarOnScroll() {
            var windowScrollTop = $(window).scrollTop();

            if (windowScrollTop >= contentHeight || windowScrollTop <= sidebarTop) {
                $sidebar.removeClass('sticky');
            }
            else if (windowScrollTop >= sidebarTop) {
                if (!$sidebar.hasClass('sticky')) {
                    $sidebar.addClass('sticky');
                }
            }
        }

        var dist = $('.page-header');
        if (dist.length) {
          var distance = dist.offset().top;
        }
        
        $(window).on("scroll", function() {
        if($(window).scrollTop() >= distance ) {
            console.log("top reched");
            $(".product-info-main").addClass("sticky-tabTitle");
            
        }
        else {
          $(".product-info-main").removeClass("sticky-tabTitle");
        }
        });
        
    });

});