
//rotation des éléments du select menu
const SearchInput = document.querySelector('input');

const recipesField = document.getElementById('recipes-field')
const inputError = document.createElement('span');
const InputDiv = document.getElementById('inputSelector')
const ingredientsFilter = document.getElementById('ingredients-select')
const ingredientsDiv = document.getElementById('ingredients-div')
const placeholder = document.getElementById('ingredients-select').getAttribute("placeholder");
const tagField = document.getElementById('tag-field');
const arrowIngredients = document.getElementById('select-rotate-ingredients');


InputDiv.parentNode.appendChild(inputError)

ingredientsFilter.addEventListener('click',openFilterBar);
ingredientsFilter.addEventListener('keyup',filterInput) 
SearchInput.addEventListener('keyup',filterData);








function openFilterBar() {
    ingredientsDiv.classList.toggle('col-5');

    this.classList.toggle('toggle-input')
    arrowIngredients.classList.toggle('input-cursor')
    arrowIngredients.classList.toggle('rotate');

        if(ingredientsDiv.classList.contains('col-5')){
           this.setAttribute('placeholder','Rechercher un ingrédient') 
    } else {
            this.setAttribute('placeholder','Ingredients')
    }

    //ingredients.setAttribute('placeholder','Rechercher un ingrédient');
    
    
    
}



//fonction de filtre de la barre de recherche principal par nom & description
function filterData(e) {
    
    const searchedString = e.target.value;
    
    if(searchedString.length < 3 && searchedString.length > 0){
        inputError.innerHTML = "Veuillez indiquer au minimum 3 caractères dans le champs"
        inputError.style.color = "red"
        inputError.style.marginLeft ="1%"
    } else {
        
        inputError.innerHTML = "";
        recipesField.innerHTML = "";
        let filteredName =recipes.filter(element => element.name.toLowerCase().includes(searchedString));
        let filteredDescription = recipes.filter(recipe => recipe.description.toLowerCase().includes(searchedString));
        let filteredIngredient= recipes.filter(recipe => { recipe.ingredients.filter(ingredients => {
                ingredients.ingredient
          });
          
          });
        
        //suppression des doublons entre les tableaux description & noms
        filteredName = filteredName.filter(val => !filteredDescription.includes(val));
        createAllCards(filteredDescription);
        createAllCards(filteredName);
        if (filteredName == 0 && filteredDescription == 0) {
            recipesField.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        }
    }
}

    let tablo  = [];
    let filteredIngredient= recipes.filter(recipe => { recipe.ingredients.filter(ingredients => {
    tablo.push(ingredients.ingredient)
    });})
    const filteredArray = tablo.filter(function(ele , pos){
    return tablo.indexOf(ele) == pos;
}) 
    const sliced = filteredArray.slice(0,30);
    
    
    const upperCaseArray = sliced.map(function(value){
        return value.charAt(0).toUpperCase() + value.slice(1);;
        
    });
    console.log(upperCaseArray)
    const li = document.createElement('li');
    
    const ingredientsInput = document.getElementById('ingredients-dropdown')

    //création des listes de mots dans la catégorie "Ingrédients"
    upperCaseArray.forEach(ingredient => {
        const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredient
        
        //au clic sur un mot créé un tag dans la catégorie supérieur
        li.addEventListener('click',function(e){
            console.log(e.target.innerHTML)
            
            const closeIcon = document.createElement('i');
            ingredientsFilter.classList.toggle('toggle-input')
            ingredientsDiv.classList.toggle('col-5');
            arrowIngredients.classList.toggle('input-cursor')
            arrowIngredients.classList.toggle('rotate');
            tagField.appendChild(li)
            li.classList.toggle('bluetag')
            closeIcon.classList.add('fa-regular');
            closeIcon.classList.add('fa-circle-xmark');
            ingredientsFilter.setAttribute('placeholder','Ingredients');
            
            li.appendChild(closeIcon);
            
            
            tagField.innerhTML = e.target.innerHTML;
        })
    })

   
    function filterInput(e){
        let inputValue = e.target.value;
        ingredientsInput.innerHTML="";
        let ok = upperCaseArray.filter(ingredient => ingredient.toLowerCase().includes(inputValue));
        let pe = filteredArray.filter(ingredient => ingredient.toLowerCase().includes(inputValue));
        pe.slice(-30).forEach(ingredient => {
            const li = document.createElement('li');
            ingredientsInput.appendChild(li)
            li.classList.add('float')
            li.innerHTML = ingredient
        })
       
       

        

        
        }


        let something = recipes.map(recipe => recipe.ingredients.map(ingredient => ingredient))
          console.log(something)
          
        let filtered = something.filter(ingredientList => ingredientList.filter(ingredient => ingredient));
          
        const filt = something.forEach(function(inf) {
            const {ingredient} = inf
            
            const arrayIngredients = inf.map(ingredient => ingredient.ingredient)
            const arrayFindIngredients = arrayIngredients.filter(ingredient => ingredient.toLowerCase().includes())
            const arrayAllIngredients = arrayIngredients.filter(ingredient => ingredient)
           
           
           
        })
        
    
        
    

    
