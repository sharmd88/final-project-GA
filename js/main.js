$(document).ready(function() {

      $('.link').on('click', function() {
          var page = $(this).attr('href'); // get the page ID from href attribute

          $('html, body').animate({
              scrollTop: $(page).offset().top // logic to dynamically scroll to desired page
          }, 1000);
      });

  });

$('header').on('scroll', function() {
  $('header').addClass('.home');
});

$(window).on('scroll', function() {
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);
	if (distanceScrolled >= 600) {
		$('.ad, .design').fadeIn(1000);
  } else if (distanceScrolled <= 640) {
    $('.ad, .design').fadeOut(1000);
  }
});
