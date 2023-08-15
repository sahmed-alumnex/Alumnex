const aboutBtn = document.querySelector('.about-btn');
const span = document.querySelector('.about-me-span');
const addArrow = document.querySelector('i');
const cardHeader = document.querySelector('.card-header');
const infoContainer = document.getElementById('about-me');

let isActive = false;

aboutBtn.addEventListener('click', function(){
    if(!isActive){
        span.style.display = 'none';
        aboutBtn.classList.add('open');
        addArrow.classList.add('fas', 'fa-chevron-up');
        cardHeader.style.cssText = `
        border-bottom-left-radius:0;
        border-bottom-right-radius:0
        `

        infoContainer.classList.add('active')
        isActive = true
    }else{
        span.style.display = 'block';
        aboutBtn.classList.remove('open');
        addArrow.classList.remove('fas', 'fa-chevron-up');
        cardHeader.style.cssText = `
        border-bottom-left-radius:20px;
        border-bottom-right-radius:20px
        `

        infoContainer.classList.remove('active')
        isActive = false;
    }
})