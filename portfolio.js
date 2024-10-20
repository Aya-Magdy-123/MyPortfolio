var openDiv = document.querySelector(".open-div");
var ul = document.querySelectorAll(".ulChildern li a");
setTimeout(() => {
  openDiv.style.display = "none";
}, 8500);

// var nav = document.getElementById("nav");
// window.addEventListener("scroll", () => {
//   if (window.scrollY == 0) {
//     nav.style.position = "sticky";
//     nav.style.width = "100%";
//   } else {
//     nav.style.position = "fixed";
//     nav.style.width = "80%";
//   }
// });
console.log(ul);
ul.forEach((el)=>{
el.addEventListener('click',()=>{
  ul.forEach((item)=>{
    item.classList.remove('active');
  });
  el.classList.add('active');
  
  });

});



