// header event
const headerList = document.querySelectorAll('#header > ul > li');

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