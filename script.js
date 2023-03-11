let navBtn = document.querySelector('.hamburger-menu');
let navLinks = document.querySelector('.nav-links');
navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle("active");
    navLinks.classList.toggle("navActive");
})