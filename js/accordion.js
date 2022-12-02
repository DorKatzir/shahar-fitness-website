
const acc = document.getElementsByClassName('accordion')
const panelOne = document.getElementsByClassName('one')
const panelTwo = document.getElementsByClassName('two')
const panelThree = document.getElementsByClassName('three')

let i

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        
        let panel = this.nextElementSibling
        

        if (this.classList.contains('one') && panel.classList.contains('one')) {
            this.classList.toggle('active')

            panelTwo[0].classList.remove('active')
            panelTwo[1].style.maxHeight = null
            panelThree[0].classList.remove('active')
            panelThree[1].style.maxHeight = null
            togglePanel(this)
        }

        if (this.classList.contains('two') && panel.classList.contains('two')) {
            this.classList.toggle('active')
            
            panelOne[0].classList.remove('active')
            panelThree[0].classList.remove('active')
            panelOne[1].style.maxHeight = null
            panelThree[1].style.maxHeight = null
            togglePanel(this)
        }

        if (this.classList.contains('three') && panel.classList.contains('three')) {
            this.classList.toggle('active')

            panelOne[0].classList.remove('active')
            panelTwo[0].classList.remove('active')
            panelOne[1].style.maxHeight = null
            panelTwo[1].style.maxHeight = null
            togglePanel(this)
        }
        

        function togglePanel(x){
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px'
            }
        }
        

    })
}


