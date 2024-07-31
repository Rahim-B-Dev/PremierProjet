document.addEventListener("DOMContentLoaded", function () {


    // Lecture des paramètres sauvegardés dans le localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedDisplay = localStorage.getItem("display");

    // Chemin vers le fichier JSON (à adapter si nécessaire)
    const jsonPath = "./data/promo.json";

    // Sélection du corps de la table
    const tbody = document.querySelector("table tbody");

    // Sélection du conteneur des cards
    const cardsContainer = document.querySelector("#apprenants-cards");

    // Sélection de la table
    const tableContainer = document.querySelector("table");

    // Sélection du radio bouton liste 
    const radioListe = document.querySelector("#radio-liste");

    // Sélection du radio bouton cartes
    const radioCartes = document.querySelector("#radio-cartes");


    // // Appliquer les valeurs sauvegardées au formulaire si elles existent
    // if (savedTheme) {
    // }

    // Appliquer l'affichage sauvegardé
    if (savedDisplay === "liste") {
        radioListe.checked = true;
    } else if (savedDisplay === "cartes") {
        radioCartes.checked = true;
    }

    // Appel de la fonction lors du chargement de la page pour définir l'affichage initial
    updateDisplay();

    // Ajout d'un event listener pour mettre à jour l'affichage lorsque l'utilisateur change l'option
    radioListe.addEventListener("change", updateDisplay);
    radioCartes.addEventListener("change", updateDisplay);

    // Récupération des données JSON
    fetch(jsonPath)
        .then((response) => response.json())
        .then((data) => {
            const apprenants = data.apprenants;

            // Création des nouvelles lignes avec les données du JSON
            apprenants.forEach((apprenant) => {
                /* Pour la table */
                const row = document.createElement("tr");

                // Création des cellules

                const nomCell = document.createElement("td");
                nomCell.textContent = apprenant.nom;
                row.appendChild(nomCell);

                const prenomCell = document.createElement("td");
                prenomCell.textContent = apprenant.prenom;
                row.appendChild(prenomCell);

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

                /* Pour les cards */
                const cardCol = document.createElement("div");
                cardCol.className = "col-2 mb-4";

                const card = document.createElement("div");
                card.className = "card";

                const cardBody = document.createElement("div");
                cardBody.className = "card-body text-center";

                const nomText = document.createElement("p");
                nomText.className = "card-text";
                nomText.textContent = apprenant.nom;

                const prenomText = document.createElement("p");
                prenomText.className = "card-text";
                prenomText.textContent = apprenant.prenom;

                const villeText = document.createElement("p");
                villeText.className = "card-text";
                villeText.textContent = apprenant.ville;

                const detailButton = document.createElement("button");
                detailButton.className = "btn btn-primary";
                detailButton.textContent = "Détail";

                // Ajout des éléments dans le card-body
                cardBody.appendChild(nomText);
                cardBody.appendChild(prenomText);
                cardBody.appendChild(villeText);
                cardBody.appendChild(detailButton);

                // Ajout du card-body dans la card, et la card dans la colonne
                card.appendChild(cardBody);
                cardCol.appendChild(card);

                // Ajout de la colonne dans le container des cartes
                cardsContainer.appendChild(cardCol);
            });
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération du fichier JSON:", error);
        });

    // Fonction pour afficher la table ou les cartes en fonction du bouton radio
    function updateDisplay() {

        // vérifie si radioliste est séléctionné
        if (radioListe.checked) {
            
            // affiche la table
            tableContainer.classList.remove("d-none");

            // cache les cards
            cardsContainer.classList.add("d-none");

        // sinon vérifie si radio carte est séléctionné
        } else if (radioCartes.checked) {

            // cache la table
            tableContainer.classList.add("d-none");

            // affichee les cards
            cardsContainer.classList.remove("d-none");
        }
    }
});
