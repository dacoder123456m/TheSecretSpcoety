function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{f11}");
            
        }
    }
}

//fullscreen
function makeFullScreen() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
    var elem = document.body;
    requestFullScreen(elem);
}

// Unfullscreen
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 220) {
      location.reload(true);
    }

    };

            
