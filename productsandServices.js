const containerItems = document.querySelectorAll('.container')
    
containerItems.forEach(containerItem =>{
    containerItem.addEventListener('mouseover', () => {
        containerItem.childNodes[1].classList.add('img-darken');
    })

    containerItem.addEventListener('mouseout', () => {
        containerItem.childNodes[1].classList.remove('img-darken');
    } )
} )