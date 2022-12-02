const bgVideo = document.getElementById('bgvid')
let playState = null
// console.log(bgVideo)

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            bgVideo.pause()
            playState = false
        } else {
            bgVideo.play()
            playState = true
        }
    })
}, {threshold: 0.7})

observer.observe(bgVideo)

const onVisibilityChange = () => {
    if (document.hidden || !playState) {
        bgVideo.pause()
    } else {
        bgVideo.play()
    }
}

document.addEventListener('visibilitychange', onVisibilityChange)


