const openDiplomaBtn = document.getElementById('open-modal')
const closeDiplomaBtn = document.getElementById('close-modal')
// console.log(openDiplomaBtn.nextElementSibling)

// mouse events
openDiplomaBtn.addEventListener('mousedown', ()=> {
    openDiplomaBtn.nextElementSibling.showModal()
})
closeDiplomaBtn.addEventListener('mousedown', ()=> {
    closeDiplomaBtn.parentElement.close()
})

// touch screens events
openDiplomaBtn.addEventListener('touchstart', () => {
    openDiplomaBtn.nextElementSibling.showModal()
})
closeDiplomaBtn.addEventListener('touchstart', () => {
    closeDiplomaBtn.parentElement.close()
})
