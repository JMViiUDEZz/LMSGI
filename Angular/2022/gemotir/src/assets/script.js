$(document).ready(function () {
    $(window).scroll(function () {

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

  var typed = new Typed(".typing", {
    strings: ["EXCAVACIONES GEMOTIR, S.L.L."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["EXCAVACIONES GEMOTIR, S.L.L."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
});
