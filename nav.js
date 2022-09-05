
const toggleBox = document.querySelector('.box')
const navList = document.querySelector('.nav-list')

toggleBox.addEventListener('click', (e)=> {
    toggleBox.classList.toggle('x')
    navList.classList.toggle('list-opened')
})

    
