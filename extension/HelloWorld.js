$(document).ready(jQueryMain);

function jQueryMain() {
    $("#bttn").click(function () { //use a class, since your ID gets mangled
        $("body").removeClass("fadeIn").addClass("fadeOut"); //add the class to the clicked element
        setTimeout(function () {
            parent.postMessage('closeIframe', '*');
        }, 1000);
    });
    var myaudio = new Audio('Ocean%20Sound%20Effect.mp3');
    myaudio.play();
    myaudio.muted = true;
    myaudio.loop = true;
    $("#bttn2").click(function () {
        if (myaudio.muted != true) {
            myaudio.muted = true;
            $("#icon").removeClass("fa-volume-up");
            $("#icon").addClass("fa-volume-off");
        } else {
            myaudio.muted = false;
            $("#icon").removeClass("fa-volume-off");
            $("#icon").addClass("fa-volume-up");
        }
    });

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}