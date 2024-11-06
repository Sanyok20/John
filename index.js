//find all objects
console.clear()
let works = document.querySelectorAll(".work")
let nav = document.querySelector(".nav")
let blog = document.querySelector(".blog")
let burgerIcon = document.querySelector(".burger-icon")
let arrows = document.querySelector(".arrows")
let arrowUp = document.querySelector(".arrow-up")
let arrowDown = document.querySelector(".arrow-down")
console.log(arrows)
//show menu
burgerIcon.addEventListener("click", showMenu)
function showMenu(){
    nav.classList.toggle("mobile-nav")
}
console.log(burgerIcon)
let workDetails = document.querySelectorAll(".work-details")
console.log(workDetails)
works.forEach(item => 
    item.addEventListener("click", showDetails)
)
function showDetails(){
    workDetails[this.dataset.number - 1].style.display = "block"
    works.forEach(item => 
        item.style.display = "none"
    )
}
let posts = document.querySelectorAll(".post")
console.log(posts)

function showPosts(){
    posts[this.dataset.number - 1].style.display = "block"
    blog.forEach(item => 
        item.style.display = "none"
    )
}
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
window.addEventListener("scroll", () => {
    if (window.scrollY <= scrollHeight * 0.27) {
       arrowUp.style.display="none" 
       arrowDown.style.display="flex"
       arrows.style.display="none"  
    } 
    else if (window.scrollY > scrollHeight * 0.27 && window.scrollY < scrollHeight * 0.4) {
        arrowUp.style.display="none"
        arrowDown.style.display="none"
        arrows.style.display="block"  
    }
    else{
        arrowUp.style.display="flex"  
        arrowDown.style.display="none"
        arrows.style.display="none"  
    }
   });
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
        preloader.classList.add('preloader-hidden');
    }, 990);
}