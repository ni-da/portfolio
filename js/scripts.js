/*!
 * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
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
    var scroll_pos_test = 1000;
    if (y_scroll_pos > scroll_pos_test) {
        move();
    }

    if (y_scroll_pos > 667) {
        console.log(y_scroll_pos);
        $(".side1").css("animation-play-state", "running");
        $(".side2").css("animation-play-state", "running");
    }
    // else {
    //     console.log("direction change");
    //     $(".side1").css("-webkit-animation-direction", "alternate");
    //     // animation: myfirst2 5s;

    // }

});

var i = 0;

function move() {
    if (i == 0) {
        i = 1;

        var width1 = 1;
        setInterval(function() {
            if (width1 < document.getElementById("skill-bar-87").id.slice(10)) {
                width1++;
                document.getElementById("skill-bar-87").style.width = width1 + "%";
            }
        }, 5);


        var width2 = 1;
        setInterval(function() {
            if (width2 < document.getElementById("skill-bar-93").id.slice(10)) {
                width2++;
                document.getElementById("skill-bar-93").style.width = width2 + "%";
            }
        }, 5);

        var width3 = 1;
        setInterval(function() {
            if (width3 < 60) {
                width3++;
                document.getElementById("skill-bar-60").style.width = width3 + "%";
            }
        }, 5);

        var width4 = 1;
        setInterval(function() {
            if (width4 < 76) {
                width4++;
                document.getElementById("skill-bar-76").style.width = width4 + "%";
            }
        }, 5);

        var width5 = 1;
        setInterval(function() {
            if (width5 < 51) {
                width5++;
                document.getElementById("skill-bar-51").style.width = width5 + "%";
            }
        }, 5);

        var width6 = 1;
        setInterval(function() {
            if (width6 < 45) {
                width6++;
                document.getElementById("skill-bar-45").style.width = width6 + "%";
            }
        }, 5);

    }
}


function frame(element, width) {
    console.log(element, width)
    if (width < element.id.slice(10)) {
        width++;
        element.style.width = width + "%";
    }
}


var mastheadObj, imgSrc, index;
mastheadObj = document.getElementById("page-top");
index = 0;
imgSrc = [
    '././assets/img/masthead_1.jpg',
    '././assets/img/masthead_2.jpg'
];

function updateIndex() {
    if (index === 0) {
        index = 1;
    } else {
        index = 0;
    }
}
window.onload = function() {
    mastheadObj.style.backgroundImage = 'url("' + imgSrc[index] + '")';
    updateIndex();
};
mastheadObj.onmouseenter = function(e) {
    e.currentTarget.style.backgroundImage = 'url("' + imgSrc[index] + '")';
    updateIndex();
    if (index === 0) {
        mastheadObj.style.backgroundPosition = "0px -300px";
    } else {
        mastheadObj.style.backgroundPosition = "";
    }
}
mastheadObj.onmouseleave = function(e) {
    e.currentTarget.style.backgroundImage = 'url("' + imgSrc[index] + '")';
    updateIndex();
    // if (index === 0) {
    //     mastheadObj.style.backgroundPosition = "0px -300px";
    // } else {
    //     mastheadObj.style.backgroundPosition = "";
    // }
}