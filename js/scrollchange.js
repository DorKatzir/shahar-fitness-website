
const sectionHeader = document.querySelector('.header-section')
const sectionHome = document.querySelector('.home')
const brandImage = document.getElementById('brandImage')


const homeOptions = {
    root: null,
    rootMargin: '-24px 0px 0px 0px',
    threshold: 1,
}

const homeObserver = new IntersectionObserver(function (entries, homeObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            sectionHeader.classList.add('full-bleed')

            brandImage.classList.remove('slide-in-img')
            brandImage.classList.add('fade-in-img')
            
        } else {
            sectionHeader.classList.remove('full-bleed')
            
            brandImage.classList.remove('fade-in-img')
            brandImage.classList.add('slide-in-img')

        }
    })
}, homeOptions)

homeObserver.observe(sectionHome)








