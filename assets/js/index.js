document.addEventListener("DOMContentLoaded", function () {

    // Import du fichier global css
    const globalCss = document.querySelector("#globalCss");

    // Lecture des paramètres sauvegardés dans le localStorage
    const savedTheme = localStorage.getItem("theme");

    // Appliquer les valeurs sauvegardées au formulaire si elles existent
    if (savedTheme) {
        if (savedTheme === "sombre") {
            globalCss.href = "./../assets/css/global-dark.css";
        } else if (savedTheme === "clair") {
            globalCss.href = "./../assets/css/global.css";
        }
    }

    const accueilButton = document.querySelectorAll(".accueil-button");
    accueilButton.forEach((button) => {
        button.addEventListener("click", function () {
            window.location = "./../index.html";
        });
    });

    document.querySelector("#preferences-button").addEventListener("click", function () {
        window.location = "./../templates/preferences.html";
    });
    document.querySelector("#carte-button").addEventListener("click", function () {
        window.location = "./../templates/carte.html";
    });
    document.querySelector("#informations-button").addEventListener("click", function () {
        window.location = "./../templates/informations.html";
    });
});
