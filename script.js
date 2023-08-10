const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom');


let sliderNumber = 1;

let length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * 700}px)`
    sliderNumber ++;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(sliderNumber-2) * 700}px)`
    sliderNumber --;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    sliderNumber = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 700}px)`;
    sliderNumber = length;
}

right.addEventListener('click', () => {
    sliderNumber < length ? nextSlide() : getFirstSlide();
}); 

left.addEventListener('click', () => {
    sliderNumber > 1 ? prevSlide() : getLastSlide();
})

for (let i = 0; i < length; i++) {
    const div = document.createElement("div")
    div.className = 'button';
    bottom.appendChild(div)
}