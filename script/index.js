
//rotation des éléments du select menu
const SearchInput = document.querySelector('input');
const recipesJSON = Object.assign({}, recipes)
const recipesField = document.getElementById('recipes-field')
const MissingText = document.createElement('span');
const InputDiv = document.getElementById('inputSelector')

InputDiv.parentNode.appendChild(MissingText)

       
SearchInput.addEventListener('keyup',filterData)

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
        li.innerHTML = ingredient
        li.addEventListener('click',function(e){
            console.log(e.target.innerHTML)
            const SearchBar = document.querySelector('search-bar');
            MissingText.appendChild(li)
            li.classList.toggle('bluetag')
            MissingText.innerhTML = e.target.innerHTML;
        })
    })

    const ingredients = document.getElementById('ingredients-select')
    ingredients.addEventListener('click',function(){
        ingredients.style.width ="100%"
    })

    
        
    

    
