$(document).ready(function () {
  $(".nav__item").click(function (e) {
    $(".nav__item").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".nav__button").click(function (e) {
    e.preventDefault();
    $("nav").toggleClass("active");
    $(".nav__button").toggleClass("active");
  });

  $(document).mouseup(function (e) {
    if ($("nav").hasClass("active")) {
      var div = $("nav");
      if (div.is(e.target) || div.has(e.target).length === 1) {
        $("nav").toggleClass("active");
        $(".nav__button").toggleClass("active");
      }
    }
  });

  $(window).on("load scroll", function () {
    if ($(this).scrollTop() >= "300") {
      $(".header__top").addClass("sticky");
    } else {
      $(".header__top").removeClass("sticky");
    }
  });

  setHeigth();
  setPaddingLeft();

  $(window).resize(function () {
    setHeigth();
    setPaddingLeft();
  });

  $(function () {
    $("a[href*=\\#]").on("click", function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $("html, body").animate({ scrollTop: dn - 120 }, 1500);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
});

function setHeigth() {
  $(".can-help__square").css("height", $(".can-help__square").css("width"));
  $(".big__square").css("height", $(".big__square").css("width"));
}

function setPaddingLeft() {
  var offset = $(".container").offset();
  $(".why-thrive__content").offset({ left: offset.left });
  $(".contact-us__content").offset({ left: offset.left });
}
