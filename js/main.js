document.onscroll = function() {
    if (window.scrollY > 1500) {
        setBgImage("images/night.png");
    } else {
        setBgImage("images/day.png");
    }
}

function preload() {
    function fetch(url) {
        var image = new Image();
        image.src = url;
    }

    fetch("images/day.png")
    fetch("images/night.png")
}

preload();

function setBgImage(url) {
    document.body.style.backgroundImage = "url('" + url + "')";
}