var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var backcontainer = document.getElementById("background-container");

var backgroundImg = new Array(
    "const/const1.jpg",
    "const/reefscaffolding.jpg",
    "const/const3.jpg",
);

let i = 0;
next.onclick = function() {
    if (i < 2) {
        backcontainer.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}
prev.onclick = function() {
    if (i > 0) {
        backcontainer.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}

