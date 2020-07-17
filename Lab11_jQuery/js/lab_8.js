//Лабораторная №8
//Задание 1
$("#ColorSpan").mouseover(function () {
  $(this).css("color", "red");
});

$("#ColorSpan").mouseout(function () {
  $(this).css("color", "#f6e58d");
});

//Задание 2
$("#changeSize").click(function () {
  let size = parseInt($(this).css("font-size"));
  size++;
  $(this).css("font-size", size + "px");
});

//Задание 3
let pics = new Array("img/spaceship.png", "img/spaceship3.png");
let img = `<img id="image1" src="${pics[0]}">`;
$("#lab8_ex3").html(img);

//attr() получает значение атрибута
$("#image1").click(function () {
  let src =
    $(this).attr("src") == "img/spaceship.png"
      ? "img/spaceship3.png"
      : "img/spaceship.png";
  $(this).attr("src", src);
});

//Задание 4
$(".lab8_ex4").click(function () {
  $(this).html(`<img id="image2" src="${pics[1]}">`);
});

//Задание 5
$("#lab8_ex5").html(`<img id="image3" src="${pics[0]}">`);
let width = parseInt($("#image3").css("width"));
$("#image3").mouseover(function () {
  $(this).animate({ width: width + 100 }, 1000);
});
$("#image3").mouseout(function () {
  $(this).animate({ width: width }, 1000);
});

//Задание 6
$("#lab8_ex6").dblclick(function () {
  let style = $(this).css("border-width") == "0px" ? "3px" : "0px";
  $(this).css("border-width", style);
});
