document.addEventListener("DOMContentLoaded", function () {
    const accueilButton = document.querySelectorAll(".accueil-button");
    accueilButton.forEach((button) => {
        button.addEventListener("click", function () {
            window.location = "./../index.html";
        });
    });
});
