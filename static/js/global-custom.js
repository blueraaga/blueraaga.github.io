// Normalize Carousel Heights - pass in Bootstrap Carousel items.
$.fn.carouselHeights = function() {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    var normalizeHeights = function() {

        items.each(function() { //add heights to array
            heights.push($(this).height()); 
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        }); 
        normalizeHeights(); //run it again 
    });

};

jQuery(function($){

    $(window).on('load', function(){
        $('#carouselExampleCaptions .carousel-item').carouselHeights();
    });

});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled effect1");
        } else {
            //$("nav").removeClass("scrolled effect1");
        }
    });

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled effect1");
        } else {
            //$("nav").removeClass("scrolled effect1");
        }
    });

$(document).ready(function () {
    $(window).hover(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled effect1");
        } else {
            //$("nav").removeClass("scrolled effect1");
        }
    });

$(document).hover(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled effect1");
        } else {
            //$("nav").removeClass("scrolled effect1");
        }
    });
});