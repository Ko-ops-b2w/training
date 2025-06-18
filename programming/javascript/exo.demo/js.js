// Création d'éléments
// Ajoutez un bouton à votre page HTML. Lorsque vous cliquez sur ce bouton, 
// un nouvel élément de type <li> doit être créé et ajouté à 
// une liste <ul> existante sur la page avec le texte "Nouvel élément".


//  Modification du contenu d'un élément
// Ajoutez un bouton à votre page HTML et un paragraphe vide. Lorsque vous 
// cliquez sur le bouton, le texte "Hello, world!" doit être ajouté au paragraphe.


const button = document.querySelector('.button')

const para = document.getElementById("para")

const p = document.querySelector('p')

button.addEventListener('click',() => {
    button.style.backgroundColor = "red"
    p.textContent = "Hello word"
    p.style.textTransform = "uppercase"
})

// Modification de style
// Ajoutez un bouton à votre page HTML et un paragraphe avec du texte. 
// Lorsque vous cliquez sur le bouton, changez la couleur du texte du paragraphe en rouge.
button.addEventListener('click',() => {
    para.style.color = "red"
    para.style.textTransform = "uppercase"
   
   
})



const ul = document.querySelector('.ul')

function ajouter(){
    const nouvel = document.createElement("li");
    nouvel.textContent = "Nouvel élément";
    ul.appendChild(nouvel)
   
} 
button.addEventListener('click',ajouter)

// Suppression d'éléments
// Ajoutez plusieurs éléments de type <li> à une liste <ul> sur votre page HTML. 
// Ajoutez un bouton à la page. Lorsque vous cliquez sur ce bouton, le premier élément 
// de la liste doit être supprimé.

function supprimer(){
    const firstChild = ul.querySelector("li")
    
    ul.removeChild(firstChild)
   
} 
button.addEventListener('click',supprimer)