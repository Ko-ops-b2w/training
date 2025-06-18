// Objectif : Utiliser l'instruction switch pour afficher un plat du jour en fonction du 
// jour de la semaine. (1 = lundi, 2 = mardi, 3 = mercredi, 4 = jeudi, 5 = vendredi, 
// le weekend = default)

// Numéro    Plat du jour
// 1    Spaghetti Bolognaise
// 2    Poulet rôti
// 3    Poisson pané
// 4    Salade composée
// 5    Pizza Margherita

// Ecrire un programme qui permettra de vérifier le plat du jour dans la semaine

// let jour

// switch (jour) {
//     case 1:
//         console.log("Spaghetti Bolognaise")
//         break;

//         case 2:
//         console.log("Poulet rôti")
//         break;

//         case 3:
//         console.log("Poisson pané")
//         break;

//         case 4:
//         console.log("Salade composée")
//         break;

//         case 5:
//         console.log("Pizza Margherita")
//         break;

//     default:
//         console.log("le week-end")
//         break;
// }


// Écrivez une fonction qui prend en entrée un mois (1 pour janvier, 2 pour février, etc.) 
// et retourne le nombre de jours dans ce mois. Assurez-vous de gérer correctement le cas 
// de février pour les années bissextiles (29 jours) et non bissextiles (28 jours).


let annee =  2024

function nombreDeJourDuMois(mois){
    switch (mois) {
    case 1:
        console.log("Le mois est Janvier avec 31jrs");
    
        return 31;
        
    case 2:

        if((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)){
             console.log("Le mois est Février avec 29jrs");
             return 29;

        }
        else{
             console.log("Le mois est Février avec 28jrs"); 
             return 28;

        }
       
        
        break;     

    case 3:
        console.log("Le mois est Mars avec 31jrs");
        
        return 31;
    case 4:
        console.log("Le mois est Avril avec 30jrs");
        
        return 30;
    case 5:
        console.log("Le mois est  avec 31jrs");
        
        return 31;     

    case 6:
        console.log("Le mois est  avec 30jrs");
        
        return 30;
    case 7:
        console.log("Le mois est Juillet avec 31jrs");
        
         return 31;
    case 8:
        console.log("Le mois est Août avec 31jrs");
        
         return 31;    

    case 9:
        console.log("Le mois est Septembre avec 30jrs");
        
        return 30;
    case 10:
        console.log("Le mois est Octobre avec 31jrs");
        
         return 31;
    case 11:
        console.log("Le mois est Novembre avec 30jrs");
        
         return 30;    

    case 12:
        console.log("Le mois est Décembre avec 31jrs");
        
         return 31;            
    default:
        console.log(('test'));
        
        break;
}

}

nombreDeJourDuMois(2);
    

    

