var myVideo = document.getElementById("videoTask");
var width = document.documentElement.clientWidth;

function playPause() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

function makeBig() {
  myVideo.width = width * 0.8;
}

function makeSmall() {
  myVideo.width = width * 0.4;
}

function makeNormal() {
  myVideo.width = width * 0.6;
}
document.getElementById("lab3_map").onclick = function (e) {
  var x = e.offsetX == undefined ? e.layerX : e.offsetX;
  var y = e.offsetY == undefined ? e.layerY : e.offsetY;
  alert(x + "x" + y);
};
navigator.geolocation.getCurrentPosition(function (position) {
  document.getElementById("loc").innerHTML =
    "Ваши координаты: " +
    position.coords.latitude +
    ", " +
    position.coords.longitude;
});
