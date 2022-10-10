//fonctions de création de tags
    const tagArray = [];
   

function createUstensilTag(e){
        const orangeTag = document.createElement('li');
        orangeTag.classList.add('orangetag');
        tagField.appendChild(orangeTag);
        
        orangeTag.innerHTML = e.target.innerHTML;
        tagArray.unshift(e.target.innerHTML);
       
      
        

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
        ;
        const closeIcon = document.createElement('i');
        greenTag.appendChild(closeIcon);
        tagArray.unshift(e.target.innerHTML);
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
        tagArray.unshift(e.target.innerHTML);
        
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


    
    
//mettre les tags par défaut dans la liste des filtres
filterIngredientsTag(recipes);
filterUstensilesTag(recipes);
filterAppareilTag(recipes);


