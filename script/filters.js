const arrowSelectMenu = document.getElementById('select-rotate-ingredients')

const ingredients = document.getElementById('ingredients-select')
const ingredientsDiv = document.getElementById('ingredients-div')

ingredientsDiv.addEventListener('click',function(){
    arrowSelectMenu.classList.toggle('rotate')
})

