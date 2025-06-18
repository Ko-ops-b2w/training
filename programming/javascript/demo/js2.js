// A partir de ce morceau de code, construiser un code js qui permettra à 
// une boule de suivre le curseur de votre souris

// const souris = document.querySelector('.souris');
// document.addEventListener('mousemove', (e) => {
//     souris.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
// })



const container = document.querySelector('.container');
document.addEventListener('mousemove', (e) => {
    container.style.transform = `translate(${e.clientX - 80}px, ${e.clientY - 80}px)`;
})
