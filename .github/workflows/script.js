console.log("Hello World");
const heading = document.querySelector("h1");
heading.innerText = "Welcome to My Gallery";
const button = document.querySelector("button");
button.addEventListener("click",() => {
    alert("Opening YouTube Videos🚀");
});
const image = document.querySelector(".Gopuram-10 (1)");
image.addEventListener("click",() => {
    image.classList.toggle("zoom");
});
const Video = document.querySelector(".vid");
Video.addEventListener("click",() =>{
    if(Video.paused){
        Video.play();
    } else{
        Video.pause();
    }
});

const yearText = document.querySelector(".special");
const currentYear = new Date().getFullYear();
yearText.innerText = '©️${currentYear}';