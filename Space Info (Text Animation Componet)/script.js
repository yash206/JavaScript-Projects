function scrollAppear(text,image){
    var introText = document.querySelector(text);
    var introPostion = introText.getBoundingClientRect().top;
    var image = document.querySelector(image);
    var imagePostion = image.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPostion<screenPosition){
        introText.classList.add('text-display');
    }
    else{
        introText.classList.remove('text-display');
    }
    if(imagePostion<screenPosition*1.1){
        image.classList.add('image-display');
    }
    else{
        image.classList.remove('image-display');
    }
}

function renderElements(){
    scrollAppear('.intro-text1','.image1');
    scrollAppear('.intro-text2','.image2');
    scrollAppear('.intro-text3','.image3');
    scrollAppear('.intro-text4','.image4');
    scrollAppear('.intro-text5','.image5');
    scrollAppear('.intro-text6','.image6');
    scrollAppear('.intro-text7','.image7');
    scrollAppear('.intro-text8','.image8');
    scrollAppear('.intro-text9','.image9');
    scrollAppear('.intro-text10','.image10');
}

window.addEventListener('scroll',renderElements);

//navbar
const navSlide = () => {
    const headImage = document.querySelector(".head-image");
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener('click', ()=>{
        nav.classList.toggle("nav-active");
        headImage.classList.toggle("head-image-updated");
        burger.classList.toggle("toggle");
        navLinks.forEach((link, index)=>{
            if(link.style.animation) link.style.animation = '';
            else link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        });
    });
}

navSlide()