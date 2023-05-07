if (typeof(PhusionPassenger) !== 'undefined') {
    PhusionPassenger.configure({ autoInstall: false });
}

const express = require('express');
const bodyParser = require('body-parser');
 
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Définition du chemin de base pour l'application React
const basePath = '/frontend';

// Configuration des routes de votre application Express
app.use(basePath, express.static(path.join(__dirname, 'build')));

// app.get(basePath + '/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

 
// Servir les fichiers statiques de l'application React depuis le dossier build
//app.use(express.static(path.join(__dirname, 'build')));

/*app.use((req, res, next) => {
    // Renvoyer une erreur 404 pour les requêtes qui ne correspondent pas aux fichiers statiques
    res.status(404).sendFile(path.join(__dirname, 'build', '404.html'));
});*/

// Gérer toutes les requêtes qui ne correspondent pas aux fichiers statiques
app.get(basePath + '/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(basePath + '/iir', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(basePath + '/prediction', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(basePath + '/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(basePath + '/a_propos', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(basePath + '/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Configuration de la route par défaut pour renvoyer une réponse 404
app.use('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Lancer le serveur sur le port spécifié
if (typeof(PhusionPassenger) !== 'undefined') {
    app.listen('passenger', () => {
        console.log(`Serveur lancé sur passenger`);
      });
} else {
    app.listen(port, () => {
        console.log(`Serveur lancé sur le port ${port}`);
      });
}