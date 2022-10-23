const myCarouselElement = document.querySelector('#travel-slider');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  pause: 'hover'
})

let slidebutton1 = document.querySelector('#slide-button');
let slidebutton2 = document.querySelector('#slide-button2');

let navbutton = document.querySelector('#navbutton');
navbutton.addEventListener('click', () => {
    slidebutton1.style.marginTop = "290px";
    slidebutton2.style.marginTop = "290px";
    slidebutton1.style.opacity = "0";
    slidebutton2.style.opacity = "0";
}
)





