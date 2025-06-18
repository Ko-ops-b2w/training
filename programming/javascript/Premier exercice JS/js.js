let age = 30;
const majeur = 18;

console.log(age > majeur);

let nmbrea = 5;
let nmbreb = 3;
console.log(nmbrea + nmbreb);
let nmbrec = 10;
let nmbred = 7;
console.log(nmbrec - nmbred);
let nmbree = 4;
let nmbref = 6; 
console.log(nmbree * nmbref);

let prenom = " John";
let nom = "Doe"
nomComplet = nom + prenom;
console.log(nomComplet);
 //aficher faire une phrase//
let sujet = "Le chat";
let verbe = " mange";
let objet = " la souris";
phrase = sujet + verbe + objet;
console.log(phrase);

 //aficher bonjour alice// 
function saluer(Alice){
    console.log(Alice)
}
saluer("Bonjour,Alice!")

function multiplication(a, b){
    return a * b;
}

console.log(multiplication(7,8));
console.log(multiplication(9,5));

 //aficher un tableau//
let personne = [{prenom:'parfait',nom:'Komlavi', age:'30', ville:'Dunkerque'},
    {prenom:'joseph',nom:'Akim', age:'33', ville:'Lille'},
    {prenom:'alice',nom:'Kassim', age:'25', ville:'Lyon'}
]
console.table(personne)


let tableau = [1, 2, 3, 4, 5]

console.log(tableau[0])
console.log(tableau[1])
console.log(tableau[2])
console.log(tableau[3])
console.log(tableau[4])

let vide = []

vide.push(10)
vide.push(20)
vide.push(30)

console.log(vide)
vide.shift(0)