


//intégration des listes dans le filtre ingrédients 
recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
        const ingredientObject = {ingredient}
        const li = document.createElement('li'); 
        ingredientsInput.appendChild(li)
        li.classList.add('float')
        li.innerHTML = ingredientObject.ingredient.ingredient
        li.addEventListener('click',createIngredientTag)
        li.addEventListener('click',close)
        
    })})



//intégration des listes pour la liste d'appareils
let arrAppareils = [];
let filteredAppareils;
recipes.map(recipe => {
        const appareilObject = recipe.appliance
        
            arrAppareils.push(appareilObject)
            filteredAppareils = arrAppareils.filter(function(ele , pos){
                return arrAppareils.indexOf(ele) == pos;
            })})
            filteredAppareils.forEach(appareil => {
                const li = document.createElement('li'); 
            appareilsInput.appendChild(li)
            li.classList.add('li-appareils')
            li.innerHTML = appareil;
            li.addEventListener('click',createAppareilTag);
            li.addEventListener('click',close);
            })
          
let arrayUstensil = [];
let filteredUstensil;
recipes.map(recipe => {
    recipe.ustensils.map(ustensile => arrayUstensil.push(ustensile))
    })
    filteredUstensil = arrayUstensil.filter(function(ele, pos){
        return arrayUstensil.indexOf(ele) == pos;
    })
    filteredUstensil.forEach(ustensil => {
        const li = document.createElement('li'); 
            ustensilInput.appendChild(li)
            li.classList.add('li-ustensil')
            li.innerHTML = ustensil;
            li.addEventListener('click',createUstensilTag) 
            li.addEventListener('click',close)
    })


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
    