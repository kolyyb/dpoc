'use strict';

// Appel des packages
var express = require('express');
var path = require('path');
var PORT = process.env.port || 4000;

// Initialisation
var app = express();

// Chemin des fichiers statiques
app.use(express.static(path.join(__dirname, '/')));

// Renvoie le fichier correspondant à la racine
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, './index'));
});

// Serveur démarré et à l'écoute sur le port
app.listen(PORT, function() {
  console.log('server running on port ' + PORT);
})
