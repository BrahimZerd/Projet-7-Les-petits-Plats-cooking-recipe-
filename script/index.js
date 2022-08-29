
//rotation des éléments du select menu

const arrowSelectMenu = document.getElementById('select-rotate-ingredients')
const ingredientsSelect = document.getElementById('ingredients-select');
const opened = document.querySelector('dropdown boostrap-select')
ingredientsSelect.addEventListener('click',function(){
   if( opened.classList("show") == true){
    arrowSelectMenu.style.rotate = "180deg"}

})



  