// Задание 1

function fun1() {
  alert("Вас приветствует учебный центр!");
}

function fun2() {
  let name = prompt("Введите имя: ");
  alert("Добро пожаловать на наши курсы, " + name);
}

function fun3() {
  let check = confirm("Хотите стать Web-дизайнером?");
  if (check == true) {
    alert("Учите стили CSS и JavaScript!");
  } else {
    alert("Упускаете время!");
  }
}

// Задание 2
function sum() {
  let parrentElement = document.getElementById("ex2");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  p1.innerHTML = 10 + 5 + "</br>";
  parrentElement.append(p1);
  p4.innerHTML = "10" + "5" + "</br>";
  parrentElement.append(p4);
  p2.innerHTML = 22 + "5" + "</br>";
  parrentElement.append(p2);
  p3.innerHTML = "22" + 5 + "</br>";
  parrentElement.append(p3);
}

//Задание 3
function mod() {
  let parrentElement = document.getElementById("ex3");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let x = 3,
    y = 2;
  let count1 = (35 * y - 25 * x) / 5 + 232,
    count2 = ((8 * y) / x + (5 * x) / y - 43) * 6;
  let result = count1 % count2;
  p1.innerHTML = count1 + "</br>";
  parrentElement.append(p1);
  p2.innerHTML = count2 + "</br>";
  parrentElement.append(p2);
  p3.innerHTML = result + "</br>";
  parrentElement.append(p3);
}

//Задание 4
function findRes() {
  let parrentElement = document.getElementById("ex4");
  let p1 = document.createElement("p");
  let count = 0;
  count = prompt("Введите число 20>a>40, и а!=15, и a%5=0: ");
  if ((count < 20 || count > 40) && count != 15 && count % 5 == 0) {
    p1.innerHTML = "Правильное значение";
    parrentElement.append(p1);
  } else {
    p1.innerHTML = "Не правильное значение";
    parrentElement.append(p1);
  }
}

//Задание 5
function comparing() {
  let parrentElement = document.getElementById("ex5");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let a, b;
  a = prompt("Введите число a: ");
  b = prompt("Введите число b: ");
  if (a > b) {
    p1.innerHTML = "a > b";
    parrentElement.append(p1);
  } else if (a < b) {
    p1.innerHTML = "a < b";
    parrentElement.append(p1);
  } else {
    p1.innerHTML = "a = b";
    parrentElement.append(p1);
  }

  a < b
    ? ((p2.innerHTML = "a < b"), parrentElement.append(p2))
    : a > b
    ? ((p2.innerHTML = "a > b"), parrentElement.append(p2))
    : ((p2.innerHTML = "a = b"), parrentElement.append(p2));
}

// Задание 6
function outputData() {
  let day = new Date();
  switch (day.getDay()) {
    case 0:
      alert("Воскресенье");
      break;
    case 1:
      alert("Понедельник");
      break;
    case 2:
      alert("Вторник");
      break;
    case 3:
      alert("Среда");
      break;
    case 4:
      alert("Четверг");
      break;
    case 5:
      alert("Пятница");
      break;
    case 6:
      alert("Суббота");
      break;
    default:
      alert("Введите число от 1 до 7");
  }
}

//Лабораторная работа №2

// Задание 2
function table() {
  let parrentElement = document.getElementById("lab2_ex2");
  let table, row, div;
  let a, b;
  a = +prompt("Введите a: ");
  b = +prompt("Введите b: ");
  let checkA = a;
  let checkB = b;
  table = document.createElement("table");
  for (i = a; i < 10; i++) {
    row = document.createElement("tr");
    for (j = b; j < 10; j++) {
      if (i == checkA || j == checkB) {
        div = document.createElement("th");
        div.style.backgroundColor = "orange";
      } else {
        div = document.createElement("td");
        div.style.backgroundColor = "yellow";
      }
      div.append(document.createTextNode(i * j));
      div.style.padding = "5px";
      row.append(div);
    }
    table.append(row);
  }
  parrentElement.append(table);
}

// Задание 3
function square() {
  let parrentElement = document.getElementById("lab2_ex3");
  let table,
    row,
    div,
    step = 0.3;
  let a = +prompt("a: ");
  let b = +prompt("b: ");
  table = document.createElement("table");

  let begin = a;
  let i;
  do {
    row = document.createElement("tr");
    i = 0;
    do {
      if (a == begin) {
        div = document.createElement("th");
        div.style.backgroundColor = "gray";
        if (i == 0) {
          div.append(document.createTextNode("Радиус"));
        } else if (i == 1) {
          div.append(document.createTextNode("Площадь круга"));
        } else {
          div.append(document.createTextNode("Длина окружности"));
        }
      } else {
        div = document.createElement("td");
        div.style.backgroundColor = "green";
        if (i == 0) {
          div.append(document.createTextNode(a));
        } else if (i == 1) {
          div.append(document.createTextNode(Math.PI * Math.pow(a, 2)));
        } else {
          div.append(document.createTextNode(2 * Math.PI * a));
        }
      }
      div.style.padding = "5px";
      row.append(div);
      i++;
    } while (i < 3);
    table.append(row);
    a += step;
  } while (a < b);
  parrentElement.append(table);
}

// Задание 4
function number() {
  let table = document.getElementById("table_ex4");
  let trs = table.getElementsByTagName("tr");
  let tds;
  let x = new Number(34.215);
  let y = new Number(10);

  for (let i = 0; i < trs.length; i++) {
    tds = trs[i].getElementsByTagName("td");
    for (let j = 0; j < tds.length; j++) {
      switch (true) {
        case i != 0 && j == 0 && i <= 4:
          tds[j].append(document.createTextNode(x));
          break;
        case i != 0 && j == 0 && i > 4:
          tds[j].append(document.createTextNode(y));
          break;
        case j == 2 && i == 1:
          tds[j].append(document.createTextNode(x.toExponential(3)));
          break;
        case j == 2 && i == 2:
          tds[j].append(document.createTextNode(x.toFixed(3)));
          break;
        case j == 2 && i == 3:
          tds[j].append(document.createTextNode(x.toPrecision(3)));
          break;
        case j == 2 && i == 4:
          tds[j].append(document.createTextNode(x.toString(16)));
          break;
        case j == 2 && i == 5:
          tds[j].append(document.createTextNode(y.toExponential(3)));
          break;
        case j == 2 && i == 6:
          tds[j].append(document.createTextNode(y.toFixed(3)));
          break;
        case j == 2 && i == 7:
          tds[j].append(document.createTextNode(y.toPrecision(3)));
          break;
        case j == 2 && i == 8:
          tds[j].append(document.createTextNode(y.toString(16)));
          break;
      }
      //конец оператора switch
    }
    //конец вложенного цикла
  }
  //конец внешнего цикла
}
number();

//Лабораторная работа №3

//Задание 1
function extremArr() {
  let arr = new Array();
  let a, b, c, d;
  let max, min, countMax, countMin;
  a = 6 * Math.pow(Math.PI, 2) + 3 * Math.exp(8);
  b = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
  c = 2 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
  d = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);
  arr.push(a);
  arr.push(b);
  arr.push(c);
  arr.push(d);
  console.log(arr);
  max = arr[0];
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      countMax = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      countMin = i;
    }
  }
  console.log("Максимальный элемент массива: " + max);
  console.log("Минимальный элемент массива: " + min);
}

//Задание 2
function splitArr() {
  let arr = new Array(
    "pow",
    "pop",
    "push",
    "shift",
    "round",
    "floor",
    "slice",
    "sort"
  );
  let methodsArr = [];
  let methodsMath = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "pop":
      case "push":
      case "shift":
      case "slice":
      case "sort":
        methodsArr.push(arr[i]);
        break;
      case "pow":
      case "round":
      case "floor":
        methodsMath.push(arr[i]);
        break;
    }
  }
  console.log(arr);
  methodsArr.push("unshift");
  methodsMath.unshift("sin");
  console.log(methodsArr);
  console.log(methodsMath);
}

//Заданеи 3
function convStr() {
  str = new String("Демьянов Владислав Русланович");
  console.log(str);
  str = str.toUpperCase();
  console.log(str);
  str = str.toLowerCase();
  console.log(str);
}

//Задание 4
function dataOutput() {
  let data = new Date();
  let table = document.getElementById("t_ex4");
  let trs = table.getElementsByTagName("tr");
  let tds;
  for (let i = 0; i < trs.length; i++) {
    tds = trs[i].getElementsByTagName("td");
    tds[0].style.backgroundColor = "orange";
    tds[1].style.backgroundColor = "yellow";
    switch (i) {
      case 0:
        tds[1].append(document.createTextNode(data.getFullYear()));
        break;
      case 1:
        tds[1].append(document.createTextNode(data.getMonth()));
        break;
      case 2:
        tds[1].append(document.createTextNode(data.getDay()));
        break;
      case 3:
        tds[1].append(document.createTextNode(data.getHours()));
        break;
      case 4:
        tds[1].append(document.createTextNode(data.getMinutes()));
        break;
      case 5:
        tds[1].append(document.createTextNode(data.getSeconds()));
        break;
    }
  }
}

dataOutput();

//Лабораторная работа №3

//Задание 1
//Конструктор объектов Gruppa
function Gruppa(n, spec, count) {
  this.n = n;
  this.spec = spec;
  this.count = count;
  this.add_stud = function add_stud(k) {
    this.count += k;
    console.log("В группу №" + this.n + " добавили " + k + " студентов.");
  };
  this.sub_stud = function sub_stud(t) {
    this.count -= t;
    console.log("Группу №" + this.n + " уменьшили на " + t + " студентов.");
  };
}
//Объявление объектов
let gr1 = new Gruppa(2, "ИСиТ", 28);
let gr2 = new Gruppa(5, "ПОИТ", 30);
let gr3 = new Gruppa(4, "ПОИТ", 27);
let gr4 = new Gruppa(1, "ПОиБМС", 10);
//Вывод свойств и методов
function outputGruppa() {
  console.log("Начальное состояние групп: ");
  console.log(gr1.n, gr1.spec, gr1.count, gr1.kurs);
  console.log(gr2.n, gr2.spec, gr2.count);
  console.log(gr3.n, gr3.spec, gr3.count);
  console.log(gr4.n, gr4.spec, gr4.count);
  gr1.add_stud(2);
  gr2.add_stud(10);
  gr3.add_stud(1);
  gr4.add_stud(4);
  gr1.sub_stud(7);
  gr2.sub_stud(11);
  gr3.sub_stud(3);
  gr4.sub_stud(4);

  Gruppa.prototype.kurs = this.kurs;
  gr1.kurs = 2;
  console.log(gr1.n, gr1.spec, gr1.count, gr1.kurs);
  console.log(gr2.n, gr2.spec, gr2.count);
  console.log(gr3.n, gr3.spec, gr3.count);
  console.log(gr4.n, gr4.spec, gr4.count);
}

//Задание 2
//Конструктор объектов Student
function Student(name, surname, physics, maths, informatics) {
  this.name = name;
  this.surname = surname;
  this.physics = physics;
  this.maths = maths;
  this.informatics = informatics;
  this.output_name_surname = function output_name() {
    console.log("Фамилия: " + this.surname);
    console.log("Имя: " + this.name);
  };
  this.average_mark = function average_mark() {
    console.log(
      "Средний балл: " + (this.physics + this.maths + this.informatics) / 3
    );
  };
}
//Объявление объектов
let student1 = new Student("Андрей", "Лесовский", 6, 7, 7);
let student2 = new Student("Кирилл", "Алексеев", 4, 8, 5);
let student3 = new Student("Владислав", "Васильев", 8, 3, 4);
//Вывод свойств и методов
function outputStudents() {
  Student.prototype.gruppa = this.gruppa;
  student1.gruppa = "№1";
  student2.gruppa = "№2";
  student3.gruppa = "№3";
  console.log("//////////////////////");
  console.log(
    student1.output_name_surname(),
    student1.average_mark(),
    student1.physics,
    student1.maths,
    student1.informatics,
    student1.gruppa
  );
  console.log("//////////////////////");
  console.log(
    student2.output_name_surname(),
    student2.average_mark(),
    student2.physics,
    student2.maths,
    student2.informatics,
    student2.gruppa
  );
  console.log("//////////////////////");
  console.log(
    student3.output_name_surname(),
    student3.average_mark(),
    student3.physics,
    student3.maths,
    student3.informatics,
    student3.gruppa
  );
}

//Задание 3
//Функция возвращает рандомное число в дипазоне
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function returnNum() {
  return 5;
}

function outputEx3() {
  let arr = new Array();
  let data = new Date();
  let str = new String();
  for (let i = 0; i < 10; i++) {
    arr[i] = getRandomInt(0, 10);
  }
  console.log("Исходный массив: ");
  console.log(arr);
  delete arr[3];
  console.log("Полученный массив: ");
  console.log(arr);
  ///////////////////////////////////
  console.log("Есть ли в массиве arr третий элемент: ");
  console.log(3 in arr);
  console.log('Наличие свойства "spec" у объекта Gruppa: ');
  console.log("spec" in gr1);
  console.log('Наличие свойства "surname" у объекта Student: ');
  console.log("surname" in student1);
  ///////////////////////////////////
  console.log("Проверка принадлежности объекта модели (instanceof) типа: ");
  console.log(Gruppa instanceof Object);
  console.log(arr instanceof Array);
  ///////////////////////////////////
  console.log("Определение типа: ");
  console.log(typeof returnNum);
  console.log(typeof arr);
  console.log(typeof data);
  console.log(typeof str);
  console.log(typeof Gruppa);
  ///////////////////////////////////
  console.log("//////////////////////");
  console.log("Типы свойств объекта gr1: ");
  for (var i in gr1) {
    console.log(typeof gr1[i]);
  }
  console.log("//////////////////////");
  console.log("Типы свойств объекта gr1: ");
  for (var i in student1) {
    console.log(typeof student1[i]);
  }
}


