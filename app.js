var i = 0
var time = 3000
var images = []

images[0] = 'https://lirp-cdn.multiscreensite.com/15b30481/dms3rep/multi/opt/Halong+Bay+10-1920w.jpg'
images[1] = 'https://lirp.cdn-website.com/15b30481/dms3rep/multi/opt/shutterstock_705177526-1920w.jpg'
images[2] = 'https://lirp-cdn.multiscreensite.com/15b30481/dms3rep/multi/opt/Halong+Bay+10-1920w.jpg'
images[3] = 'https://lirp.cdn-website.com/15b30481/dms3rep/multi/opt/shutterstock_1183590049-1920w.jpg'

function changeImg() {
    document.slide.src = images[i]
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg()