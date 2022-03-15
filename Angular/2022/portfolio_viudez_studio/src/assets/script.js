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

/*  var typed = new typed(".typing", {
        strings: ["Estudiante", "Desarrollador", "Diseñador", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new typed(".typing-2", {
        strings: ["Estudiante", "Desarrollador", "Diseñador", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
*/
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
});
