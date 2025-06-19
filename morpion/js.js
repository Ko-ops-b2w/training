const case0 = document.querySelector('.case0')
const case1 = document.querySelector('.case1')
const case2 = document.querySelector('.case2')
const case3 = document.querySelector('.case3')
const case4 = document.querySelector('.case4')
const case5 = document.querySelector('.case5')
const case6 = document.querySelector('.case6')
const case7 = document.querySelector('.case7')
const case8 = document.querySelector('.case8')
const scorex = document.querySelector('#scorex')
const button = document.querySelector('#rejouer')

let tab = ["case0","case1","case2", "case3","case4","case5","case6","case7","case8",]

let joueurActif = 0
let compteur = 0
let compteurX = 0
let compteurO = 0
let jeuJouable = true



case0.addEventListener('click',() => {
    if ( case0.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
         case0.style.backgroundImage = "url('image/X.png')";
         joueurActif = 1
    }

    else {
         case0.style.backgroundImage = "url('image/R (1).png')";
         joueurActif = 0
    }
    if (compteur < 8) {
        compteur++;
        return;
    }
    if (compteur == 8) {
        console.log("Match Nul")
    }
    verifGagne()
   
})

case1.addEventListener('click',() => {
    if ( case1.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case1.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case1.style.backgroundImage = "url('image/R (1).png')";
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})

case2.addEventListener('click',() => {
    if ( case2.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case2.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case2.style.backgroundImage = "url('image/R (1).png')";
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})

case3.addEventListener('click',() => {
    if ( case3.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case3.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case3.style.backgroundImage = "url('image/R (1).png')"
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})

case4.addEventListener('click',() => {
    if ( case4.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case4.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case4.style.backgroundImage = "url('image/R (1).png')";
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})

case5.addEventListener('click',() => {
    if ( case5.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case5.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case5.style.backgroundImage = "url('image/R (1).png')";
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})

case6.addEventListener('click',() => {
    if ( case6.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case6.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case6.style.backgroundImage = "url('image/R (1).png')";
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})

case7.addEventListener('click',() => {
    if ( case7.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case7.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case7.style.backgroundImage = "url('image/R (1).png')";
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})

case8.addEventListener('click',() => {
    if ( case8.style.backgroundImage !== "") {
        return
    }

    if(joueurActif == 0) {
        case8.style.backgroundImage = "url('image/X.png')";
        joueurActif = 1
   }
   else {
        case8.style.backgroundImage = "url('image/R (1).png')";
        joueurActif = 0
   }
   if (compteur < 8) {
    compteur++;
    return;
}
if (compteur == 8) {
    console.log("Match Nul")
}
   verifGagne()
})


function verifGagne() {
    // condition de victoire
    // victoire pour X
    if ((case0.style.backgroundImage === 'url("image/X.png")' && case1.style.backgroundImage === 'url("image/X.png")'
         && case2.style.backgroundImage === 'url("image/X.png")')){
            console.log("X a gagné");
            
            
         }

    if ((case3.style.backgroundImage === 'url("image/X.png")' && case4.style.backgroundImage === 'url("image/X.png")'
            && case5.style.backgroundImage === 'url("image/X.png")')){
               console.log("X a gagné");
            }
    if ((case6.style.backgroundImage === 'url("image/X.png")' && case7.style.backgroundImage === 'url("image/X.png")'
                && case8.style.backgroundImage === 'url("image/X.png")')){
                   console.log("X a gagné");
                }
    if ((case0.style.backgroundImage === 'url("image/X.png")' && case3.style.backgroundImage === 'url("image/X.png")'
                && case6.style.backgroundImage === 'url("image/X.png")')){
                       console.log("X a gagné");
                    }
    if ((case1.style.backgroundImage === 'url("image/X.png")' && case4.style.backgroundImage === 'url("image/X.png")'
                && case7.style.backgroundImage === 'url("image/X.png")')){
                           console.log("X a gagné");
                        }
    if ((case2.style.backgroundImage === 'url("image/X.png")' && case5.style.backgroundImage === 'url("image/X.png")'
                            && case8.style.backgroundImage === 'url("image/X.png")')){
                                       console.log("X a gagné");
                                    }
    if ((case2.style.backgroundImage === 'url("image/X.png")' && case4.style.backgroundImage === 'url("image/X.png")'
                && case6.style.backgroundImage === 'url("image/X.png")')){
                               console.log("X a gagné");
                            }
    if ((case0.style.backgroundImage === 'url("image/X.png")' && case4.style.backgroundImage === 'url("image/X.png")'
                && case8.style.backgroundImage === 'url("image/X.png")')){
                                   console.log("X a gagné");
                                }


// victoire pour O
if ((case0.style.backgroundImage === 'url("image/R (1).png")' && case1.style.backgroundImage === 'url("image/R (1).png")'
         && case2.style.backgroundImage === 'url("image/R (1).png")')){
            console.log("O a gagné");
         }

    if ((case3.style.backgroundImage === 'url("image/R (1).png")' && case4.style.backgroundImage === 'url("image/R (1).png")'
            && case5.style.backgroundImage === 'url("image/R (1).png")')){
               console.log("O a gagné");
            }
    if ((case6.style.backgroundImage === 'url("image/R (1).png")' && case7.style.backgroundImage === 'url("image/R (1).png")'
                && case8.style.backgroundImage === 'url("image/R (1).png")')){
                   console.log("O a gagné");
                }
    if ((case0.style.backgroundImage === 'url("image/R (1).png")' && case3.style.backgroundImage === 'url("image/R (1).png")'
                && case6.style.backgroundImage === 'url("image/R (1).png")')){
                       console.log("O a gagné");
                    }
    if ((case1.style.backgroundImage === 'url("image/R (1).png")' && case4.style.backgroundImage === 'url("image/R (1).png")'
                && case7.style.backgroundImage === 'url("image/R (1).png")')){
                           console.log("O a gagné");
                        }
    if ((case2.style.backgroundImage === 'url("image/R (1).png")' && case5.style.backgroundImage === 'url("image/R (1).png")'
                            && case8.style.backgroundImage === 'url("image/R (1).png")')){
                                       console.log("O a gagné");
                                    }
    if ((case0.style.backgroundImage === 'url("image/R (1).png")' && case4.style.backgroundImage === 'url("image/R (1).png")'
                && case8.style.backgroundImage === 'url("image/R (1).png")')){
                               console.log("O a gagné");
                            }
    if ((case2.style.backgroundImage === 'url("image/R (1).png")' && case4.style.backgroundImage === 'url("image/R (1).png")'
                && case6.style.backgroundImage === 'url("image/R (1).png")')){
                                   console.log("O a gagné");
                                } 


}
