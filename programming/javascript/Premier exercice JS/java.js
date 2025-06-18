// let data = {
//     "id": "0001",
//     "type": "donut",
//     "name": "Cake",
//     "ppu": 0.55,
//     "batters":
//     {
//         "batter":
//             [
//                 { "id": "1001", "type": "Rick" },
//                 { "id": "1002", "type": "Chocolate" },
//                 { "id": "1003", "type": "Blueberry" },
//                 { "id": "1004", "type": "Devil's Food" }
//             ]
//     },
//     "topping":
//         [
//             { "id": "5001", "type": "None" },
//             { "id": "5002", "type": "Glazed" },
//             { "id": "5005", "type": "Morty" },
//             { "id": "5007", "type": "helloWorld" },
//             { "id": "5006", "type": "Chocolate with Sprinkles" },
//             { "id": "5003", "type": "Chocolate" },
//             { "id": "5004", "type": "Maple" }
//         ]
// }

// console.log(data.name);
// console.log(data.ppu);
// console.log(data.topping);
// console.log(data.batters.batter[3].id)
// console.log(data.batters.batter[3].type)
// console.log(data.topping[0].id)
// console.log(data.topping[6].id)
// console.log(data.topping[6].type)
// console.log(data.batters.batter[0].type + " est l'id " +  data.batters.batter[0].id)
// console.log(data.topping[0].id + " " + data.name)

let object = {
    nom: "Alice",
    age: "25",
    ville: "Paris"

}
console.log(object)

let compte = {
    solde: 1000,
    titulaire: "John Doe"
};
console.log(compte)
console.log(compte.solde += 500);



 //Affichez les nombres pairs de 1 à 20 //

for (let paire = 1; paire <= 20; paire = paire + 1) {
if (paire % 2 === 0) {
    console.log(paire);
}
}

const button = document.getElementsByClassName('button')
console.log(button[0])


button[0].addEventListener("click", () => {
    button[0].style.backgroundColor = "red"
})

const header = document.getElementById("titre")
console.log(header)

header.addEventListener("click", () => {
    header.style.color = "black"
     header.style.backgroundColor = "gray"
      header.style.textTransform = "uppercase"
})
// ompter de 1 à 10
// Objectif : Utiliser une boucle while pour afficher les nombres de 1 à 10 dans la console.
let nomber = 0

while(nomber <= 9){
    
    nomber++;
    console.log(nomber)
}
// Deviner un nombre
// Objectif : Calcule la somme des nombres de 1 à 100.

let num = 0;
let some = 0;

while(num <= 100){
    some += num;
    num++;
    console.log(some);
}

// Deviner un nombre
// Objectif : Demander à l'utilisateur de deviner un nombre entre 1 et 10 jusqu'à 
// ce qu’il trouve la bonne réponse.

let findNumber = 8;
let enterNumber
while(enterNumber !== findNumber){
    findNumber = parseInt(prompt('enter a number'))
    console.log("Incorect")
}
if(enterNumber == findNumber){
    console.log("Correct")
}