// forEach : Affiche chaque nombre du tableau avec ce message :

// "Le nombre est : X"

// filter : Crée un nouveau tableau grandsNombres qui contient uniquement 
// les nombres supérieurs à 10.

// map : Crée un nouveau tableau doubles qui contient le double de 
// chaque nombre du tableau de base.

const nombres = [1, 5, 12, 8, 130, 44];


nombres.forEach(function(nombre){
    console.log(`le nombre est:${nombre}`);
    
});


const grandsNombres = nombres.filter(function(nombre){
    return nombre > 10;
});
console.log(grandsNombres);


const doubleNombres = nombres.map(function(nombre){
    return nombre * 2
})

console.log(doubleNombres);

const petitsNombres = nombres.filter(function(nombre){
    return nombre < 10;
});
console.log(petitsNombres);

