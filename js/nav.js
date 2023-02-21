
const toggleBox = document.querySelector('.box')
const navList = document.querySelector('.nav-list')
const floatBtn = document.querySelector('.float-btn')

toggleBox.addEventListener('click', (e)=> {
    toggleBox.classList.toggle('x')
    navList.classList.toggle('list-opened')
    floatBtn.classList.toggle('hide')
    document.body.classList.toggle('stop-scrolling')
})



    
