//intégration des cards du dom

function createCard(data) {

    
        
            const icone = document.createElement('i');
            const article = document.createElement('div');
            const card = document.createElement('div');
            
            const paragrapheDiv = document.createElement('div');
            const img = document.createElement('img')
            const title = document.createElement('h5');
            const span = document.createElement('span');
            const paragraphe = document.createElement('p')
            const listItems = document.createElement('div');
            const quantityBloc = document.createElement('div');
            const recipesField = document.getElementById('recipes-field');
      
        const {name,description, time,ingredients} = data

            article.classList.add('col-md-4');
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
            card.appendChild(quantityBloc)
            span.appendChild(icone)
            paragrapheDiv.appendChild(paragraphe)
            
            
            recipesField.appendChild(article)
            article.appendChild(card)

            //intégrations des ingrédients séparés du tableau
            
            ingredients.map(function(dosage){
                const {ingredient,quantity,unit,ustensils} = dosage
              
                const recipesField = document.getElementById('recipes-field');
                
                
                    
                
                
            

                
                
                
    

                
                const howToDo = document.createElement('div');
                const quantitySpan= document.createElement('div')
                quantitySpan.classList.add('item-quantity')
                
                quantityBloc.classList.add('bloc-quantity')
                
                
                listItems.appendChild(howToDo)
                quantityBloc.appendChild(quantitySpan)
                
                howToDo.setAttribute('id','item')
                howToDo.classList.add('d-inline-block-column')
                
                quantitySpan.classList.add('col-6')
                
                
                howToDo.innerHTML = `<strong>${ingredient}</strong>:&nbsp; ${quantity}&nbsp;${unit}`
                
                if( quantity === "undefined"){
                    howToDo.innerHTML = ""
                }else if(typeof unit === "undefined"){
                    howToDo.innerHTML = `<strong>${ingredient}</strong>:&nbsp;${quantity}`
                }
                if(typeof quantity ==='undefined' && typeof unit ==='undefined'){
                    howToDo.innerHTML = `<strong>${ingredient}</strong>`;
                }
            })
            return  data, createCard
    };
   
    
    
   


  
