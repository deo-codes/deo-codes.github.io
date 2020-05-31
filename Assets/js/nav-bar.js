$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()>150) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
});