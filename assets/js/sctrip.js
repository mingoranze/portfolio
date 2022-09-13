skillJason.map((skill, index)=>{
    let skillItem = document.querySelector('.skill-item-area .skill-item-frente').cloneNode(true);

    skillItem.querySelector('.mini-logo').src = skill.img;
    skillItem.querySelector('p').innerHTML = skill.name;
    document.querySelector('.skill-area').append(skillItem);
});


