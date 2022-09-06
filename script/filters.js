const arrowSelectMenu = document.getElementById('select-rotate-ingredients')
const ingredientsSelect = document.getElementById('ingredients-select');

ingredientsSelect.addEventListener('click',function(){
    arrowSelectMenu.classList.toggle('rotate')
})