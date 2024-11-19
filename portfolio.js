var openDiv = document.querySelector(".open-div");
var ul = document.querySelectorAll(".ulChildern li a");
setTimeout(() => {
  openDiv.style.display = "none";
}, 8500);


console.log(ul);
ul.forEach((el) => {
  el.addEventListener("click", () => {
    ul.forEach((item) => {
      item.classList.remove("active");
    });
    el.classList.add("active");
  });
});

var start = document.getElementById("start");
var openbtn = document.getElementById("open");
var h1 = document.getElementById("h1");
var autoText = document.querySelector(".autoText span");
// var nav= document.getElementById('nav');
start.addEventListener("click", () => {
  openbtn.style.display = "none";
  autoText.classList.add("auto-type");
  var typed = new Typed(".auto-type", {
    strings: ["Hi, Iam Aya :) "],
    typeSpeed: 170,
    loop: false,
  });
  // document.body.style.overflow='auto';
  // nav.style.display="flex";
});
var line= document.querySelector('.line');
var skillsSec= document.querySelector('.skills');
window.addEventListener('scroll',()=>{
  var rect= skillsSec.getBoundingClientRect();

  if(rect.top < window.innerHeight && rect.bottom>=0){
    line.style.animation='big 7s';
    line.style.animationDelay='1s';
    // line.style.backgroundColor='red';
  }


});
