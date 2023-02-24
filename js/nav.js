
const toggleBox = document.querySelector('.box')
const navList = document.querySelector('.nav-list')

const floatBtn = document.querySelector('.float-btn')

let isFloat

const links = navList.getElementsByTagName('li')
const newlinks = Array.from(links)
newlinks.splice(0, 1)
//console.log(newlinks)
for (link of newlinks) {

    link.addEventListener('click', ()=>{
        if (window.matchMedia('(max-width: 768px)').matches) {
            toggleBox.classList.remove('x')
            navList.classList.remove('list-opened')
            document.body.classList.remove('stop-scrolling')
            floatBtnHandler(isFloat)
        }
        else{
            return    
        }
    })
}


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



    
