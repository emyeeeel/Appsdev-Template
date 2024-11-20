/* CSS for these functions are saved in template.css */

// execution
document.addEventListener('DOMContentLoaded', function() {   
    setLogo(templateData.logo)
    setButtonURL(templateData.buttonPulse)
    setHeader(templateData.header)
    setBackground(templateData.header)

    function setBackground(data){
        document.body.style.background = data.background;
    }

    function setLogo(data) {
        document.querySelector('.logo').src = IMG_PATH+data
    }
    function setButtonURL(data) {
        document.querySelectorAll('.comn-btn.pulse').forEach(el => {
            el.href = data.url
            el.innerHTML = data.text
        })
    }

    function setHeader(data) {

        function setHeaderBackgroundColor(data) {
            document.querySelector('.header').style.backgroundColor = '#FFF';
        }
        setHeaderBackgroundColor(data);
        

        function setBottleSlide(data) {
            let dSlider = document.querySelector('.bnr-slider')
            data.forEach((lstData, idx) => {
                let dParent = document.createElement("div");
                dParent.className = 'sld-bx sld-'+(idx+1);
                dParent.style.background = lstData.background
                dParent.innerHTML = '<img src="' +(IMG_PATH+lstData.image)+ '" alt="" width="560" height="636" class="sld-img" />'
                dSlider.appendChild(dParent);
            })
        }        
        setBottleSlide(data.headerSlides)

        function setSubtitle(data) {
            const subtitleElement = document.querySelector('.bnr-sm-hding.hide-mob');
        
            const spanElement = subtitleElement.querySelector('.sect-header-subt');
        
            spanElement.textContent = data.text;
            spanElement.style.color = data.textColor;
        }
        setSubtitle(data.subTitle)

        function setIngredients(data) {
            const ingredientsListElement = document.querySelector('.bnr-list');
            
            ingredientsListElement.innerHTML = '';
    
            data.list.forEach(item => {
                const li = document.createElement('li');
    
                const img = document.createElement('img');
                img.src = IMG_PATH + item.icon;
                img.alt = item.text;
                img.classList.add('bnr-icon');
                
                const p = document.createElement('p');
                p.innerHTML = item.text;
                p.style.color = data.textColor;
    
                li.appendChild(img);
                li.appendChild(p);
    
                ingredientsListElement.appendChild(li);
            });
        }
        setIngredients(data.ingredients)

        function setReview(data){
            let reviewImg = document.querySelector('.rewv-img'); 
            reviewImg.src = IMG_PATH + data.image;

            let reviewText1 = document.querySelector('.rewv-prt-p1');
            reviewText1.innerHTML = data.text;

            let reviewText2 = document.querySelector('.rewv-prt-p2');
            reviewText2.innerHTML = data.name;
        }
        setReview(data.review)
    }
})