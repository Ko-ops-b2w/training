
for (let page = 1; page <= 20; page++){
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((resultat) => resultat.json())
      .then((data) => {
        const main = document.querySelector(".main-container");

        data.results.forEach(personnage => {
          // Crée une div pour chaque personnage
          const card = document.createElement("div");
          card.style.border = "1px solid #ccc";
          card.style.borderRadius = "8px";
          card.style.padding = "10px";
          card.style.textAlign = "center";
          card.style.width = "140px";
          card.style.backgroundColor = "gray";

          // Nom du personnage
          const name = document.createElement("h2");
          name.textContent = personnage.name;
          name.style.fontSize = "16px";

          // Image du personnage
          const img = document.createElement("img");
          img.src = personnage.image;
          img.alt = personnage.name;
          img.style.width = "100%";
          img.style.borderRadius = "4px";

          // Ajoute nom + image à la div
          card.appendChild(name);
          card.appendChild(img);

          // Ajoute la div à la page
          main.appendChild(card);
        });
      });
      }