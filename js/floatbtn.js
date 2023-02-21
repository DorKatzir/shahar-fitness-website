if (window.matchMedia('(max-width: 768px)').matches) {
    // Viewport is less or equal to 768 pixels wide

    const sectionContact = document.getElementById('section-contact')
    // const whatsupBtn = document.querySelector('.float-btn')

    const sectionContactOptions = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: .45,
    }


    const contactObserver = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                floatBtn.classList.remove('hide')
                //console.log('not')
            } else{
                
                floatBtn.classList.add('hide')
                

                //console.log('yes')
            }
        })
    }, sectionContactOptions)

    contactObserver.observe(sectionContact)


} 
// else {
//     // Viewport is greater than 768 pixels wide
    
// }








