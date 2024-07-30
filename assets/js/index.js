document.addEventListener("DOMContentLoaded", function () {

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
