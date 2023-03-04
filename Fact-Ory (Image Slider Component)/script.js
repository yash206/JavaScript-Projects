const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');
const part1 = document.querySelector('.part1')

const prev = document.querySelector('#prevBtn');
const next = document.querySelector('#nextBtn');

// counter
let counter = 1;
let size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

prev.addEventListener('click', ()=>{
    if(counter<=0) return;
    carouselSlide.style.transition = 'transform 1.5s ease-in-out';
    counter = counter-1;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
});
next.addEventListener('click', ()=>{
    if(counter>=carouselImage.length-1) return;
    carouselSlide.style.transition = 'transform 1.5s ease-in-out';
    counter = counter+1;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
});
carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImage[counter].id === 'lastOne'){
        carouselSlide.style.transition = 'none';
        counter = carouselImage.length-2;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
    else if(carouselImage[counter].id === 'firstOne'){
        carouselSlide.style.transition = 'none';
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
});
window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImage[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});