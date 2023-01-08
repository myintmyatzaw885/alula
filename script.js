$(document).ready(function() {
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
});