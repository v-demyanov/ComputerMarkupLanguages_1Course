let divEx1 = document.getElementById("lab9_ex1");
let body = document.getElementById("lab6");

//ЗАДАНИЕ 1
//функция изменяющая позицию элемента
function moveAt(elem) {
  elem.style.left = event.pageX - elem.offsetWidth / 2 + "px";
  elem.style.top = event.pageY - elem.offsetHeight / 2 + "px";
}
//Drag’n’Drop для картинки
$(function () {
  $("#imgEx1").draggable({ containment: "parent" });
});

//Drag’n’Drop для текстовой области
$(function () {
  $("#dtextarea").draggable();
});

//ЗАДАНИЕ 2, прямолинейное движение картинки
imgEx2.style.top = "50%";
$("#imgEx2").click(function () {
  $(this).animate({ top: 5 }, 2000);
});

//ЗАДАНИЕ 3, криволинейное движение картинки
$("#imgEx3").click(function () {
  imgEx3.style.top = "80%";
  imgEx3.style.left = "1%";
  let x = 0;
  let y;
  while (x <= 80) {
    y = 60 + 20 * Math.sin(x);
    x += 10;
    $("#imgEx3").animate(
      {
        top: y + "%",
        left: x + "%",
      },
      500
    );
  }
});

//ЗАДАНИЕ 4, графики
let form = document.all.diagramButtons;
let radio = form.r;
let select = form.colors;
let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d");
let canvasWidth = parseInt(
  window.getComputedStyle(canvas).getPropertyValue("width")
);
let canvasHeight = parseInt(
  window.getComputedStyle(canvas).getPropertyValue("height")
);

function draw() {
  let value, expr;
  let x, y, stop;
  let coefX, coefY;
  let color = select.options[select.selectedIndex].value;
  ctx.fillStyle = color;

  for (let i = 0; i < radio.length; i++)
    if (radio[i].checked) value = +radio[i].value;

  switch (value) {
    case 1:
      expr = "-Math.pow(x,2)";
      x = -10;
      stop = 10;
      coefX = 1;
      coefY = 1;
      offsetX = canvasWidth / 5;
      offserY = canvasHeight / 4;
      break;
    case 2:
      expr = "Math.pow(x,3)";
      x = -10;
      stop = 10;
      coefX = 6;
      coefY = 1;
      offsetX = canvasWidth / 5;
      offserY = canvasHeight / 5;
      break;
    case 3:
      expr = "Math.sin(x)";
      x = -10;
      stop = 10;
      coefX = 10;
      coefY = 30;
      offsetX = canvasWidth / 5;
      offserY = canvasHeight / 5;
      break;
    case 4:
      expr = "Math.cos(x)";
      x = -10;
      stop = 10;
      coefX = 10;
      coefY = 30;
      offsetX = canvasWidth / 5;
      offserY = canvasHeight / 5;
      break;
  }

  let timer = setInterval(function () {
    if (x > stop) {
      clearInterval(timer);
    } else {
      y = eval(expr);
      x += 0.1;
      ctx.fillRect(coefX * x + offsetX, coefY * y + offserY, 2, 2);
    }
  }, 20);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}
