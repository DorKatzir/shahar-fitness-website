
const toggleBox = document.querySelector('.box')
const navList = document.querySelector('.nav-list')

toggleBox.addEventListener('click', (e)=> {
    toggleBox.classList.toggle('x')
    navList.classList.toggle('list-opened')
})

    



// const primaryNav = document.querySelector('.primary-navigation')
// const navToggle = document.querySelector('.mobile-nav-toggle')

// navToggle.addEventListener('click', () => {

//     const visibility = primaryNav.getAttribute('data-visible')

//     if (visibility === "false"){
//         primaryNav.setAttribute('data-visible', "true")
//         navToggle.setAttribute('aria-expanded',"true")
        
//         console.log(visibility)
//     }else if (visibility === "true"){
//         primaryNav.setAttribute('data-visible', "false")
//         navToggle.setAttribute('aria-expanded',"false")
//         console.log(visibility)
//     }

// })