// Jeu du Pendu
// Les mots à trouver
const mots = ["ordinateur", "mobile", "clavier", "souris", "tapis"];
 

// Mes variables
let motSelectionner = "";
let lettreChoisi = [];
let plusErreurs = 6;
let erreur = 0;
let score = 0;

const motsDiv = document.getElementById("mot")
const lettresDiv = document.getElementById("lettres")
const messageP = document.getElementById("message")
const errorsLeftSpan = document.getElementById("errors-left") 
const rejouer = document.getElementById("btn")
const scores = document.getElementById("score")


const background = [
    'url("image1.jpg")',
    'url("image2.jpg")'
]
/**
 * la function imageBack pour changer le fond de mon jeux 
 * à chaque fois que le jeux est reinnitialiser
 */
function imageBack(){
    const index = Math.floor(Math.random()*background.length);
    document.body.style.backgroundImage = background[index];

}



/**
 * la function initGame sert à initialiser le jeux 
 */
function initGame() {
    motSelectionner = mots[Math.floor(Math.random() * mots.length)];
    lettreChoisi = [];
    erreur = 0;
    errorsLeftSpan.textContent = plusErreurs;
    messageP.textContent = "";
    rejouer.style.display = "none";
  
    imageBack()
    displayMot()
    choixAlphabet()

}

/**
 * la function displayMot consiste aux choix des lettres, les séparer, pour les mettre ensembles
 * d'une manière ordonner pour trouver le mot selectionné
 */
function displayMot() {
    motsDiv.innerHTML = motSelectionner
    .split("")
    .map(lettre => (lettreChoisi.includes(lettre) ? lettre : "_"))
    // if(lettreChoisi.include(lettre)){
    // lettre
    // }
    // else{
    // "-"
    // }


    // .map(...)
// → Méthode qui parcourt un tableau et retourne un nouveau tableau en appliquant une fonction 
// à chaque élément.

// lettre => (...)
// → Fonction fléchée. Pour chaque élément du tableau (ici nommé lettre), on exécute 
// l'expression entre parenthèses.

// lettreChoisi.includes(lettre)
// → Vérifie si la lettre actuelle est dans le tableau lettreChoisi.

// ? lettre : "_"
// → Opérateur ternaire :

// Si la condition (lettreChoisi.includes(lettre)) est vraie, on garde la lettre.

// Sinon, on remplace par "_".


    .join("");
}



/**
 * la function choixAlphabet consiste à mettre ne place un clavier virtuel 
 * qui apparait lorsque le jeux commence
 */
function choixAlphabet() {
    lettresDiv.innerHTML = "";
    for (let i = 65; i <=90; i++){
        const lettre = String.fromCharCode(i).toLowerCase();
        const button = document.createElement("button");
        button.textContent = lettre;
        button.addEventListener("click", () => handleGuess(lettre, button))  
        lettresDiv.appendChild(button); 
    }
}


/**
 * la function handleGuess sert au de veérifier si les lettres choisis correspondent
 * au mot à deviner pour exécuter les les functions vérifgagnant ou verifperdu
 * @param {string} lettre 
 * @param {string} button 
 */
function handleGuess(lettre, button){
button.disabled = true;
if (motSelectionner.includes(lettre)){
    lettreChoisi.push(lettre);
    displayMot()
    verifGagnant()

}
else{
    erreur++;
    errorsLeftSpan.textContent = plusErreurs - erreur;
    verifPerdu()
}
}

/**
 * la function verifgagnant consite à vérifier si les lettres choisies sont égales au mot deviner 
 * pour afficher un message de victoire et exécuter la function findujeu
 */

function verifGagnant() {
    const motChoisi = motSelectionner.split("").every(l => lettreChoisi.includes(l));
                         
if (motChoisi){
    messageP.textContent = "🎉 Bravo vous avez gagné !";
    score++
    scores.textContent = score;
   
    finDuJeu()
}
}


/**
 * la function verifperdu consite à vérifier si les lettres choisies sont different au mot deviner
 * et si l'erreur restante est égale à zéro 
 * pour afficher un message de perdant et exécuter la function findujeu
 */
function verifPerdu() {
    if (erreur >= plusErreurs) {
        messageP.textContent = `😢 Perdu ! Le mot était : ${motSelectionner}`;
       
        finDuJeu()
    }
}



/**
 * la fuction fin du jeu sert à mettre fin au jeux et reprendre une nouvelle partie
 */
function finDuJeu() {
    const buttons = lettresDiv.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);
    rejouer.style.display = "inline-block";
    rejouer.style.textContent = "Rejouer";
}

/**
 * cette function sert à riennitialiser le jeux à chaque click sur le bouton start
 */
rejouer.addEventListener("click", initGame)