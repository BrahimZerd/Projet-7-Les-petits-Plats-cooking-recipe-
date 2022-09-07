
//rotation des éléments du select menu
const SearchInput = document.querySelector('input');
const recipesJSON = Object.assign({}, recipes)
const recipesField = document.getElementById('recipes-field')
const MissingText = document.createElement('span');
const InputDiv = document.getElementById('inputSelector')
const ingredients = document.getElementById('ingredients-select')
const ingredientsDiv = document.getElementById('ingredients-div')
const placeholder = document.getElementById('ingredients-select').getAttribute("placeholder");

InputDiv.parentNode.appendChild(MissingText)

ingredients.addEventListener('click',openFilterBar);       
SearchInput.addEventListener('keyup',filterData);

function filterData(e) {
    
    const searchedString = e.target.value;
    
    if(searchedString.length < 3 && searchedString.length > 0){
        MissingText.innerHTML = "Veuillez entrer plus de caractères dans le champ de recherche"
        MissingText.style.color = "red"
        MissingText.style.marginLeft ="1%"
    } else {
        MissingText.innerHTML = "";
        recipesField.innerHTML = "";
        let filteredName =recipes.filter(element => element.name.toLowerCase().includes(searchedString));
        let filteredDescription = recipes.filter(element => element.description.toLowerCase().includes(searchedString))
        const filteredIngredient = recipes.filter(element => element.ingredients.filter(el => el.ingredient.toLowerCase().includes(searchedString)));
            
        //suppression des doublons entre les tableaux description & noms
        filteredName = filteredName.filter(val => !filteredDescription.includes(val));
        createCard(filteredDescription);
        createCard(filteredName);
        
        if (filteredName == 0 && filteredDescription == 0) {
            recipesField.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        }
    }
    

    }
    let newArr = []

    //filtrer les ingrédients 1 à 1 et enlever les doublons, garder que les 30 premiers pour les disposer dans le tableau
    recipes.map(element => { element.ingredients.filter(subelem => {
        
        
        return newArr.push(subelem.ingredient)
        
      });
      
      ;
      
    });

    const arr2 = newArr.map(function(value){
        return value.toLowerCase();
        
    });
    const slicednewArr = arr2.slice(0,36);
    const sortedSliced = new Set(slicednewArr)
    console.log(sortedSliced)
    const sortedIngredients = new Set(arr2)
    const li = document.createElement('li');
    
    const ingredientsInput = document.getElementById('ingredients-dropdown')
    sortedSliced.forEach(ingredient => {
        const li = document.createElement('li');
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredient
        

        li.addEventListener('click',function(e){
            console.log(e.target.innerHTML)
            const SearchBar = document.querySelector('search-bar');
            const closeIcon = document.createElement('i');
            ingredients.classList.toggle('toggle-input')
            ingredientsDiv.classList.toggle('col-5');
            arrowIngredients.classList.toggle('input-cursor')
            arrowIngredients.classList.toggle('rotate');
            MissingText.appendChild(li)
            li.classList.toggle('bluetag')
            closeIcon.classList.add('fa-regular');
            closeIcon.classList.add('fa-circle-xmark');
            li.style.position = "relative;"
            li.appendChild(closeIcon);
            
            
            MissingText.innerhTML = e.target.innerHTML;
        })
    })

    const arrowIngredients = document.getElementById('select-rotate-ingredients');
    ingredients.addEventListener('click',openFilterBar);  
    function openFilterBar() {
        ingredientsDiv.classList.toggle('col-5');
        this.classList.toggle('toggle-input')
        arrowIngredients.classList.toggle('input-cursor')
        arrowIngredients.classList.toggle('rotate');
        //ingredients.setAttribute('placeholder','Rechercher un ingrédient');
        
        
        
    }
    
    

    
        
    

    
