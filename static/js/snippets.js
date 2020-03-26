$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled effect1");
        } else {
            //$("nav").removeClass("scrolled effect1");
        }
    });


    const logFileText = async file => {
        const response = await fetch(file)
        const text = await response.text()
        console.log(text)
        document.getElementById("tst").innerHTML =  text
    }

    elm = document.getElementById("tst")
    elm.innerHTML = '<button class="btn btn-danger">done</button>'

    logFileText('/static/module/m1.mod')
});