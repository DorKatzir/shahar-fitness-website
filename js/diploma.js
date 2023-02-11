const openDiplomaBtn = document.getElementById('open-modal')
const closeDiplomaBtn1 = document.getElementById('close-modal-1')
const closeDiplomaBtn2 = document.getElementById('close-modal-2')
// console.log(openDiplomaBtn.nextElementSibling)

// mouse events
openDiplomaBtn.addEventListener('mousedown', ()=> {
    openDiplomaBtn.nextElementSibling.showModal()
})
closeDiplomaBtn1.addEventListener('mousedown', ()=> {
    closeDiplomaBtn1.parentNode.parentElement.close()
})
closeDiplomaBtn2.addEventListener('mousedown', ()=> {
    closeDiplomaBtn2.parentNode.parentElement.close()
})

// touch screens events
openDiplomaBtn.addEventListener('touchstart', () => {
    openDiplomaBtn.nextElementSibling.showModal()
})
closeDiplomaBtn1.addEventListener('touchstart', () => {
    closeDiplomaBtn1.parentNode.parentElement.close()
})
closeDiplomaBtn2.addEventListener('touchstart', () => {
    closeDiplomaBtn2.parentNode.parentElement.close()
})
