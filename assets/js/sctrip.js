skillJason.map((skill, index)=>{
    let skillItem = document.querySelector('.skill-item-area').cloneNode(true);

    


    document.querySelector('.skill-main .container .skill-area').append(skillItem);
});