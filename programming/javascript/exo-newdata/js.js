// const inputPrenom = document.querySelector('.inputPrenom')
// const inputNom = document.querySelector('.inputNom')
let form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let data = new FormData(form)
    
    const nom = data.get('nom');
    const prenom = data.get('prenom');
    // Envoi des données à l'API
    fetch('https://685a94389f6ef9611156f87b.mockapi.io/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom: nom,
            prenom: prenom
           
        })
    })
    .then((response) => response.json())
    .then((data) => {
        alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
        
        // ✅ Vider le formulaire après succès
        form.reset();
    })
    
   console.log('Nom:', nom);
    console.log('Prénom:', prenom);
   

 
    
})