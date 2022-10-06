
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



SearchInput.addEventListener('keyup',filterMainSearch);


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
  
    
    for(i = 0; i < recipes.length; i++){
        let nameArray = recipes[i].name.split();
        if(nameArray.some((el) => el.toLowerCase().includes(searchedString))){
            globalRecipes.push(recipes[i])
        }
        
      
        console.log(globalRecipes)
        
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
        if(ingredient.ingredient.toLowerCase().includes(searchedString)){
            
            newArrayForIngredients.push(recipe)
        } 
       
        }
   }
   
    
    for(i = 0; i < newArrayForIngredients.length; i++){
        
        globalRecipes.push(newArrayForIngredients[i])
    }
    
    for(recipe of globalRecipes){
        if(recipe.name.toLowerCase().includes(searchedString)){
            console.log(recipe.name)
        }
    }
    
    displaySearchedRecipes(globalRecipes);
    globalRecipes = [];
    
    
    if(recipesField.firstChild){
    
    }else {
    recipesField.innerHTML =`Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes"; "poisson", etc.`
    }
};

//fonction pour filtrer les ingrédients dans la barre de recherche "Ingredients"
function filterIngredientsTag(data){
    let arrayIngredientsTag = [];
    
    ingredientsInput.innerHTML="";
    let IngredientArray  = [];
     
    for(let recipe of data){
        for(let ingredient of recipe.ingredients){
            IngredientArray.push(ingredient.ingredient)
        }}
     
    //suppression des doublons
    let displayIngredients = [];
    let filteredIngredients = Array.from(new Set(IngredientArray));
   
    //création des éléments ingrédients + clic dans tag
    for(i = 0; i< filteredIngredients.length; i++){
        const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = filteredIngredients[i];
        li.addEventListener('click',createIngredientTag)
        li.addEventListener('click',function close(){
        const closeIcon =  document.getElementsByClassName('clse');
         for (var i = 0; i < closeIcon.length; i++) {
         closeIcon[i].addEventListener('click', function(){
         this.parentNode.remove();
         displaySearchedRecipes(data)
        
        if(closeIcon.length == 0 && SearchInput.value.length == 0){
        displaySearchedRecipes(recipes)
        }})
        }})
        li.addEventListener('click', function displayfromTags(){
            const tagged = li.innerText;
            for(let recipe of data){
               for(ingredients of recipe.ingredients){
                 if(ingredients.ingredient.includes(tagged)){
                    arrayIngredientsTag.push(recipe)
                    }
                }}
            

            displaySearchedRecipes(arrayIngredientsTag)
        

});}


//création des éléments ingrédients au moment d'écrire dans le filtre
ingredientsFilter.addEventListener('input',function(e){
let inputValue = e.target.value;
ingredientsInput.innerHTML = "";

for(i = 0; i < IngredientArray.length; i++){
    if(filteredIngredients[i].toLowerCase().includes(inputValue)){
        console.log(filteredIngredients[i])
        const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.innerHTML = filteredIngredients[i];
        li.classList.add('float')
        li.addEventListener('click',createIngredientTag)
        li.addEventListener('click',function close(){
            const closeIcon =  document.getElementsByClassName('clse');
             for (var i = 0; i < closeIcon.length; i++) {
             closeIcon[i].addEventListener('click', function(){
             this.parentNode.remove();
             displaySearchedRecipes(data)
            
            if(closeIcon.length == 0){
            displaySearchedRecipes(recipes)
            }})
            }})
        li.addEventListener('click', function displayfromTags(){
                const tagged = li.innerText;
                for(let recipe of data){
                   for(ingredients of recipe.ingredients){
                     if(ingredients.ingredient.includes(tagged)){
                        arrayIngredientsTag.push(recipe)
                        }
                    }}
    displaySearchedRecipes(arrayIngredientsTag);
        })
    }
}
})
};
            
//fonction pour filtrer les ingrédients dans la barre de recherche "Appareil"
function filterAppareilTag(data){
    //display des appareils par défauts et tri avec les recettes via la barre principale
    appareilsInput.innerHTML = "";
    let arrayAppareil = [];
    let arrayAppareilTag = [];
    for(let recipe of data){
        arrayAppareil.push(recipe.appliance)
    }
    let filteredAppareil = Array.from(new Set(arrayAppareil));


   
    for(let appareil of filteredAppareil){
        const li = document.createElement('li');
        appareilsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = appareil;
        li.addEventListener('click',createAppareilTag);
        li.addEventListener('click',function close(){
            const closeIcon =  document.getElementsByClassName('clse');
            for (var i = 0; i < closeIcon.length; i++) {
                    closeIcon[i].addEventListener('click', function(){
                        this.parentNode.remove();
                        displaySearchedRecipes(data)
                        if(closeIcon.length == 0){
                            displaySearchedRecipes(recipes)
                        }})
                        ;}})
        li.addEventListener('click',function display(){
            
        const textTag = li.innerText;
        for(let recipe of data){
            if(recipe.appliance.includes(textTag)){
                arrayAppareilTag.push(recipe)
            }
        }
        
        recipesField.innerHTML = "";
        displaySearchedRecipes(arrayAppareilTag)
        })

    }
    

        
    
    //ecoute au moment de chercher un appareil dans le filtre
    appareilFilter.addEventListener('keyup',function(e){
        appareilsInput.innerHTML = "";
        let filteredInput =[]
        console.log(e.target.value)
        let inputValue = e.target.value;
        for(appareil of filteredAppareil){
            if(appareil.toLowerCase().includes(inputValue)){
                filteredInput.push(appareil)
            }
        }
        for(let appareil of filteredInput){
            const li = document.createElement('li');
            appareilsInput.appendChild(li)
            li.classList.add('float')
            li.innerHTML = appareil;
            li.addEventListener('click',createAppareilTag);
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
            li.addEventListener('click',function display(){
                
                const textTag = li.innerText;
                const tagged = data.filter(recipe => recipe.appliance.includes(textTag));
                recipesField.innerHTML = "";
                displaySearchedRecipes(tagged)
        })
        }})}
        
 //fonction pour filtrer les ingrédients dans la barre de recherche "Ustensiles"  
function filterUstensilesTag(data){
    
    ustensilInput.innerHTML = "";
    let arrayUstenstil = [];
    for(let ustensiles of data){
        for(let ustensil of ustensiles.ustensils){
            arrayUstenstil.push(ustensil)
        }
    }
    let filteredUstensiles = Array.from(new Set(arrayUstenstil));
    
    for(ustensile of filteredUstensiles){
        const li = document.createElement('li');
    ustensilInput.appendChild(li)
    li.classList.add('float')
    li.innerHTML = ustensile
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
        for(let recipe of data){
            for(let ustensile of recipe.ustensils){
                if(ustensile.includes(textTag)){
                    arrayTagUstensil.push(recipe)
                }
            }
        }
        
                recipesField.innerHTML = "";
                displaySearchedRecipes(arrayTagUstensil)
})
    }

ustensilFilter.addEventListener('keyup',function(e){
    let inputValue = e.target.value;
    let filteredInput =[]
        console.log(e.target.value)
        
        for(ustensil of filteredUstensiles){
            if(ustensil.toLowerCase().includes(inputValue)){
                filteredInput.push(ustensil)
            }
        }
        ustensilInput.innerHTML = "";
        console.log(filteredInput)
   for(ustensil of filteredInput){
    
    const li = document.createElement('li');
    ustensilInput.appendChild(li)
    li.classList.add('float')
    li.innerHTML = ustensil;
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
        for(let recipe of data){
            for(let ustensil of recipe.ustensils){
                if(ustensil.includes(textTag)){
                    arrayTagUstensil.push(recipe)
                }
            }
        }
       
                recipesField.innerHTML = "";
                displaySearchedRecipes(arrayTagUstensil)
            })}});
   }
    
function displaySearchedRecipes(data){
    
    
    const filteredArray = data.filter(function(ele , pos){
        return data.indexOf(ele) == pos;
    }) 
    recipesField.innerHTML = "";
    for(i=0; i < filteredArray.length; i ++){
        createCard(filteredArray[i])
    }
    
    filterIngredientsTag(filteredArray)
    filterUstensilesTag(filteredArray)
    filterAppareilTag(filteredArray)
    
    
    
    if(recipesField.firstChild){
    
    }else {
    recipesField.innerHTML =`Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes"; "poisson", etc.`
    }

}

    
    



