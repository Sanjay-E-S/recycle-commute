
// 
const bgContatiner = document.querySelector('.rc-herosec__bg');
const bgImg = document.querySelector('.rc-herosec__bgimg');
const bgtext = document.querySelector('.rc-herosec__bgtext');
const text = document.querySelector('.rc-herosec__text');

bgContatiner.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 85;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 85;

    bgImg.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})
bgContatiner.addEventListener('mouseenter',(e)=>{
    // bgImg.style.transition = "all ease 0.2s";
    bgtext.style.transform = "translateZ(200px) rotateZ(-0deg)";
    text.style.transform = "translateZ(200px) rotateZ(-0deg)";
})

bgContatiner.addEventListener('mouseleave',(e)=>{
    bgImg.style.transition = "all ease 0.2s";
    bgImg.style.transform = "rotateX(0deg) rotateY(0deg)";
})