var myVideo = document.getElementById("videoTask");

function playPause() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

function makeBig() {
  myVideo.width = 960;
}

function makeSmall() {
  myVideo.width = 520;
}

function makeNormal() {
  myVideo.width = 780;
}
document.getElementById("lab3_map").onclick = function (e) {
  var x = e.offsetX == undefined ? e.layerX : e.offsetX;
  var y = e.offsetY == undefined ? e.layerY : e.offsetY;
  alert(x + "x" + y);
};
