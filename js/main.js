'use strict';

/* Récupération de l'id du formulaire
Ajout d'un evenement à la soumission du formulaire
Ajout de la fonction savePoc en paramètre */
document.getElementById('mainForm').addEventListener('submit', savePoc);

/* Fonction savePoc
Récupération des valeurs des inputs du formulaire */
  function savePoc(e) {
    var titleValue = document.getElementById('titleValue').value;
    var codeValue = document.getElementById('codeValue').value;

    // Vérification de saisie du formulaire
    var emptyInput = document.getElementById('emptyInput');
    var fullInput = document.getElementById('fullInput');

    // Empêche le rechargement de la page
    e.preventDefault();

    // Vérification de la saisie des champs inputs avec affichage d'une alerte dans le cas d'un champ laissé à vide et empêchement de la validation.
    if(!titleValue) {
      emptyInput.style.display = 'block';

    } else if(!codeValue) {
        emptyInput.style.display = 'block';

    } else {
      emptyInput.style.display = 'none';

      // Alerte succès lors de la validation du formulaire.
      if(titleValue && codeValue) {
          $('#fullInput').fadeIn('fast').fadeOut(2000);
      }

    // Création de l'objet.
    var poc = {
      title: titleValue,
      code: codeValue
    }

    // Les methodes de localStorage pour recupérer et mettre en place les clés / valeurs
  if(localStorage.getItem('key_pocs') === null) {

    var pocs = [];
    pocs.push(poc);
    localStorage.setItem('key_pocs', JSON.stringify(pocs));
  } else {
    var pocs = JSON.parse(localStorage.getItem('key_pocs'));
    pocs.push(poc);
    localStorage.setItem('key_pocs', JSON.stringify(pocs));
  }

// Appel de la fonction qui affichera le resultat dans la page html.
fetchPocs()
  }

}

  // Fonction d'affichage des resultats dans la vue.
  function fetchPocs() {
    var pocs = JSON.parse(localStorage.getItem('key_pocs'));
    var pocShow = document.getElementById('pocShow');
    pocShow.innerHTML = '';
    for(var i = 0; i < pocs.length; i++) {
      var viewPocTitle = pocs[i].title;
      var viewPocCode = pocs[i].code;
      pocShow.innerHTML += '<div class=" precode panel panel-body">' +
                           '<h4>' + viewPocTitle + '</h4>' +
                           '<pre><code>' + viewPocCode + '</code></pre>' +
                           '</div>';

      // Réinitialisation des champs du formulaire à vide
      mainForm.reset();
    }
  }
