document.addEventListener("DOMContentLoaded", function () {
    // Initialiser la carte avec un centre sur la France et un niveau de zoom pour afficher tout le pays
    const map = L.map("map").setView([46.603354, 1.888334], 6);

    // Ajouter une couche de tuiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Charger les points depuis le fichier JSON
    fetch("./../data/promo.json") // Change le chemin selon l'emplacement de ton fichier JSON
        .then((response) => response.json())
        .then((data) => {
            const promoInfo = data.promoInfo;
            const promoNom = promoInfo.nom;

            document.querySelector("#nomPromo").innerText = promoNom;

            promoInfo.apprenants.forEach((apprenant) => {
                const { latitude, longitude } = apprenant.coordonnees;
                const lat = parseFloat(latitude);
                const lng = parseFloat(longitude);

                // Créer une icône avec FontAwesome
                const fontAwesomeIcon = L.divIcon({
                    className: "fa-icon",
                    html: `<i class="fas fa-map-marker-alt"></i>`,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32],
                });

                L.marker([lat, lng], { icon: fontAwesomeIcon })
                    .addTo(map)
                    .bindPopup(`<b>${apprenant.prenom} ${apprenant.nom}</b><br>${apprenant.ville}`);
            });
        })
        .catch((error) => console.error("Erreur lors du chargement des points:", error));
});
