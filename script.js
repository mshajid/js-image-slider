// Constants
const slideWidth = 700;
const images = document.querySelectorAll('.image');
const length = images.length;

// Elements
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const bottom = document.querySelector('.bottom');

// State
let sliderNumber = 1;

// Create buttons
for (let i = 0; i < length; i++) {
    const div = document.createElement("div")
    div.className = 'button';
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = 'white';

// Functions
const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent'
        // document.body.style.background = '#fab1a0' // to change the BG color
    })
}

buttons.forEach((button, i) => {
    button.addEventListener('click', ()=> {
        resetBg();
        dynamicBg();
        slider.style.transform = `translateX(-${i * slideWidth}px)`;
        // slideNumber = i + 1;
        button.style.backgroundColor = 'white';
    })
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * slideWidth}px)`
    sliderNumber ++;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(sliderNumber-2) * slideWidth}px)`
    sliderNumber --;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    sliderNumber = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * slideWidth}px)`;
    sliderNumber = length;
}

// Event listeners
right.addEventListener('click', () => {
    sliderNumber < length ? nextSlide() : getFirstSlide();
    resetBg();
    buttons[sliderNumber-1].style.backgroundColor = 'white';
}); 

left.addEventListener('click', () => {
    sliderNumber > 1 ? prevSlide() : getLastSlide();
    resetBg();
    buttons[sliderNumber-1].style.backgroundColor = 'white';
})