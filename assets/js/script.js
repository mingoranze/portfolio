const inicio = document.querySelector('.link-inicio a');
const sobre = document.querySelector('.link-sobre a');
const portfolio = document.querySelector('.link-portfolio a');
const habilidades = document.querySelector('.link-habilidades a');
const inicioSection = document.querySelector('.inicio');
const sobreSection = document.querySelector('.sobre');
const portfolioSection = document.querySelector('.portfolio');
const habilidadesSection = document.querySelector('.habilidades');

inicio.addEventListener('click', (e)=>{
    e.preventDefault()
    sobreSection.style.display = 'none'
    portfolioSection.style.display = 'none'
    habilidadesSection.style.display = 'none'
    inicioSection.style.display = 'flex'
});

sobre.addEventListener('click', (e)=>{
    e.preventDefault()
    portfolioSection.style.display = 'none'
    habilidadesSection.style.display = 'none'
    inicioSection.style.display = 'none'

    if(sobreSection.style.display = 'none') {
        sobreSection.style.display = 'flex'
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
        habilidadesSection.style.display = 'flex'
    } else {
        habilidadesSection.style.display = 'none'    
    }
});
