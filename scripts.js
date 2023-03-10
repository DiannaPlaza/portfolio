const navMenu = document.querySelector(".navMenu");
const navItems = document.querySelectorAll(".navItem");
const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");


function toggleMenu() {
  if (navMenu.classList.contains("showNavMenu")) {
    navMenu.classList.remove("showNavMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    navMenu.classList.add("showNavMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

const navItem = document.querySelectorAll(".navItem");
navItem.forEach( 
  function(navItem) { 
    navItem.addEventListener("click", toggleMenu);
  }
)

const projects = document.querySelectorAll('.allProjects')
window.addEventListener('scroll', checkProjects)
  checkProjects()

  function checkProjects(){
    const triggerBottom = window.innerHeight / 5 * 4
    projects.forEach(allProjects =>{
      const projectTop = allProjects.getBoundingClientRect().top
      if(projectTop < triggerBottom){
        allProjects.classList.add('show')
      } else{
        allProjects.classList.remove('show')
      }
    })

  }

