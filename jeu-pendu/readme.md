# Plan du projet 

# JEU DU PENDU
C'est un jeu qui consite à deviner des mots cachés 
(le choix des lettres pour trouver ce mot est limité)

# Objectif du Projet


# Découpage du Projet
Conception
(nombre de tentives, affichage des lettres)
•	Choisir un mot au hasard
•	Afficher les lettres devinées
•	Afficher les erreurs
•	Rejouer
•	Le score


HTML(le squellette)
Les bases de la page:
o	Un titre du jeu
o	Un conteneur pour le mot à deviner (ex: _ _ _ _)
o	Une zone pour les lettres cliquables (ou clavier virtuel)
o	Une zone pour afficher les erreurs restantes
o	Un bouton pour relancer la partie

CSS(le visuel)
Mettre en forme les éléments html
o	Centrer le jeu dans la page
o	Donner un style au mot à deviner (espaces, soulignement)
o	Styliser les lettres (avant et après clic)
o	Styliser les erreurs et l'état du jeu (gagné/perdu)

# Fonctions Principales

1-imageBack
Pour changer les images du background à chaque nouvelle partie du jeu
2-initGame
pour initier le jeu (débuter le jeu)
3-displayMot
Le choix des lettres d'une manière ordonner
4-choixAlphabet
mettre en place le clavier virtuel
5-handleGuess
Vérifier si le choix des lettres forment le mot caché
6-verifGagnant
Vérifier si le joueur a gagné
7-verifPerdu
Vérifier si le joueur a perdu
8-finDuJeu
Mettre fin à la partie si le joueur a gagné ou az perdu