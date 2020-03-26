// // Normalize Carousel Heights - pass in Bootstrap Carousel items.
// $.fn.carouselHeights = function() {

//     var items = $(this), //grab all slides
//         heights = [], //create empty array to store height values
//         tallest; //create variable to make note of the tallest slide

//     var normalizeHeights = function() {

//         items.each(function() { //add heights to array
//             heights.push($(this).height()); 
//         });
//         tallest = Math.max.apply(null, heights); //cache largest value
//         items.each(function() {
//             $(this).css('min-height',tallest + 'px');
//         });
//     };

//     normalizeHeights();

//     $(window).on('resize orientationchange', function () {
//         //reset vars
//         tallest = 0;
//         heights.length = 0;

//         items.each(function() {
//             $(this).css('min-height','0'); //reset min-height
//         }); 
//         normalizeHeights(); //run it again 
//     });

// };

// jQuery(function($){

//     $(window).on('load', function(){
//         $('#carouselExampleCaptions .carousel-item').carouselHeights();
//     });

// });


var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 5000,
  pause: "false"
});




$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled effect1");
        } else {
            //$("nav").removeClass("scrolled effect1");
        }
    });


});