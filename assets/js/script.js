skillJason.map((item, index)=>{
    let skillItem = document.querySelector('#skill-item').cloneNode(true);

    skillItem.setAttribute('data-key', index);
    skillItem.querySelector('p').innerHTML = item.name;
    skillItem.querySelector('img').src = item.logo;
    skillItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('#skill-item').getAttribute('data-key');
        document.querySelector('#imgModal').src = skillJason[key].certificado;

        document.querySelector('#modal').style.opacity = 0;
        document.querySelector('#modal').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('#modal').style.opacity = 1;
        },200);
    })

    document.querySelector('#skill-area').append(skillItem);
});

function closeModal(){
    document.querySelector('#modal').style.opacity = 0;
    setTimeout(()=>{    
        document.querySelector('#modal').style.display = 'none';
    },200);
}
