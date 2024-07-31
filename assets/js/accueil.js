document.addEventListener("DOMContentLoaded", function () {
    // Chemin vers le fichier JSON (à adapter si nécessaire)
    const jsonPath = "./data/promo.json";

    // Sélection du corps de la table
    const tbody = document.querySelector("table tbody");

    // Récupération des données JSON
    fetch(jsonPath)
        .then((response) => response.json())
        .then((data) => {
            const apprenants = data.apprenants;
            console.log(apprenants);

            // Suppression des données statiques existantes
            tbody.innerHTML = "";

            // Création des nouvelles lignes avec les données du JSON
            apprenants.forEach((apprenant) => {
                const row = document.createElement("tr");

                // Création des cellules
                const prenomCell = document.createElement("td");
                prenomCell.textContent = apprenant.prenom;
                row.appendChild(prenomCell);

                const nomCell = document.createElement("td");
                nomCell.textContent = apprenant.nom;
                row.appendChild(nomCell);

                const villeCell = document.createElement("td");
                villeCell.textContent = apprenant.ville;
                row.appendChild(villeCell);

                const detailCell = document.createElement("td");
                const detailLink = document.createElement("a");
                detailLink.href = "#"; // Lien vers le détail de l'apprenant
                detailLink.textContent = "Détail";
                detailCell.appendChild(detailLink);
                row.appendChild(detailCell);

                // Ajout de la ligne au tableau
                tbody.appendChild(row);
            });
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération du fichier JSON:", error);
        });
});
