AOS.init({
  offset: 150,
  duration: 1000,
});

// navigation
const navLinks = document.querySelector('.nav-links')
const navBtn = document.querySelector('.navBtn')
const navbar = document.querySelector('.navbar')

navBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('show')
    navbar.classList.toggle('show')
})