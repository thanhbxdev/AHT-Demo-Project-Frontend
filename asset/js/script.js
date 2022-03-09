$(document).ready(function () {
    $('.list-item-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 725,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    infinite: true,
                },
            },
        ],
    });
    $('.nav-icon').click(function (e) {
        e.preventDefault();
        $('.navbar-center').addClass('active');
        $('.close').addClass('active');
    });
    $('.close').click(function (e) {
        e.preventDefault();
        $('.navbar-center').removeClass('active');
        $('.close').removeClass('active');
    });
    $('.list-item-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                },
            },
        ],
    });
});