//intégration des cards du dom

   
    const namesArray = recipes.map(function(data) { 
            const icone = document.createElement('i');
            const article = document.createElement('div');
            const card = document.createElement('div');
            
            const paragrapheDiv = document.createElement('div');
            const img = document.createElement('img')
            const title = document.createElement('h5');
            const span = document.createElement('span');
            const paragraphe = document.createElement('p')
            const listItems = document.createElement('div');
            
      
        const {name, id, description, time, appliance,ingredients} = data
        
       
        
        
        
        
        const recipesField = document.getElementById('recipes-field');
            
            article.classList.add('col-4');
            icone.classList.add('fa-clock');

            icone.classList.add('fa-regular');
            card.classList.add('card');
            paragrapheDiv.classList.add('paragraphe-bloc');
            paragrapheDiv.setAttribute('id','paragraphe-bloc');
            span.classList.add('text-right');
            title.classList.add('card-title');
            listItems.classList.add('item-list')
            img.classList.add('card-img-top');
            img.setAttribute('src','...');
            img.style.background = "#C7BEBE"
            img.style.width = "379px";
            img.style.height="178px"
            

            paragraphe.classList.add('card-text');
            
            title.innerHTML = `${name}`
            span.innerHTML = `${time}` + " min";
            paragraphe.innerHTML = `${description}`;

            


            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(span)
            card.appendChild(paragrapheDiv)
            card.appendChild(listItems)
            span.appendChild(icone)
            paragrapheDiv.appendChild(paragraphe)
            
            
            recipesField.appendChild(article)
            article.appendChild(card)
            ingredients.map(function(dosage){
                const {ingredient,quantity,unit} = dosage
                console.log(ingredients)
                const recipesField = document.getElementById('recipes-field');
                
                
                const howToDo = document.createElement('span');
                const quantitySpan = document.createElement('span');
                
                listItems.appendChild(howToDo)
                
                howToDo.setAttribute('id','item')
                howToDo.innerHTML = `${ingredient}: ${quantity}${unit}`
                howToDo.style.fontWeight = '400'
                if(typeof unit === 'undefined' && typeof quantity === 'undefined' ) {
                    howToDo.innerHTML = `${ingredient}`
                } else if(typeof unit ==='undefined'){
                    howToDo.innerHTML = `${ingredient}:${quantity}`
                }else if(typeof quantity ==='undefined'){
                    howToDo.innerHTML = `${ingredient}:${unit}`
                }
                
            })
            
            
           

            
        
            
    });
