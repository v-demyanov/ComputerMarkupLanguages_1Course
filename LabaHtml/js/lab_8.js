//Лабораторная №8
let span1 = document.getElementById("ColorSpan");
let span2 = document.getElementById("changeSize");
//Задание 1
span1.onmouseover = function() {
  let target = event.target;
  target.style.color = "red";
};

span1.onmouseout = function() {
  let target = event.target;
  target.style.color = "#f6e58d";
};
//Задание 2
span2.onclick = function() {
  let target = event.target;
  let size = parseInt(
    window.getComputedStyle(target).getPropertyValue("font-size")
  );
  //getComputedStyle получает свойства селектора
  size++;
  console.log(size);
  target.style.fontSize = size + "px";
};
//Задание 3
let pics = new Array("img/spaceship.png", "img/spaceship3.png");
let divEx3 = document.getElementById("lab8_ex3");
let img = `<img id="image1" src="${pics[0]}" onclick="changeImg()">`;
divEx3.innerHTML = img;

function changeImg() {
  let xid = event.srcElement.id;
  document.all[xid].src = pics[1];
}
//Задание 4
let p = document.getElementById("lab8_ex4");
p.onclick = function changeStr() {
  p.innerHTML = `<img id="image2" src="${pics[1]}">`;
};
//Задание 5
let divEx5 = document.getElementById("lab8_ex5");
divEx5.innerHTML = `<img id="image3" src="${pics[0]}">`;
let img3 = document.getElementById("image3");
let width = parseInt(window.getComputedStyle(img3).getPropertyValue("width"));
img3.onmouseover = function() {
  this.style.width = width + 100 + "px";
};

img3.onmouseout = function() {
  this.style.width = width + "px";
};
//Задание 6
let p2 = document.getElementById("lab8_ex6");
p2.ondblclick = function drawFrame() {
  p2.style.border = "3px solid green";
};