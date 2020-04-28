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
