let canvas = document.getElementById("draw");
let ctx = canvas.getContext("2d");

function drawgist() {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 300);
  ctx.lineTo(300, 300);
  ctx.stroke();

  let grad = ctx.createLinearGradient(140, 150, 120, 300);
  grad.addColorStop(0.0, "blue");
  grad.addColorStop(1.0, "purple");

  ctx.beginPath();
  ctx.moveTo(140, 150);
  ctx.fillStyle = grad;
  ctx.fillRect(140, 150, 40, 150);

  let img = new Image();
  img.src =
    "https://klv-oboi.by/img/gallery/109/thumbs/thumb_l_psh_00001980.jpg";

  let ptrn = ctx.createPattern(img, "repeat");
  ctx.beginPath();
  ctx.moveTo(210, 180);
  ctx.fillStyle = ptrn;
  ctx.fillRect(210, 180, 40, 120);

  ctx.beginPath();
  ctx.font = "16px Verdana bold";
  ctx.fillStyle = "#60016d";
  ctx.fillText("Tsdfsd", 140, 320);

  ctx.beginPath();
  ctx.font = "16px Verdana bold";
  ctx.fillStyle = "blue";
  ctx.fillText("Aasda", 210, 320);

  let y = 130;
  let value = 12;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.font = "16px Verdana";
    ctx.fillStyle = "black";
    ctx.fillText(value, 65, y);
    value -= 4;
    y += 50;
  }
}

function drawdiagr() {
  drawFillArc(550, 300, 100, 0, -Math.PI / 2, "rgb(59, 248, 239)");
  drawFillArc(550, 300, 100, -Math.PI / 2, -Math.PI, "rgb(105, 246, 95)");
  drawFillArc(550, 300, 100, -Math.PI, -3 * Math.PI / 2, "rgb(245, 248, 59)");
  drawFillArc(550, 300, 100, -3 * Math.PI / 2, -2 * Math.PI, "rgb(253, 69, 37)");
}

function drawFillArc(centerX, centerY, radius, startAngle, endAngle, backgroundColor) {
  ctx.fillStyle = backgroundColor;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle, true);
  ctx.closePath();
  ctx.fill();
}

drawgist();
drawdiagr();
