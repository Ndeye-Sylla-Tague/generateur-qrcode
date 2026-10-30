// 1. Importation du module express
const express = require('express');

// 2. Importation du module qrcode
const qrcode = require('qrcode');

// 3. Declaration de l'application
const app = express();

// 4. Middleware pour recuperer les donnees du formulaire
app.use(express.urlencoded({ extended: true }));

// 5. Route GET pour afficher le formulaire
app.get('/', (req, res) => {

    res.send(`
        <h1>Generateur de QR Code</h1>

        <form action="/qrcode" method="POST">

            <input
                type="text"
                name="url"
                placeholder="Entrez l'URL de votre site"
                required
            >

            <br><br>

            <button type="submit">Generer QR Code</button>

        </form>
    `);

});

// 6. Route POST pour generer le QR Code
app.post('/qrcode', async (req, res) => {

    // Recuperation de l'URL saisie
    let url = req.body.url;

    try {

        // Verification de l'URL
        const adresse = new URL(url);

        if (adresse.protocol !== 'http:' &&
            adresse.protocol !== 'https:') {
            throw new Error('URL invalide');
        }

        // Generation du QR Code
        let qrimage = await qrcode.toDataURL(url);

        // Affichage du resultat
        res.send(`
    <h1>Generateur de QR Code</h1>

    <form action="/qrcode" method="POST">

        <input
            type="text"
            name="url"
            value="${url}"
            placeholder="Entrez l'URL de votre site"
            required
        >

        <br><br>

        <button type="submit">Generer QR Code</button>

    </form>

    <br>

    <img src="${qrimage}" alt="QR Code">
`)

    } catch (erreur) {

        res.send(`
            <h1>Erreur</h1>
            <p>Veuillez saisir une URL valide.</p>
            <a href="/">Retour</a>
        `);

    }

});

// 7. Demarrage du serveur
app.listen(3000, () => {
    console.log("Serveur demarre sur le port 3000");
});