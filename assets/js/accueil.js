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
            const promoInfo = data.promoInfo;
            const promoNom = promoInfo.nom;
            document.querySelector("#nomPromo").innerText = promoNom;

            const apprenants = promoInfo.apprenants;

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
                cardCol.className = "col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 mb-4";

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
                detailButton.setAttribute("data-toggle", "modal");
                detailButton.setAttribute("data-target", "#detailModal");

                detailButton.setAttribute("data-avatar", apprenant.avatar);
                detailButton.setAttribute("data-nom", apprenant.nom);
                detailButton.setAttribute("data-prenom", apprenant.prenom);
                detailButton.setAttribute("data-ville", apprenant.ville);
                detailButton.setAttribute("data-anecdotes", apprenant.anecdotes);

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

    // A l'ouverture de la modale
    $("#detailModal").on("show.bs.modal", function (event) {
        // Récuperation des données passés par le bouton
        const button = event.relatedTarget;
        const nom = button.getAttribute("data-nom");
        const prenom = button.getAttribute("data-prenom");
        const ville = button.getAttribute("data-ville");
        const avatar = button.getAttribute("data-avatar");
        const anecdotes = button.getAttribute("data-anecdotes");

        // Ajout des valeurs dans la modale
        document.querySelector("#nom").innerText = nom;
        document.querySelector("#prenom").innerText = prenom;
        document.querySelector("#ville").innerText = ville;
        document.querySelector("#anecdotes").innerText = anecdotes;
        document.querySelector("#avatar").setAttribute("src", `./assets/img/${avatar}`);
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
