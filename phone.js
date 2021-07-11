
// slider

var counter = 1
setInterval(function() {
    document.getElementById('radio' + counter).checked = true
    counter++
    if(counter > 2) {
        counter = 1
    }
}, 3000)


//  category product 

var allProduct = document.getElementById('all__product')
var trendProduct = document.getElementById('trend__product')
var specialProduct = document.getElementById('special__product')
var featuredProduct = document.getElementById('featured__product')

var allDisplay = document.getElementById('all__product--hidden')
var trendDisplay = document.getElementById('trend__product--hidden')
var specialDisplay = document.getElementById('special__product--hidden')
var featuredDisplay = document.getElementById('featured__product--hidden')


allDisplay.style.opacity = "1"

allDisplay.onclick = function() {
    trendProduct.style.display = "none"
    specialProduct.style.display = "none"
    featuredProduct.style.display = "none"
    allProduct.style.display = 'flex'

    allDisplay.style.opacity = "1"
    trendDisplay.style.opacity = "0.6"
    specialDisplay.style.opacity = "0.6"
    featuredDisplay.style.opacity = "0.6"
}
trendDisplay.onclick = function() {
    allProduct.style.display = "none"
    specialProduct.style.display = "none"
    featuredProduct.style.display = "none"
    trendProduct.style.display = 'flex'

    trendDisplay.style.opacity = "1"
    specialDisplay.style.opacity = "0.6"
    featuredDisplay.style.opacity = "0.6"
    allDisplay.style.opacity = "0.6"

}

specialDisplay.onclick = function() {
    trendProduct.style.display = "none"
    allProduct.style.display = "none"
    featuredProduct.style.display = "none"
    specialProduct.style.display = 'flex'

    specialDisplay.style.opacity = "1"
    trendDisplay.style.opacity = "0.6"
    featuredDisplay.style.opacity = "0.6"
    allDisplay.style.opacity = "0.6"

}
featuredDisplay.onclick = function() {
    trendProduct.style.display = "none"
    allProduct.style.display = "none"
    specialProduct.style.display = "none"
    featuredProduct.style.display = 'flex'

    featuredDisplay.style.opacity = "1"
    trendDisplay.style.opacity = "0.6"
    specialDisplay.style.opacity = "0.6"
    allDisplay.style.opacity = "0.6"

}


let navListHeader = document.getElementById("nav__list--header")
let menuIcon = document.getElementById("menu__icon")
let navExit = document.getElementById("nav__link--exit")
let overLay = document.getElementById("modal__overlay")

menuIcon.addEventListener('click', function(e) {
     e.preventDefault()
     navListHeader.style.left = "0"
     overLay.style.display = "block"
});

navExit.addEventListener('click', function(e) {
    e.preventDefault()
    navListHeader.style.left = "-255px"
    overLay.style.display = 'none'

});

overLay.addEventListener('click', function(e) {
    e.preventDefault()
    navListHeader.style.left = "-255px"
    overLay.style.display = 'none'
});

const navLink = document.querySelectorAll(".nav__item")

function linkAction() {
    navListHeader.style.left = "-255px"
    overLay.style.display = 'none'
}

navLink.forEach(n => n.addEventListener('click', linkAction))