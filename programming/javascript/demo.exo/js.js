// Gestion d'événements multiples
// Ajoutez trois boutons à votre page HTML, chacun ayant un identifiant unique. 
// Créez une seule fonction de gestionnaire d'événements JavaScript. Lorsque vous 
// cliquez sur l'un des boutons, un message s'affiche dans la console indiquant
// l'identifiant du bouton sur lequel vous avez cliqué.

function cliquer(event) {
    console.log("Vous aviez cliqué sur :", event.target.id);
    
}


document.getElementById("start").addEventListener("click", cliquer)
document.getElementById("envoyer").addEventListener("click", cliquer)
document.getElementById("savoir plus").addEventListener("click", cliquer)


const button = document.querySelectorAll("button")


button[0].addEventListener("click", () => {
    button[0].style.backgroundColor = "gray"
})
button[1].addEventListener("click", () => {
    button[1].style.backgroundColor = "gray"
})
button[2].addEventListener("click", () => {
    button[2].style.backgroundColor = "gray"
})