
const sectionHeader = document.querySelector('.header-section')
const sectionHome = document.querySelector('.home')
const logo = document.getElementById('brandImage')

const homeOptions = {
    root: null,
    rootMargin: '-20px 0px 0px 0px',
    threshold: 1,
}

const mqLarge = window.matchMedia('(min-width: 870px)')
mqLarge.addEventListener('change', mqLargrHandler)



// media query handler function
function mqLargrHandler(e) {
    // console.log(e.matches ? 'large' : 'not large')

    const homeObserver = new IntersectionObserver(function (entries, homeObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting && e.matches) {
                sectionHeader.classList.add('full-bleed')
                logo.src = './images/slogan/horizontal_logo.svg'
            } else {
                sectionHeader.classList.remove('full-bleed')
                logo.src = './images/slogan/large_409X123.svg'
            }
        })
    }, homeOptions)

    homeObserver.observe(sectionHome)

    if (!e.matches) {
        console.log('not large')
        homeObserver.unobserve(sectionHome)
    }

}
// initial state
mqLargrHandler(mqLarge);








