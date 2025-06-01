const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('bx-x')
    console.log(navbar.classList)
    navbar.classList.toggle('active')
    console.log(navbar.classList)
})

let sounBTN = document.querySelector('.SB')
let audi = document.querySelector('.audio')

sounBTN.addEventListener('click', function(){
    audi.paused ? audi.play() : audi.pause()
})
