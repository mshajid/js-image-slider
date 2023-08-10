const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image')


let sliderNumber = 1;

right.addEventListener('click', () => {
    if (sliderNumber < images.length) {
        slider.style.transform = `translateX(-${sliderNumber * 700}px)`
        sliderNumber ++;
    } else {
        slider.style.transform = `translateX(0px)`
        sliderNumber = 1;
    }
}); 

// 700
// 1400
// 2     - for the last image