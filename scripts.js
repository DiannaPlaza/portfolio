// hamburger menu

const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navUl');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show')
})

// clear form
document.getElementById("form").reset(); 

