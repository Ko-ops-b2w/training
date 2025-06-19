



fetch("https://trouve-mot.fr/api/startwith/B/10")
    .then((resultat) => resultat.json())
    .then((mots) => {
        console.log(mots);
        mots.forEach((mots) => {
        const motChoisi = document.getElementById("mots-ul")
        const mot = document.createElement("li")
        motChoisi.appendChild(mot)
        mot.textContent = mots.name
        mot.style.listStyle = "none"
        mot.style.color = "blue"

        })
        
    })
