var oneTextPosition = $('#one-info').offset().top - 600;
var twoTextPosition = $('#two-info').offset().top - 1000;
var threeTextPosition = $('#three-info').offset().top - 1350;
// var oneImgPos = $('img').offset().top;


$(document).ready(function() {


      $('.link').on('click', function() {
          var page = $(this).attr('href'); // get the page ID from href attribute

          $('html, body').animate({
              scrollTop: $(page).offset().top // logic to dynamically scroll to desired page
          }, 1000);
      });


    $('.home_img').fadeIn(2000);


    function workScroll(){
      var scrolltop = $(window).scrollTop();
      var scrollamount = (scrolltop / (docheight-windowheight)) * 100;
      $('#one-info').css('top', "-scrolltop * .2 + 'px'");
    }


    $(window).on('scroll', function() {
      	var distanceScrolled = $(window).scrollTop();


      	// console.log('The distance scrolled is: ' + distanceScrolled);
      	if (distanceScrolled >= 520) {
      		$('.ad, .design').fadeIn(1000);
        } else if (distanceScrolled <= 640) {
          $('.ad, .design').fadeOut(1000);
        }

        if (distanceScrolled >= 860) {
          $('#work_h1').fadeIn(1000);
        } else if (distanceScrolled <= 870) {
          $('#work_h1').fadeOut(1000);
        }

        // workScroll();
        // var docheight = $(document).height(); // height of entire document
        // var windowheight = $(window).height();// height of browser window

        var scrolltop = $(window).scrollTop();

        $('#one-info').css('top', oneTextPosition - (scrolltop * .5));
        $('#two-info').css('top', twoTextPosition - (scrolltop * .5));
        $('#three-info').css('top', threeTextPosition - (scrolltop * .5));
        // $('img').css('top', oneImgPos - (scrolltop * .2) - 1000)
      });

});
