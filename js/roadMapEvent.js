// roadMap evevt
const rodeMapItems = document.querySelectorAll('.roadMap .roadMapItem');

let rodeMapIndex1 = 1;
setInterval(function rodeMapEventAdd() {
  rodeMapItems[rodeMapIndex1++].classList.add('active');
  if(rodeMapIndex1 === rodeMapItems.length) {
    rodeMapIndex1 = 0;
  }
}, 3000);

let rodeMapIndex2 = 0;
setInterval(function rodeMapEventRemove() {
  rodeMapItems[rodeMapIndex2++].classList.remove('active');
  if(rodeMapIndex2 === rodeMapItems.length) {
    rodeMapIndex2 = 0;
  }
}, 3000);