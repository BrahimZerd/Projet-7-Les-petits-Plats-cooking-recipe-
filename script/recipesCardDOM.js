//intégration des cards du dom

   
    const namesArray = recipes.map(function(data) { 
        
        const {name, id, description, time, appliance,ingredients} = data
        
        
        const recipesField = document.getElementById('recipes-field');
            const icone = document.createElement('i');
            const article = document.createElement('div');
            const card = document.createElement('div');
            const paragrapheDiv = document.createElement('div');
            const img = document.createElement('img')
            const title = document.createElement('h5');
            const span = document.createElement('span');
            const paragraphe = document.createElement('p')
            article.classList.add('col-4');
            icone.classList.add('fa-clock');

            icone.classList.add('fa-regular');
            card.classList.add('card');
            paragrapheDiv.classList.add('paragraphe-bloc')
            span.classList.add('text-right')
            title.classList.add('card-title');
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
            span.appendChild(icone)
            paragrapheDiv.appendChild(paragraphe)
            recipesField.appendChild(article)
            article.appendChild(card)
            


            
        
        
    });

    