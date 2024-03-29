// Movement animation to happen
const container = document.querySelector(".container");
const card = document.querySelector(".card");
// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
// Moving animation element
container.addEventListener("mouseover",(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


// Animate in
container.addEventListener("mouseenter",(e)=>{
    setInterval(()=>{card.style.transition= 'none';}, 300);
    title.style.transform = "translateZ(150px)";
    title.classList.add("pop");
    description.style.transform = "translateZ(120px)";
    description.classList.add("pop");
    sizes.style.transform = "translateZ(100px)";
    sizes.classList.add("pop");
    purchase.style.transform = "translateZ(75px)";
    purchase.classList.add("pop");
    sneaker.style.transform = "translateZ(200px) rotateZ(-30deg)";
})


// Animate out
container.addEventListener("mouseleave",(e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    title.style.transform = "translateZ(0px)";
    title.classList.remove("pop");
    description.classList.remove("pop");
    sizes.classList.remove("pop");
    purchase.classList.remove("pop");
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
})