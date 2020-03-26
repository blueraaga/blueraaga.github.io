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


    const setModules = async () => {
        // Header
        const r_header = await fetch('/static/module/header.mod')
        const c_header = await r_header.text()
        console.log("Mod Header obtained")
        document.getElementById("br-header").innerHTML = c_header

        // Footer
        const r_footer = await fetch('/static/module/footer.mod')
        const c_footer = await r_footer.text()
        console.log("Mod Footer obtained")
        document.getElementById("br-footer").innerHTML = c_footer
    }

    setModules()
});