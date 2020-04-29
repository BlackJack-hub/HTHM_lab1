var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var button = document.getElementById("play");

var refresh = function () {
  ctx.clearRect(0, 0, 700, 700);
  for (i = 0; i < 600; i++) {
    var x = Math.floor(Math.random() * 700);
    var y = Math.floor(Math.random() * 700);
    var radius = Math.floor(Math.random() * 20);

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI * 2, 0, false);
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
    drawSquare(canvas, ctx, r, g, b);
    ctx.fill();
    ctx.closePath();
  }
};
function drawSquare(canvas, context, r, g, b) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var w = 20 + Math.floor(Math.random() * 20);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = "rgba(" + r + "," + g + "," + b + ",.8)";
  context.fillRect(x, y, w, w);
}

refresh();
button.addEventListener("click", refresh, false);
var canvas = document.getElementById("cnvs");
var ctx2 = canvas.getContext("2d");

var xInt = 0,
  timer;

Cosin();

function Cosin() {
  let z = Math.cos(xInt);
  if (xInt >= 200) {
    x = 0;
  } else {
    xInt += 0.3;
  }
  ctx2.fillRect(5 * xInt, 100 + 20 * z, 5, 5);
  timer = setTimeout(Cosin, 50);
}
ctx2.beginPath();
ctx2.moveTo(100, 200);
ctx2.lineTo(100, -200);
ctx2.closePath();
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(200, 200);
ctx2.lineTo(200, -200);
ctx2.closePath();
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(0, 70);
ctx2.lineTo(330, 70);
ctx2.closePath();
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(0, 140);
ctx2.lineTo(330, 140);
ctx2.closePath();
ctx2.stroke();
ctx2.beginPath();
ctx2.arc(40, 30, 30, 0, 2 * Math.PI);
ctx2.stroke();

var canvas = document.getElementById("myCanvas"),
  context = canvas.getContext("2d");

context.fillStyle = "blue";
context.fillRect(50, 50, 100, 100);

context.rotate(0.52);

context.globalAlpha = 0.5;
context.fillStyle = "red";
context.fillRect(50, 50, 100, 100);
