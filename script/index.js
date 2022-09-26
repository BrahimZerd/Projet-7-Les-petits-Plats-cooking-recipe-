
//rotation des éléments du select menu
const SearchInput = document.querySelector('input');
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const recipesField = document.getElementById('recipes-field')
const inputError = document.createElement('span');
const InputDiv = document.getElementById('inputSelector')
const ingredientsFilter = document.getElementById('ingredients-select');
const ustensilFilter = document.getElementById('ustensiles-select')
const appareilFilter = document.getElementById('appareils-select');
const ingredientsDiv = document.getElementById('ingredients-div')
const appareilDiv = document.getElementById('appareil-div')
const ustensilDiv = document.getElementById('ustensile-div');
const placeholder = document.getElementById('ingredients-select').getAttribute("placeholder");
const tagField = document.getElementById('tag-field');
const arrowIngredients = document.getElementById('select-rotate-ingredients');
const arrowAppareil = document.getElementById('select-rotate-appareil');
const arrowUstensil = document.getElementById('select-rotate-ustensil');
const ingredientsInput = document.getElementById('ingredients-dropdown');
const appareilsInput = document.getElementById('appareils-dropdown');
const ustensilInput = document.getElementById('ustensiles-dropdown');
InputDiv.parentNode.appendChild(inputError)

ingredientsFilter.addEventListener('click',openIngredientFilter);
appareilFilter.addEventListener('click',openAppareilFilter);
ustensilFilter.addEventListener('click',openUstensilFilter);


ingredientsFilter.addEventListener('keyup',filterIngredientsTag); 
appareilFilter.addEventListener('keyup',filterAppareilTag)
SearchInput.addEventListener('keyup',filterMainSearch);
ustensilFilter.addEventListener('keyup',filterUstensilesTag)

//création des éléments du DOM carte par carte 
recipes.forEach(recipe => {createCard(recipe)})

//fonction pour ouvrir les parties filtres
function openIngredientFilter() {
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
function openAppareilFilter() {
    appareilDiv.classList.toggle('col-5');
    this.classList.toggle('toggle-input');
    arrowAppareil.classList.toggle('input-cursor')
    arrowAppareil.classList.toggle('rotate');
    if(appareilDiv.classList.contains('col-5')){
        this.setAttribute('placeholder','Rechercher un appareil');
    } else {
        this.setAttribute('placeholder','Appareils');
    }
    
}
function openUstensilFilter() {
    ustensilDiv.classList.toggle('col-5');
    this.classList.toggle('toggle-input');
    arrowUstensil.classList.toggle('input-cursor')
    arrowUstensil.classList.toggle('rotate');
    if(ustensilDiv.classList.contains('col-5')){
        this.setAttribute('placeholder','Rechercher un ustensile');
    } else {
        this.setAttribute('placeholder','Ustensiles');
    }
}
//fonction de filtre de la barre de recherche principal
let globalRecipes = [];
function filterByName(e) {
    const searchedString = e.target.value;
    const filterName = recipes.filter(element => element.name.toLowerCase().includes(searchedString));
    
    console.log('name')
    globalRecipes = [];
    filterName.forEach(recipe => globalRecipes.push(recipe));
    filterByDescription(e)
    
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
    const filteredDescription = recipes.filter(recipe => recipe.description.toLowerCase().includes(searchedString));
    filteredDescription.forEach(recipe => globalRecipes.push(recipe));
    filterbyIngredients(e)
    
}


function filterbyIngredients(e){
    let searchedString = e.target.value;
    let newArrayForIngredients = [];
    recipes.map(recipe => {
        
        recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient};
        
        if(ingredientObject.ingredient.ingredient.toLowerCase().includes(searchedString)) {
            
            newArrayForIngredients.push(recipe)
            return newArrayForIngredients
        } 
        
        
    })})
    newArrayForIngredients.forEach(recipe => globalRecipes.push(recipe))
    displaySearchedRecipes(globalRecipes);
    
    if(recipesField.firstChild){
    
    }else {
    recipesField.innerHTML =`Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes"; "poisson", etc.`
    }
};




//fonction pour filtrer les ingrédients dans la barre de recherche "Ingredients"
function filterIngredientsTag(data){
    
    
    ingredientsInput.innerHTML="";
    let tablo  = [];
    let filteredIngredient= data.filter(recipe => { recipe.ingredients.filter(ingredients => {
    tablo.push(ingredients.ingredient)
    });})
    const filteredArray = tablo.filter(function(ele , pos){
    return tablo.indexOf(ele) == pos;
}) 
    let displayIngredients = filteredArray.filter(ingredients => ingredients.toLowerCase());
    displayIngredients.slice(-30).forEach(ingredient => {
        const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredient
        li.addEventListener('click',createIngredientTag)
        li.addEventListener('click',close)
    })
    
}


function filterAppareilTag(data){
   
    appareilsInput.innerHTML = "";
    let array = [];
    let filteredAppareils = data.filter(recipe => {
        array.push(recipe.appliance)
    });
    let noDouble = array.filter(function(ele , pos){
        return array.indexOf(ele) == pos;
})
    let displayAppareil = noDouble.filter(appareil => appareil.toLowerCase());
    displayAppareil.forEach(appareil => {
        const li = document.createElement('li');
        appareilsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = appareil
        li.addEventListener('click',createAppareilTag)
        li.addEventListener('click',close)
        li.addEventListener('click',function createFromTag(){  
            
            
            
           data.forEach(recipe => { recipe.appliance;
            if(tagField.innerText == recipe.appliance) {
               globalRecipes.push(recipe)
                }
           
        })
        let noDoubleAppliance = globalRecipes.filter(function(ele , pos){
            return globalRecipes.indexOf(ele) == pos;
    })
        console.log(noDoubleAppliance)
        recipesField.innerHTML = "";
        
        })
    })
}


   
function filterUstensilesTag(data){
    ustensilInput.innerHTML = "";
    let array = [];
    let filteredUstensils = data.filter(recipe => {
        array.push(recipe.appliance)
    });
    let noDouble = array.filter(function(ele , pos){
        return array.indexOf(ele) == pos;
})
let displayUstensils = noDouble.filter(appareil => appareil.toLowerCase());
displayUstensils.forEach(ustensil => {
    const li = document.createElement('li');
    ustensilInput.appendChild(li)
    li.classList.add('float')
    li.innerHTML = ustensil
    li.addEventListener('click',createUstensilTag)
    li.addEventListener('click',close)
})
}

   
 

      
function displaySearchedRecipes(data){
    const filteredArray = data.filter(function(ele , pos){
        return data.indexOf(ele) == pos;
    }) 
    filteredArray.forEach(recipe => createCard(recipe))
    filterIngredientsTag(filteredArray)
    filterIngredientsTag(filteredArray)
    filterAppareilTag(filteredArray)
    
    

}


//Créer une fonction qui releve les cards du DOM / => ensuite avec celle ci, on trie dans les cartes les éléments incluants les éléments.

    
    



