$(document).ready(function() {

    //smooth scroll
    $(function() {
        $('#secondaryHeader a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 200
                    }, 1000);
                    return false;
                }
            }
        });
    });

    //end smooth scrol
    //click to top
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#backToTop').fadeIn('slow');
        } else {
            jQuery('#backToTop').fadeOut('slow');
        }
    });
    jQuery('#backToTop').click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //end click to top
    //highlight current menu
    var url = window.location.href;
    $('#leftMenu ul li a').filter(function() {
        return this.href == url;
    }).addClass('active')

    $("#secondaryHeader ul li a").click(function(event) {
        $('#secondaryHeader ul li a').removeClass('active');
        $(this).addClass('active');
    });

    //end highlight menu
    $(function() {
        jQuery('[data-toggle="tooltip"]').tooltip();
    })
});
