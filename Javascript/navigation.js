var currentiframe = document.getElementById("ifr2");
var lastFrameGame = false;

function LoadHome() {
    SwapFrame()
    currentiframe.src = "catalog.html";
    currentiframe.height = "1000vw";
}

function SwapFrame() {
    currentiframe.height = "0px";
    if (currentiframe == document.getElementById("ifr1")) {
        currentiframe = document.getElementById("ifr2");
    } else {
        currentiframe = document.getElementById("ifr1");
    }
}

function write() {
    // do nothing
}

setTimeout(function () { LoadHome(); }, 100);
write();