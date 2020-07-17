document.getElementById("nav").onmouseover = function (event) {
  //отслеживает нахождение мыши внутри блока
  let target = event.target;
  //отслеживаем клик
  if (target.className == "menu-item") {
    let s = target.getElementsByClassName("submenu");
    closeMenu();
    s[0].style.display = "block";
    //массив, содержащий ложное меню
  }

  if (target.className == "submenu-item") {
    let item = target.getElementsByClassName("item");
    closeItem();
    item[0].style.display = "block";
  }
};
document.onmouseover = function (event) {
  let target = event.target;
  if (
    target.className != "menu-item" &&
    target.className != "submenu" &&
    target.className != "submenu-item" &&
    target.className != "item" &&
    target.className != "item-i" &&
    target.className != "teset"
  ) {
    closeMenu();
    closeItem();
  }
};
function closeMenu() {
  let subm = document.getElementsByClassName("submenu");
  for (let i = 0; i < subm.length; i++) subm[i].style.display = "none";
}

function closeItem() {
  let item = document.getElementsByClassName("item");
  for (let i = 0; i < item.length; i++) item[i].style.display = "none";
}
