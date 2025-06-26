function telechargerCV() {
  alert("Fonction de téléchargement à intégrer (PDF ou impression HTML).");
  // Optionnel : utiliser window.print() ou générer un PDF avec jsPDF
}

  const btn = document.getElementById('toggleBtn');
  const cv = document.querySelector('.cv-container');

  btn.addEventListener('click', () => {
    cv.classList.toggle('hidden');
  });