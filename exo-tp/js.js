const menuBurger = document.querySelector('.menu-burger');
const menuHidden = document.querySelector('.hidden');

// menuBurger.addEventListener('click', () => {
//   menuHidden.classList.toggle('hidden');
//   menuHidden.style.color = "gray";
//   menuHidden.style.textTransform = "uppercase";

// });


const navMenu = document.querySelector('.nav-menu')

menuBurger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu');
    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "column"
})