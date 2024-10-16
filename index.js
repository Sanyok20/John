//find all objects
let works = document.querySelectorAll(".work")
let nav = document.querySelector(".nav")
let blog = document.querySelector(".blog")
let burgerIcon = document.querySelector(".burger-icon")

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
blog.forEach(item => 
    item.addEventListener("click", showPosts)
)
function showPosts(){
    posts[this.dataset.number - 1].style.display = "block"
    blog.forEach(item => 
        item.style.display = "none"
    )
}
