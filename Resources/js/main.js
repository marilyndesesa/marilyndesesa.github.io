$(document).ready(function() {
  var scrollLength = 0
  $(window).scroll(function() {
    var scrollToTop = $(this).scrollTop();
    if (scrollToTop - scrollLength > 50) {
      var navHeight = $('header').css('header');
      $('header').animate({top: '-' + navHeight}, 150);
      scrollLength = scrollToTop;
    } else if (scrollLength - scrollToTop > 50) {
      $('header').animate({top: '0px'}, 50);
      scrollLength = scrollToTop;
    }
  });
});
