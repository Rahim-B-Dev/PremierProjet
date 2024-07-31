document.addEventListener("DOMContentLoaded", function () {
    fetch("./../data/promo.json")
        .then((response) => response.json())
        .then((data) => {
            const promoInfo = data.promoInfo;
            // set le nom de la promo
            document.querySelector("#nomPromo").innerText = promoInfo.nom;
            document.querySelector("#debut").innerText = promoInfo.debut;
            document.querySelector("#fin").innerText = promoInfo.fin;
            document.querySelector("#nbrApprenants").innerText = promoInfo.nbrApprenants;
            document.querySelector("#description").innerText = promoInfo.description;
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération du fichier JSON:", error);
        });
});
