
const toggleBox = document.querySelector('.box')
const navList = document.querySelector('.nav-list')
const floatBtn = document.querySelector('.float-btn')

let isFloat

toggleBox.addEventListener('mousedown', (e)=> {
    toggleBox.classList.toggle('x')
    navList.classList.toggle('list-opened')
    document.body.classList.toggle('stop-scrolling')
    //console.log(isFloat)
    floatBtnHandler(isFloat)
})

function floatBtnHandler(x){
    if(x === true){
        floatBtn.classList.toggle('hide')
        //console.log(x)
    } else {
        x === false
        floatBtn.classList.add('hide')
        //console.log(x)
    }


}



    
