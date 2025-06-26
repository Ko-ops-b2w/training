const formulaire = document.getElementById("monFormulaire");

// Événement lors de la soumission
formulaire.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;

  fetch('https://685a94389f6ef9611156f87b.mockapi.io/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prenom: prenom,
      nom: nom
    })
  })
  .then((response) => response.json())
  .then((data) => {
    alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
    
    // ✅ Vider le formulaire après succès
    formulaire.reset();
  })
  .catch((error) => {
    alert("Erreur lors de la création de l'utilisateur : " + error);
  });
});
