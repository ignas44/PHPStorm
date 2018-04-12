var r2d2 = document.getElementById('R2D2');

var topPadetis = 0;
var leftPadetis = 0;




function judeti() {
    topPadetis += 105;
    r2d2.style.top= topPadetis + "px";

}
function judetiidesine() {
    leftPadetis += 104;
    r2d2.style.left= leftPadetis + "px";

}
function judetiikaire() {
    leftPadetis -= 104;
    r2d2.style.left= leftPadetis + "px";

}
function judetiivirsu() {
    topPadetis -= 105;
    r2d2.style.top= topPadetis + "px";

}
