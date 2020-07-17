let myWin1, myWin2;

function openWin1() {
  myWin1 = window.open("about:blank", "myWin1");
}

function openWin2() {
  myWin2 = window.open("about:blank", "myWin2");
}

function closeWin1() {
  myWin1.close();
}

function closeWin2() {
  myWin2.close();
}

function output() {
  myWin1.document.write("Имя окна: " + myWin1.name);
  myWin2.document.write("Имя окна: " + myWin2.name);
}

function tableT() {
  let table = document.getElementById("table");
  let trs = table.getElementsByTagName("tr");
  let tds;
  trs[0].style.backgroundColor = "#ff6b6b";
  for (let i = 1; i < trs.length; i++) {
    tds = trs[i].getElementsByTagName("td");
    switch (i) {
      case 1:
        tds[1].append(document.createTextNode(navigator.userAgent));
        break;
      case 2:
        tds[1].append(document.createTextNode(navigator.appVersion));
        break;
      case 3:
        tds[1].append(document.createTextNode(navigator.appName));
        break;
      case 4:
        tds[1].append(document.createTextNode(navigator.appCodeName));
        break;
      case 5:
        tds[1].append(document.createTextNode(navigator.platform));
        break;
      case 6:
        tds[1].append(document.createTextNode(navigator.javaEnabled()));
        break;
      case 7:
        tds[1].append(
          document.createTextNode(`${screen.width},${screen.height}`)
        );
        break;
      case 8:
        tds[1].append(document.createTextNode(screen.colorDepth));
        break;
      case 9:
        tds[1].append(document.createTextNode(history));
        break;
      case 10:
        tds[1].append(document.createTextNode(location.href));
        break;
      case 11:
        tds[1].append(document.createTextNode(location.pathnam));
        break;
      case 12:
        tds[1].append(document.createTextNode(location.host));
        break;
    }
  }
}

tableT();

function outputForm() {
  //находим форму с именем student
  let form = document.all.student;
  //находим в форме элемент с именем faculty (textarea)
  let faculty = form.faculty.value;
  //находим  в форме элемент с именем surname
  let surname = form.surname.value;
  //получаем select с именем specialty и все его элементы
  let select = form.specialty;
  //получаем выбранный элемент списка
  let specialty = select.options[select.selectedIndex].text;
  //radiobutton
  let inp = form.r;
  let course;
  for (let i = 0; i < inp.length; i++)
    if (inp[i].checked) course = inp[i].value;
  //checkbox
  let checkboxes = form.c;
  let subjects = [];
  for (let i = 0; i < checkboxes.length; i++)
    if (checkboxes[i].checked) subjects.push(checkboxes[i].value);

  //вывод
  let output = document.getElementById("output");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let ul = document.createElement("ul");
  let li;
  p1.innerHTML = `${faculty}`;
  p2.innerHTML = `Студент ${surname} специальность ${specialty} курс ${course} должен сдавать следующие предметы:`;
  for (let i = 0; i < subjects.length; i++) {
    li = document.createElement("li");
    li.innerHTML = `${subjects[i]}`;
    ul.append(li);
  }
  p1.style.textAlign = "center";
  ul.style.paddingLeft = "30px";
  output.append(p1);
  output.append(p2);
  output.append(ul);

  //заполнение списка выбранными предметами
  let formSecond = document.all.secStudent;
  let selectSecond = formSecond.sub;
  let option;
  for (let i = 0; i < subjects.length; i++) {
    option = document.createElement("option");
    option.innerHTML = `${subjects[i]}`;
    selectSecond.append(option);
  }
}


