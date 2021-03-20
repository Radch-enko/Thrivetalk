$(document).ready(function () {
  $(".nav__item").click(function (e) {
    $(".nav__item").removeClass("active");
    $(this).toggleClass("active");
  });
  setHeigth();

  $(window).resize(function () {
    setHeigth();
  });
});

function setHeigth() {
  $(".can-help__square").css("height", $(".can-help__square").css("width"));
  $(".big__square").css("height", $(".big__square").css("width"));
}
