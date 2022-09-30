
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

ingredientsInput.addEventListener('keyup',filterIngredientsTag)



SearchInput.addEventListener('input',filterMainSearch);


//création des éléments du DOM carte par carte 
for(let i = 0; i < recipes.length; i++){
    createCard(recipes[i])
}

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
    for(let i = 0; i < recipes.length; i++){
        if(recipes[i].name.toLowerCase().includes(searchedString)){
            globalRecipes.push(recipes[i])
        }
    }
    
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
    for(i = 0; i < recipes.length; i++){
        if(recipes[i].description.toLowerCase().includes(searchedString)){
            globalRecipes.push(recipes[i])
        }
    }
   
    filterbyIngredients(e)
    
}


function filterbyIngredients(e){
    let searchedString = e.target.value;
    let newArrayForIngredients = [];
   for(let recipe of recipes){
    for(let ingredient of recipe.ingredients){
        console.log(ingredient.ingredient)
            
        }
   }
    
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
    let arrayIngredientsTag = [];
    
   
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
        li.addEventListener('click',function close(){
            const closeIcon =  document.getElementsByClassName('clse');
            for (var i = 0; i < closeIcon.length; i++) {
                    closeIcon[i].addEventListener('click', function(){
                        this.parentNode.remove();
                        displaySearchedRecipes(data)
                        console.log(closeIcon.length)
                        if(closeIcon.length == 0){
                            displaySearchedRecipes(recipes)
                        }
                    });}}
        )
        li.addEventListener('click', function displayfromTags(){
            const tagged = li.innerText;
            
            data.map(recipe => {
        
        recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient};
        
             if(ingredientObject.ingredient.ingredient.includes(tagged)){
                arrayIngredientsTag.push(recipe)
             };
              /// a voir avec Gaetan
            displaySearchedRecipes(arrayIngredientsTag);
        
        })})
        console.log(arrayIngredientsTag)
    });
        ingredientsFilter.addEventListener('keyup',function(e){
            let inputValue = e.target.value;
            ingredientsInput.innerHTML = "";
            let filteredIngredientsTag = displayIngredients.filter(ingredients => ingredients.toLowerCase().includes(inputValue))
            
            filteredIngredientsTag.slice(-30).forEach(ingredient => {
                const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredient
        li.addEventListener('click',createIngredientTag)
        li.addEventListener('click',function close(){
            
            const closeIcon =  document.getElementsByClassName('clse');
            for (var i = 0; i < closeIcon.length; i++) {
                    closeIcon[i].addEventListener('click', function(){
                        this.parentNode.remove();
                        displaySearchedRecipes(data)
                        console.log(closeIcon.length)
                        if(closeIcon.length == 0){
                            displaySearchedRecipes(recipes)
                        }
                    });}
                    
                }
        )
        li.addEventListener('click', function displayfromTags(){
            const tagged = li.innerText;
            let arrayIngredientsTag = [];
            data.filter(recipe => {
        
        recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient};
        
        if(ingredientObject.ingredient.ingredient.includes(tagged)) {
            
            arrayIngredientsTag.push(recipe)
            
        } 
       
        displaySearchedRecipes(arrayIngredientsTag);
        
        })})});
            })
        })
})
   
    
    
}

//fonction pour filtrer les ingrédients dans la barre de recherche "Appareil"
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
        li.addEventListener('click',function close(){
            const closeIcon =  document.getElementsByClassName('clse');
            for (var i = 0; i < closeIcon.length; i++) {
                    closeIcon[i].addEventListener('click', function(){
                        this.parentNode.remove();
                        displaySearchedRecipes(data)
                        if(closeIcon.length == 0){
                            displaySearchedRecipes(recipes)
                        }
                        
                    });}}
        )
        li.addEventListener('click',function display(){
            
            const textTag = li.innerText;
            const tagged = data.filter(recipe => recipe.appliance.includes(textTag));
            recipesField.innerHTML = "";
            displaySearchedRecipes(tagged)
        })
    })

    appareilFilter.addEventListener('keyup',function(e){
        appareilsInput.innerHTML = "";
        console.log(e.target.value)
        let inputValue = e.target.value;
        let filteredInput = displayAppareil.filter(appareil => appareil.toLowerCase().includes(inputValue))
        console.log(filteredInput)
        
        filteredInput.forEach(appareil => {
            const li = document.createElement('li');
            appareilsInput.appendChild(li)
            li.classList.add('float')
            li.innerHTML = appareil;
            li.addEventListener('click',createAppareilTag)
            li.addEventListener('click',function close(){
                const closeIcon =  document.getElementsByClassName('clse');
                for (var i = 0; i < closeIcon.length; i++) {
                        closeIcon[i].addEventListener('click', function(data){
                            this.parentNode.remove();
                            displaySearchedRecipes(data)
                            if(closeIcon.length == 0){
                                displaySearchedRecipes(recipes)
                            }
                        });}}
            )
            li.addEventListener('click',function display(){
                
                const textTag = li.innerText;
                const tagged = data.filter(recipe => recipe.appliance.includes(textTag));
                recipesField.innerHTML = "";
                displaySearchedRecipes(tagged)
            })
        })})

}


 //fonction pour filtrer les ingrédients dans la barre de recherche "Ustensiles"  
function filterUstensilesTag(data){
    
    ustensilInput.innerHTML = "";
    let array = [];
    let filteredUstensils = data.filter(recipe => {
        recipe.ustensils.filter(ustensil => {
            array.push(ustensil)
        })
    });
    let noDouble = array.filter(function(ele , pos){
        return array.indexOf(ele) == pos;
})
let displayUstensils = noDouble.filter(ustensil => ustensil.toLowerCase());
displayUstensils.forEach(ustensil => {
    const li = document.createElement('li');
    ustensilInput.appendChild(li)
    li.classList.add('float')
    li.innerHTML = ustensil
    li.addEventListener('click',createUstensilTag)
    li.addEventListener('click',function close(){
        const closeIcon =  document.getElementsByClassName('clse');
        for (var i = 0; i < closeIcon.length; i++) {
                closeIcon[i].addEventListener('click', function(){
                    this.parentNode.remove();
                    displaySearchedRecipes(data)
                        if(closeIcon.length == 0){
                            displaySearchedRecipes(recipes)
                        }
                    
                });}}
    )
    li.addEventListener('click',  function displayfromTags(){
            
        const textTag = li.innerText;
        let arrayTagUstensil = [];
        data.map(recipe => 
            {
            recipe.ustensils.map(ustensil => {
            const ustensilObject = {ustensil};
                
                if(ustensilObject.ustensil.includes(textTag)) {
                    
                    arrayTagUstensil.push(recipe);
                } })});
                recipesField.innerHTML = "";
                displaySearchedRecipes(arrayTagUstensil)
})})
ustensilFilter.addEventListener('keyup',function(e){
    let inputValue = e.target.value;
    
   let filteredInput = displayUstensils.filter(ustensil => ustensil.toLowerCase().includes(inputValue));
    ustensilInput.innerHTML = "";
    filteredInput.forEach(ustensil => {
    const li = document.createElement('li');
    ustensilInput.appendChild(li)
    li.classList.add('float')
    li.innerHTML = ustensil
    li.addEventListener('click',createUstensilTag)
    li.addEventListener('click',function close(){
        const closeIcon =  document.getElementsByClassName('clse');
        for (var i = 0; i < closeIcon.length; i++) {
                closeIcon[i].addEventListener('click', function(){
                    this.parentNode.remove();
                    displaySearchedRecipes(data)
                        if(closeIcon.length == 0){
                            displaySearchedRecipes(recipes)
                        }
                    
                });}}
    )
    li.addEventListener('click',  function displayfromTags(){
            
        const textTag = li.innerText;
        let arrayTagUstensil = [];
        data.map(recipe => 
            {
            recipe.ustensils.map(ustensil => {
            const ustensilObject = {ustensil};
                
                if(ustensilObject.ustensil.includes(textTag)) {
                    
                    arrayTagUstensil.push(recipe);
                } })});
                recipesField.innerHTML = "";
                displaySearchedRecipes(arrayTagUstensil)
})})

})

}

   
 

      
function displaySearchedRecipes(data){
    const filteredArray = data.filter(function(ele , pos){
        return data.indexOf(ele) == pos;
    }) 
    recipesField.innerHTML = "";
    filteredArray.forEach(recipe => createCard(recipe))
    filterIngredientsTag(filteredArray)
    filterUstensilesTag(filteredArray)
    filterAppareilTag(filteredArray)
    
    
    
    if(recipesField.firstChild){
    
    }else {
    recipesField.innerHTML =`Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes"; "poisson", etc.`
    }

}

    
    



