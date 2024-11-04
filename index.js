//find all objects
let works = document.querySelectorAll(".work")
let nav = document.querySelector(".nav")
let blog = document.querySelector(".blog")
let burgerIcon = document.querySelector(".burger-icon")
let arrowUp = document.querySelector(".arrow-up")
let arrowDown = document.querySelector(".arrow-down")
let arrows = document.querySelector(".arrows")
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
// blog.forEach(item => 
//     item.addEventListener("click", showPosts)
// )
function showPosts(){
    posts[this.dataset.number - 1].style.display = "block"
    blog.forEach(item => 
        item.style.display = "none"
    )
}

window.addEventListener("scroll", () => {
    if (window.scrollY <= 400) {
      arrowUp.style.display="none" 
      arrowDown.style.display="flex"
      arrows.style.display="none"  
    } 
    else if (window.scrollY > 400 && window.scrollY < 800) {
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