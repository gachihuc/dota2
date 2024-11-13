new Swiper(".swiper", {
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const bottonElement = document.querySelector('.show-all__button')



/*
  document.getElementById("jsShowAllButton").onclick = function() { 
    this.innerText = 'Скрыть';
    this.className = "show-all__button--clicked";
    document.getElementById("jsBrandsTable").className = "brands__table--fullsize";
}
*/


document.getElementById("jsShowAllButton").onclick = function() { 
  if (this.className === "show-all__button") {
    this.className = "show-all__button--clicked";
    this.innerText = 'Скрыть';
    document.getElementById("jsBrandsTable").className = "brands__table--fullsize";
  }
  else {
    this.className = "show-all__button";
    this.innerText = 'Показать все';
    document.getElementById("jsBrandsTable").className = "brands__table";
  }
}