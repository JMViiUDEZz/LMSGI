$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('header #navbar').addClass("sticky");
        } else {
            $('header #navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('header #up-btn').addClass("show");
        } else {
            $('header #up-btn').removeClass("show");
        }
    });

    $('header #up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('header #navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    $('header nav .max-width .menu-btn').click(function () {
        $('header #navbar .menu').toggleClass("active");
        $('header nav .max-width .menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Estudiante", "Desarrollador", "Diseñador", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Estudiante", "Desarrollador", "Diseñador", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $('a.facebook').click(function (e) {
        e.preventDefault();
        window.open('https://www.facebook.com/');

    });
    $('a.twitter').click(function (e) {
        e.preventDefault();
        window.open('https://www.twitter.com/');

    });
    $('a.instagram').click(function (e) {
        e.preventDefault();
        window.open('https://www.instagram.com/');

    });
    $('a.youtube').click(function (e) {
        e.preventDefault();
        window.open('https://www.youtube.com/');

    });
    $('a.linkedin').click(function (e) {
        e.preventDefault();
        window.open('https://es.linkedin.com/');

    });
    $('a.email').click(function (e) {
        e.preventDefault();
        window.open('https://mail.google.com/mail/');

    });
    $('a.map').click(function (e) {
        e.preventDefault();
        window.open('https://www.google.es/maps/place/Almer%C3%ADa/@36.841523,-2.4921361,13z/data=!3m1!4b1!4m5!3m4!1s0xd7a9e00ecccf2c1:0x8d9da01f8ebc485e!8m2!3d36.834047!4d-2.4637136?hl=es');

    });

});
