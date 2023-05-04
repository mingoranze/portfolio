const inicio = document.querySelector('.link-inicio a');
const sobre = document.querySelector('.link-sobre a');
const portfolio = document.querySelector('.link-portfolio a');
const habilidades = document.querySelector('.link-habilidades a');
const inicioSection = document.querySelector('.inicio');
const sobreSection = document.querySelector('.sobre');
const portfolioSection = document.querySelector('.portfolio');
const habilidadesSection = document.querySelector('.habilidades');
const menuOpen = document.querySelector('.menu-mobile');
const closeMenu = document.querySelector('.close')
const menu = document.querySelector('.menu')

inicio.addEventListener('click', (e)=>{
    e.preventDefault()
    sobreSection.style.display = 'none'
    portfolioSection.style.display = 'none'
    habilidadesSection.style.display = 'none'
    inicioSection.style.display = 'flex'
    menu.style.display = 'none'
});

sobre.addEventListener('click', (e)=>{
    e.preventDefault()
    portfolioSection.style.display = 'none'
    habilidadesSection.style.display = 'none'
    inicioSection.style.display = 'none'

    if(sobreSection.style.display = 'none') {
        sobreSection.style.display = 'flex'
        menu.style.display = 'none'
    } else {
        sobreSection.style.display = 'none'    
    }
});

portfolio.addEventListener('click', (e)=>{
    e.preventDefault()
    sobreSection.style.display = 'none'
    habilidadesSection.style.display = 'none'
    inicioSection.style.display = 'none'

    if(portfolioSection.style.display = 'none') {
        portfolioSection.style.display = 'flex'
        menu.style.display = 'none'
    } else {
        portfolioSection.style.display = 'none'    
    }
});

habilidades.addEventListener('click', (e)=>{
    e.preventDefault()
    sobreSection.style.display = 'none'
    portfolioSection.style.display = 'none'
    inicioSection.style.display = 'none'

    if(habilidadesSection.style.display = 'none') {
        habilidadesSection.style.display = 'flex';
        menu.style.display = 'none';
    } else {
        habilidadesSection.style.display = 'none';   
    }
});

menuOpen.addEventListener('click', (e)=>{
    e.preventDefault()
    if(menu.style.display = 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none'
    }
    
    
});

let totalItems = document.querySelectorAll('.projeto-item').length;

let portfolioWidth = document.querySelector('.slider').clientWidth;
let portfolioHeight = document.querySelector('.slider').clientHeight;

document.querySelector('.projetos').style.width = 
    `${totalItems * portfolioWidth}px`;

document.querySelector('.controles').style.width = 
    `${portfolioWidth}px`;
document.querySelector('.controles').style.height = 
    `${portfolioHeight}px`;



