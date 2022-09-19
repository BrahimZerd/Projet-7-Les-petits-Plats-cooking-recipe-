
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
const appareilsInput = document.getElementById('appareils-dropdown');
InputDiv.parentNode.appendChild(inputError)

ingredientsFilter.addEventListener('click',openFilterBar);
ingredientsFilter.addEventListener('keyup',filterIngredientsTag) 
SearchInput.addEventListener('keyup',filterMainSearch);






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

function filterByName(e) {
    let searchedString = e.target.value;
    const filterName = recipes.filter(element => element.name.toLowerCase().includes(searchedString));
    
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
        let newArrayForIngredients = [];
        recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient};
        
        if(ingredientObject.ingredient.ingredient.toLowerCase().includes(searchedString)) {
            
            newArrayForIngredients.push(recipe)
            return newArrayForIngredients
        } 
        createAllCards(newArrayForIngredients)}
        
    )
})
    if(recipesField.firstChild){
    
    }else {
    recipesField.innerHTML =`Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes"; "poisson", etc.`
    }
};




    


console.log(recipes)

//intégration des listes dans le filtre ingrédients 
recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient}
        const li = document.createElement('li'); 
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredientObject.ingredient.ingredient
        
    })})
    let arrAppareils = [];
    let filteredAppareils;
    recipes.map(recipe => {
        const appareilObject = recipe.appliance
            arrAppareils.push(appareilObject)
            const li = document.createElement('li'); 
            appareilsInput.appendChild(li)
            li.classList.add('float')
            li.innerHTML = "";
            filteredAppareils = arrAppareils.filter(function(ele , pos){
                return arrAppareils.indexOf(ele) == pos;
            })})
           console.log( filteredAppareils )  

//fonction pour filtrer les ingrédients dans la barre de recherche "Ingredients"
function filterIngredientsTag(e){
    let inputValue = e.target.value;
    ingredientsInput.innerHTML="";
    
    let displayIngredients = recipes.filter(ingredients => ingredients.toLowerCase().includes(inputValue));
    displayIngredients.slice(-30).forEach(ingredient => {
        const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredient
    })
}
function filterAppareilTag(){
    let inputValue = target.value;
    appareilsInput.innerHTML = "";
    let ok
}


   
   

   
 

        
        
    

    
