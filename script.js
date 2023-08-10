const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image')


let sliderNumber = 1;

let length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * 700}px)`
    sliderNumber ++;
}

const prevSlide = () => {
    slider.style.transform = `translateX(0px)`
    sliderNumber = 1;
}

right.addEventListener('click', () => {
    if (sliderNumber < length) {
        nextSlide();
    } else {
        prevSlide();
    }
}); 

// 700
// 1400
// 2     - for the last image