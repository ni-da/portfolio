(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    if (y_scroll_pos > 1000) {
        $(".skill-bar-87").css("animation-play-state", "running");
        $(".skill-bar-93").css("animation-play-state", "running");
        $(".skill-bar-60").css("animation-play-state", "running");
        $(".skill-bar-76").css("animation-play-state", "running");
        $(".skill-bar-51").css("animation-play-state", "running");
        $(".skill-bar-45").css("animation-play-state", "running");
    }

    if (y_scroll_pos > 667) {
        $(".side1").css("animation-play-state", "running");
        $(".side2").css("animation-play-state", "running");
    }
});