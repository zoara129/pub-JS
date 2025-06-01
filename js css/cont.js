// cont.js
document.addEventListener('DOMContentLoaded', () => {
  const couches = document.querySelectorAll('.couche');
  let index = 0;

  function afficherProchaineCouche() {
    couches.forEach((c, i) => {
      c.classList.remove('active');
      if (i === index) c.classList.add('active');
    });
    index = (index + 1) % couches.length;
  }

  afficherProchaineCouche(); 
  setInterval(afficherProchaineCouche, 4000); 
});

