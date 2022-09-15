
//rotation des éléments du select menu
const SearchInput = document.querySelector('input');
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const recipesField = document.getElementById('recipes-field')
const inputError = document.createElement('span');
const InputDiv = document.getElementById('inputSelector')
const ingredientsFilter = document.getElementById('ingredients-select')
const ingredientsDiv = document.getElementById('ingredients-div')
const placeholder = document.getElementById('ingredients-select').getAttribute("placeholder");
const tagField = document.getElementById('tag-field');
const arrowIngredients = document.getElementById('select-rotate-ingredients');
const ingredientsInput = document.getElementById('ingredients-dropdown');
InputDiv.parentNode.appendChild(inputError)

ingredientsFilter.addEventListener('click',openFilterBar);
ingredientsFilter.addEventListener('keyup',filterInput) 
SearchInput.addEventListener('keyup',filterData);






//fonction de fermeture de tag
function close() {
    document.querySelector('float').remove();
}
//fonction pour ouvrir le filtre de la partie "Ingredient"
function openFilterBar() {
    ingredientsDiv.classList.toggle('col-5');

    this.classList.toggle('toggle-input')
    arrowIngredients.classList.toggle('input-cursor')
    arrowIngredients.classList.toggle('rotate');

    if(ingredientsDiv.classList.contains('col-5')){
        this.setAttribute('placeholder','Rechercher un ingrédient');
    } else {
        this.setAttribute('placeholder','Ingredients');
    }
}
//fonction pour filtrer les ingrédients dans la barre de recherche "Ingredients"
function filterInput(e){
    let inputValue = e.target.value;
    ingredientsInput.innerHTML="";
    let ok = upperCaseArrayIngredients.filter(ingredient => ingredient.toLowerCase().includes(inputValue));
    let displayIngredients = filteredArray.filter(ingredient => ingredient.toLowerCase().includes(inputValue));
    displayIngredients.slice(-30).forEach(ingredient => {
        const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredient
    })
}
//fonction de filtre de la barre de recherche principal par nom & description
function filterData(e) {
    
    const searchedString = e.target.value;
    let filteredName =recipes.filter(element => element.name.toLowerCase().includes(searchedString));
    let filteredDescription = recipes.filter(recipe => recipe.description.toLowerCase().includes(searchedString));
        
    let filteredWithDoubles = filteredName.concat(filteredDescription);
    let filteredTotal = filteredWithDoubles.filter( (ele,pos)=>filteredWithDoubles.indexOf(ele) == pos);
    let tablo = [];
    let filteredingredients = recipes.map(recipe => {
        recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient}
            
            
            
        if(ingredientObject.ingredient.ingredient.toLowerCase().includes(searchedString)) {
            filteredTotal.push(recipe)
            filteredTotal = filteredTotal.filter( (ele,pos)=>filteredTotal.indexOf(ele) == pos)
            list = ingredientObject.ingredient.ingredient;
               
                
        }
     
    })});






    if(searchedString.length < 3 && searchedString.length > 0){
        inputError.innerHTML = "Veuillez indiquer au minimum 3 caractères dans le champs"
        inputError.style.color = "red"
        inputError.style.marginLeft ="1%"
    } else {
        
        inputError.innerHTML = "";
        recipesField.innerHTML = "";
        createAllCards(filteredTotal);
        if (filteredTotal == 0 ) {
            recipesField.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        }
    } 
      
}

recipes.map(recipe => {
    let newarrayIngredients = [];
    recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient}
       
        
        
    
   
        const li = document.createElement('li'); 
                ingredientsInput.appendChild(li)
                li.classList.add('float')
                li.innerHTML = ingredientObject.ingredient.ingredient})})


            




  
    
    
    

    
   
   
    
   
        
        


        
        
    

    
