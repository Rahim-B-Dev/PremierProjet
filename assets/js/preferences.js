document.addEventListener("DOMContentLoaded", function () {
    // Lecture des paramètres sauvegardés dans le localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedDisplay = localStorage.getItem("display");

    // Appliquer les valeurs sauvegardées au formulaire si elles existent
    if (savedTheme) {
        document.querySelector("#theme-select").value = savedTheme;
    }

    if (savedDisplay) {
        document.querySelector(
            `input[name="radio-display"][value="${savedDisplay}"]`
        ).checked = true;
    }

    // Stockage des paramètres dans le local storage à l'enregistrement du formulaire
    document.querySelector("#save-button").addEventListener("click", function () {
        // Récupérer la valeur sélectionnée dans le select
        const selectedTheme = document.querySelector("#theme-select").value;

        // Récupérer la valeur du bouton radio sélectionné
        const selectedDisplayOption = document.querySelector(
            'input[name="radio-display"]:checked'
        ).value;

        // Stocker les valeurs en localStorage
        localStorage.setItem("theme", selectedTheme);
        localStorage.setItem("display", selectedDisplayOption);
    });
});
