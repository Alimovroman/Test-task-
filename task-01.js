let decisionsMenu = document.getElementsByClassName(`decisionsMenu`);
decisionsMenu[0].style.display = `none`;
function openList() {
  if(decisionsMenu[0].style.display === `none` ) {
    document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(-90deg)";
    decisionsMenu[0].style.display = `flex`;
  } else {
  document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(90deg)";
    decisionsMenu[0].style.display = `none`;
  }
}
document.querySelector(`.arrow`).addEventListener(`click`, openList);
document.querySelector(`.decisions`).addEventListener(`click`, openList);

let menuForPhoneBlock = document.getElementsByClassName("menuForPhoneBlock");
menuForPhoneBlock[0].innerHTML = `<ul class="phoneMenu">
<li class="menuList decisionsPhoneMenu">Решения <span class="cloneArrow">></span></li>
<li class="menuList submenu">Мониторинг для СМИ</li>
<li class="menuList submenu">Проверка контрагентов</li>
<li class="menuList">Новости</li>
<li class="menuList">Мероприятия</li>
<li class="menuList">Контакты</li>
<li class="menuList">Блог</li>
</ul>
<button class="buttonSampleScan">Попробовать SCAN</button>
<button class="buttonTestAccess">Вход в систему</button>`;
menuForPhoneBlock[0].style.display = `none`;
function openBurgerMenu() {
  if (menuForPhoneBlock[0].style.display === `none`) {
  menuForPhoneBlock[0].style.display = `flex`;
  } else {
    menuForPhoneBlock[0].style.display = `none`;
  }
};
let submenu = document.getElementsByClassName(`submenu`);
function openSubmynu() {
  for( let i=0; i<submenu.length; i++ ) {
    if(submenu[i].style.display === `none`) {
      submenu[i].style.display = `flex`
      document.getElementsByClassName(`cloneArrow`)[0].style.transform = "rotate(-90deg)";
    } else {
      submenu[i].style.display = `none`;
      document.getElementsByClassName(`cloneArrow`)[0].style.transform = "rotate(90deg)";
    }
  }
};
document.querySelector(`.burgerMenu`).addEventListener(`click`, openBurgerMenu);
document.querySelector(`.decisionsPhoneMenu`).addEventListener(`click`, openSubmynu)