if (window.matchMedia('(max-width: 790px)').matches) {
    // Viewport is less or equal to 768 pixels wide

    const sectionContact = document.getElementById('contact')
    const whatsupBtn = document.querySelector('.float-btn')

    const sectionContactOptions = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: .45,
    }


    const contactObserver = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                whatsupBtn.classList.remove('hide')
                isFloat = true
                //console.log('not')
            } else{
                whatsupBtn.classList.add('hide')
                isFloat = false
                //console.log('yes')
            }
        })
    }, sectionContactOptions)

    contactObserver.observe(sectionContact)


} 
// else {
//     // Viewport is greater than 768 pixels wide
    
// }








