const headerList = document.querySelectorAll('#header > ul > li');

for(let item of headerList) {
  item.addEventListener('mouseover', function() {
    item.classList.add('active')
  })
  item.addEventListener('mouseout', function() {
    item.classList.remove('active')
  })
}