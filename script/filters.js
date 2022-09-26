//fonctions de création de tags
    function createUstensilTag(e){
        const orangeTag = document.createElement('li');
        orangeTag.classList.add('orangetag');
        tagField.appendChild(orangeTag);
        
        orangeTag.innerHTML = e.target.innerHTML;

       
      
        

        const closeIcon = document.createElement('i');
        orangeTag.appendChild(closeIcon);
        
        ustensilFilter.classList.toggle('toggle-input')
        ustensilDiv.classList.toggle('col-5');
        arrowUstensil.classList.toggle('input-cursor')
        arrowUstensil.classList.toggle('rotate');
        closeIcon.setAttribute('class','clse')
        closeIcon.classList.add('fa-regular');
        closeIcon.classList.add('fa-circle-xmark');
        ustensilFilter.setAttribute('placeholder',"Ustensiles")
        
}

    function createAppareilTag(e){
        const greenTag = document.createElement('li');
        greenTag.classList.add('greentag');
        tagField.appendChild(greenTag);
        
        greenTag.innerHTML = e.target.innerHTML;
        const closeIcon = document.createElement('i');
        greenTag.appendChild(closeIcon);
        
        appareilFilter.classList.toggle('toggle-input')
        appareilDiv.classList.toggle('col-5');
        arrowAppareil.classList.toggle('input-cursor')
        arrowAppareil.classList.toggle('rotate');
        closeIcon.setAttribute('class','clse')
        closeIcon.classList.add('fa-regular');
        closeIcon.classList.add('fa-circle-xmark');
        appareilFilter.setAttribute('placeholder',"Appareils")
       
    }
    
    function createIngredientTag(e){
        
        const blueTag = document.createElement('li');
        blueTag.classList.add('bluetag');
        tagField.appendChild(blueTag);
        
        blueTag.innerHTML = e.target.innerHTML;
        
        const closeIcon = document.createElement('i');
        blueTag.appendChild(closeIcon);
        
        ingredientsFilter.classList.toggle('toggle-input')
        ingredientsDiv.classList.toggle('col-5');
        arrowIngredients.classList.toggle('input-cursor')
        arrowIngredients.classList.toggle('rotate');
        closeIcon.setAttribute('class','clse')
        closeIcon.classList.add('fa-regular');
        closeIcon.classList.add('fa-circle-xmark');
        ingredientsFilter.setAttribute('placeholder',"Ingredients")
          
    }

//fonction de fermeture des tags
    function close(){
        const closeIcon =  document.getElementsByClassName('clse');
        for (var i = 0; i < closeIcon.length; i++) {
            closeIcon[i].addEventListener('click', function(){
                this.parentNode.remove();
            });
        }}
    



 //fonction pour filtrer les ingrédients dans la barre de recherche "Ingredients"
function filterIngredientsTag(data){
    console.log(data)
    
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
filterIngredientsTag(recipes);
filterUstensilesTag(recipes);
filterAppareilTag(recipes);
filterIngredientsTag(e);
