$(document).ready(jQueryMain);

function jQueryMain() {
    $("#bttn").click(function () { //use a class, since your ID gets mangled
        $("body").removeClass("fadeIn").addClass("fadeOut"); //add the class to the clicked element
        setTimeout(function () {
            parent.postMessage('closeIframe', '*');
        }, 1000);
    });
}