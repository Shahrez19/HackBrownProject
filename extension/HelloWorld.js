$(document).ready(jQueryMain);

function jQueryMain() {
    $(".myApp").append('<p>Added by jQuery</p>');
    $("#bttn").click(function () { //use a class, since your ID gets mangled
        $(".myApp").addClass("fadeOut"); //add the class to the clicked element
    });
}