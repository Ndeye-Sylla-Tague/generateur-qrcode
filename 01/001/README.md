# Generateur de QR Code

## 1. Presentation du projet

Ce projet consiste a creer une application web permettant
de generer un QR Code a partir d'une URL saisie par
l'utilisateur.

## 2. Technologies utilisees

- Node.js
- Express.js
- Module QRCode
- HTML

## 3. Installation

Initialisation du projet :

npm init -y

Installation des dependances :

npm install express qrcode

## 4. Etapes de realisation

### Etape 1 : Importation des modules

Nous avons importe les modules Express et QRCode
avec require().

### Etape 2 : Creation de l'application

Nous avons utilise express() pour creer notre application.

### Etape 3 : Configuration du middleware

Nous avons utilise express.urlencoded() pour recuperer
les donnees envoyees par le formulaire.

### Etape 4 : Creation de la route GET

Nous avons utilise app.get() pour afficher le formulaire
de saisie de l'URL.

### Etape 5 : Creation de la route POST

Nous avons utilise app.post() pour recevoir l'URL saisie
par l'utilisateur.

### Etape 6 : Generation du QR Code

Nous avons utilise qrcode.toDataURL() pour transformer
l'URL en image QR Code.

### Etape 7 : Affichage du resultat

Nous avons utilise res.send() pour afficher le formulaire
et le QR Code dans le navigateur.

### Etape 8 : Demarrage du serveur

Nous avons utilise app.listen() pour demarrer le serveur
sur le port 3000.

## 5. Conclusion

Ce projet nous a permis de pratiquer Node.js et Express.js,
les routes GET et POST, les middlewares, les requetes,
les reponses et la programmation asynchrone.