var r2d2 = document.getElementById('R2D2');
var topPadetis = 0;
var leftPadetis = 0;

function judeti() {
    topPadetis += 100;
    r2d2.style.top= topPadetis + "px";
}
function judetiidesine() {
    leftPadetis += 103.55;
    r2d2.style.left= leftPadetis + "px";
}
function judetiikaire() {
    leftPadetis -= 103.55;
    r2d2.style.left= leftPadetis + "px";
}
function judetiivirsu() {
    topPadetis -= 100;
    r2d2.style.top= topPadetis + "px";
}

// document.getElementById('profiliofoto').onclick=function () {
//     alert('Paspaudei');
//
// }
// document.getElementById('virsu').onclick=function () {
//     topPadetis -= 100;
//     r2d2.style.top= topPadetis + "px";
// }
// document.getElementById('apacia').onclick=function () {
//     topPadetis += 100;
//     r2d2.style.top= topPadetis + "px";
// }
// document.getElementById('kaire').onclick=function () {
//     leftPadetis -= 110;
//     r2d2.style.left= leftPadetis + "px";
// }
// document.getElementById('desine').onclick=function () {
//     leftPadetis += 110;
//     r2d2.style.left= leftPadetis + "px";
// }

document.onkeyup = function(e) {
    if(e.keyCode == 37) {
        judetiikaire()

    }

    if(e.keyCode == 38) {
        judetiivirsu()
    }

    if(e.keyCode == 39) {
        judetiidesine()
    }

    if(e.keyCode == 40) {
       judeti()
    }
};
