skillJason.map((item)=>{
    let skillItem = document.querySelector('#skill-item').cloneNode(true);

    skillItem.querySelector('p').innerHTML = item.name;
    skillItem.querySelector('img').src = item.logo;

    document.querySelector('#skill-area').append(skillItem);
});

