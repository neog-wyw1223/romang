// header event
const mobileBg = document.querySelector('.mobileBg')
const header = document.querySelector('#header')
const headerList = document.querySelectorAll('#header > ul > li');
const headerMobileOpenBtn = document.querySelector('#headerM > button');
const headerMobileCloseBtn = document.querySelector('#header > button');

for(let item of headerList) {
  function addActive() {
    item.classList.add('active');
  };
  function removeActive() {
    item.classList.remove('active');
  };

  item.addEventListener('mouseover', addActive);
  item.addEventListener('mouseout', removeActive);
}

function headerAddActive() {
  header.classList.add('active');
  mobileBg.classList.add('active')
}
function headerRemoveActive() {
  header.classList.remove('active');
  mobileBg.classList.remove('active');
}
headerMobileOpenBtn.addEventListener('click', headerAddActive);
headerMobileCloseBtn.addEventListener('click', headerRemoveActive);