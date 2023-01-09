$(document).ready(function() {
    $('#navbar .middle-nav .fa-bars').click(function() {
        $('#navbar').addClass('toggle');
        $('#navbar .upper-nav').addClass('toggle');
        $('#navbar .middle-nav').addClass('toggle');
        $('#navbar .middle-nav .fa-times').addClass('toggle');
        $('#navbar .middle-nav .fa-bars').addClass('toggle');
        $('#navbar .middle-nav .middle-nav-third-side').addClass('toggle');
        $('#navbar .lower-nav').addClass('toggle');
        $('#navbar .lower-nav ul').addClass('toggle');
        $('#navbar .lower-nav ul li').addClass('toggle');
    });
    $('#navbar .middle-nav .fa-times').click(function() {
        $('#navbar').removeClass('toggle');
        $('#navbar .upper-nav').removeClass('toggle');
        $('#navbar .middle-nav').removeClass('toggle');
        $('#navbar .middle-nav .fa-times').removeClass('toggle');
        $('#navbar .middle-nav .fa-bars').removeClass('toggle');
        $('#navbar .middle-nav .middle-nav-third-side').removeClass('toggle');
        $('#navbar .lower-nav').removeClass('toggle');
        $('#navbar .lower-nav ul').removeClass('toggle');
        $('#navbar .lower-nav ul li').removeClass('toggle');
    });
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        // autoplay: true,
    });
    $('.deal-box-container').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            340: {
                items: 2,
            },
            600: {
                items: 3,
            },
            800: {
                items: 4,
                nav: false
            },
            1400: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    // $('.new-product-box-container').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     items: 4,
    // });
    $('.shipping-container').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1300: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
    $('.category-container').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            385: {
                items: 2,
            },
            600: {
                items: 3,
            },
            800: {
                items: 4,
                nav: false
            },
            1400: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    $('.blog-container').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            395: {
                items: 2,
            },
            800: {
                items: 3,
                nav: false
            },
            1300: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    $('.offer-container').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1300: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
    $('.go-to-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('.go-to-top').fadeIn();
            $('#navbar').addClass('active');
        } else {
            $('.go-to-top').fadeOut();
            $('#navbar').removeClass('active');
        };
    });
    $(".go-to-top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 800);
    });
});