let nxt = document.getElementById("next");
let prv = document.getElementById("prev");
let Line = document.getElementById("line");
let Slider = {
    sekiller: ["1.jpg", "2.jpg", "3.jpg", "basqa-mese.jpg", "mese.jpg", "odun.jpg"],
};
let Say = Slider.sekiller.length;
let i = 1;
let plus = 0;

setInterval(change, 40);
let time = setInterval(Next, 4000);

nxt.onclick = function () {
    clearInterval(time);
    Next();
    time = setInterval(Next, 4000);
    plus = 0;
    change();
}

function change() {
    plus += 8;
    if (plus <= 800) {
        Line.style.width = plus + "px";
    } else {
        plus = 0;
    }
}

function Next() {
    if (i < Say) {
        Deyis(Slider.sekiller[i]);
        i++;
    } else {
        i = 0;
        Deyis(Slider.sekiller[i]);
    }
}

prv.onclick = function () {
    plus = 0;
    change();
    if (i == 0) {
        Deyis(Slider.sekiller[i]);
        i = Say - 1;
    } else {
        i--;
        Deyis(Slider.sekiller[i]);
    }
}

function Deyis(x) {
    document.getElementById("slider").style.backgroundImage = `url("img/${x}")`;
}