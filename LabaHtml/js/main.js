//открытие окна
let newWin = window.open("about:blank", "output", "width=600,height=600");

//Вывод всех эдементов и их номеров коллекции all
function ex1_lab4() {
  let div = newWin.document.createElement("div"),
    body = newWin.document.body;
  div.innerHTML = " <b>Вывод тегов в коллекции all:</b> ";
  for (let i = 0; i < document.all.length; i++) {
    let child = document.all[i];
    div.append(`${child.tagName} -  ${child.nodeType}`);
  }
  div.style.padding = "10px";
  body.append(div);
}

ex1_lab4();

//Вывод всех дочерних элементов узла document body
function ex2_lab4() {
  let div = newWin.document.createElement("div"),
    body = newWin.document.body;
  div.innerHTML = " <b>Вывод тегов в body:</b> ";
  for (let i = 0; i < document.body.childNodes.length; i++) {
    let child = document.body.childNodes[i];
    div.append(`${child.tagName} -  ${child.nodeType}`);
  }
  div.style.padding = "10px";
  body.append(div);
}

ex2_lab4();

//Вывод содержимого указанного спана разными способами
function ex3_lab4() {
  let div = newWin.document.createElement("div"),
    body = newWin.document.body;
  let all = document.all;
  let span1;
  let span2 = document.getElementsByTagName("span")[1];
  let span3 = document.getElementById("span");
  for (let i = 0; i < all.length; i++) {
    if (all[i].tagName == "SPAN") {
      span1 = all[i];
      break;
    }
  }
  div.innerHTML = " <b>Содержимое первого span:</b> ";
  div.append(span1);
  div.append(span2);
  div.append(span3);
  div.style.padding = "10px";
  div.style.padding = "10px";
  body.append(div);
}

ex3_lab4();

//Получение значений из ячеек таблицы и рассчёт их среднего балла
function ex4_lab4() {
  let table = document.getElementById("table_main");
  let rows = table.getElementsByTagName("tr");
  let output = document.getElementById("output");
  let count = 0,
    sum = 0,
    tds = 0;

  for (let i = 0; i < rows.length - 1; i++) {
    if (i >= 3) tds = rows[i].getElementsByTagName("td");
    for (let j = 0; j < tds.length; j++) {
      if (j == 2) {
        sum += +tds[j].innerHTML;
        count++;
      }
    }
    tds = 0;
  }

  output.innerHTML = `Ваш средний балл = ${sum / count}`;
}

ex4_lab4();
