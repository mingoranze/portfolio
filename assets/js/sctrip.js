function flip() {
    let area = document.querySelector('.skill-item-area');
    if(area.classList.contains('flip') == true) {
        area.classList.remove('flip');
    } else {
        area.classList.add('flip');
    }
}

skillJason.map((skill, index)=>{
    let skillItemF = document.querySelector('.skill-item-area .skill-item-frente').cloneNode(true);
    let skillItemV = document.querySelector('.skill-item-area .skill-item-verso').cloneNode(true);

    skillItemF.querySelector('.mini-logo').src = skill.img;
    skillItemF.querySelector('p').innerHTML = skill.name;
    document.querySelector('.skill-area').append(skillItemF);

   skillItemV.querySelector('ul li').innerHTML = 'asd'

});



