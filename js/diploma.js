const openDiplomaBtn = document.getElementById('open-modal')
const closeDiplomaBtn = document.getElementById('close-modal')

// console.log(openDiplomaBtn.nextElementSibling)

// mouse events
openDiplomaBtn.addEventListener('mousedown', ()=> {
    document.body.classList.add('stop-scrolling')
    openDiplomaBtn.nextElementSibling.showModal()
})
closeDiplomaBtn.addEventListener('mousedown', ()=> {
    document.body.classList.remove('stop-scrolling')
    closeDiplomaBtn.parentNode.parentElement.close()
})


// touch screens events
openDiplomaBtn.addEventListener('touchstart', () => {
    document.body.classList.add('stop-scrolling')
    openDiplomaBtn.nextElementSibling.showModal()
})
closeDiplomaBtn.addEventListener('touchstart', () => {
    document.body.classList.remove('stop-scrolling')
    closeDiplomaBtn.parentNode.parentElement.close()
})
