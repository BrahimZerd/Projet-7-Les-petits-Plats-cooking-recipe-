
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
SearchInput.addEventListener('keyup',filterMainSearch);
SearchInput.addEventListener('keyup',filterbyIngredients)





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

//fonction de filtre de la barre de recherche principal par nom & description
function filterData() {
    
    const searchedString = e.target.value;
    let filteredName =recipes.filter(element => element.name.toLowerCase().includes(searchedString));
    let filteredDescription = recipes.filter(recipe => recipe.description.toLowerCase().includes(searchedString));
        
    let filteredWithDoubles = filteredName.concat(filteredDescription);
    let filteredTotal = filteredWithDoubles.filter( (ele,pos)=>filteredWithDoubles.indexOf(ele) == pos);







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
function filterByName(e) {
    let searchedString = e.target.value;
    const filterName = recipes.filter(element => element.name.toLowerCase().includes(searchedString));
    console.log(filterName)
    if(filterName.length > 0){
    console.log('name')
    createAllCards(filterName);
    }else{
        filterByDescription(e)
    }
}
function filterMainSearch(e){
    let searchedString = e.target.value;
    if(searchedString.length < 3 && searchedString.length > 0){
        inputError.innerHTML = "Veuillez indiquer au minimum 3 caractères dans le champs"
        inputError.style.color = "red"
        inputError.style.marginLeft ="1%"
        return false;
    } else {
        inputError.innerHTML = "";
        recipesField.innerHTML = "";
        filterByName(e)
        return true;
}}

function filterByDescription(e){
    const searchedString = e.target.value;
    let filteredDescription = recipes.filter(recipe => recipe.description.toLowerCase().includes(searchedString));
    if(filteredDescription.length > 0 ) {
        console.log('description')
        createAllCards(filteredDescription);
    } else {
        filterbyIngredients(e)
    }
}


function filterbyIngredients(e){
    let searchedString = e.target.value;
    recipes.map(recipe => {
        
        recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient}
        if(ingredientObject.ingredient.ingredient.toLowerCase().includes(searchedString)) {
            
            //console.log(ingredientObject.ingredient)
               
            return true 
        } else {
            
            return false;
        } 
        
        
    })})}
    




//intégration des listes dans le filtre ingrédients 
recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient}
        const li = document.createElement('li'); 
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredientObject.ingredient.ingredient
    })})


//fonction pour filtrer les ingrédients dans la barre de recherche "Ingredients"
function filterInput(){
    let inputValue = target.value;
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

    
   
   
    
   
        
        


        
        
    

    
