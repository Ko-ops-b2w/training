
let agee = 20;
if (agee >= 18){
    console.log("Majeur")
}
else{
    console.log("Mineur")
}
// function verifAgee(agee){
//     if (agee >= 18){
// console.log("Majeur")
//     }
//  else{
//     console.log("Mineur")
//  }
// }

// verifAgee(14);

function verifAgee(agee){
    if(agee >= 18){
         return "Majeur"
    }
       
    else{
        return "Mineur"
    }
}
console.log(verifAgee(15))

//Affichez les nombres pairs de 1 à 20 //

// for (let numbers = 2;numbers <= 20; numbers += 2){
//     console.log(numbers)
// }