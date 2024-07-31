document.addEventListener("DOMContentLoaded", function () {
    // Lecture des paramètres sauvegardés dans le localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedDisplay = localStorage.getItem("display");

    // Appliquer les valeurs sauvegardées du theme au formulaire si elles existent
    if (savedTheme) {
        document.querySelector("#theme-select").value = savedTheme;
    }

    // Appliquer les valeurs sauvegardées de l'affichage au formulaire si elles existent
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


        //////// mise a jour du fichier css du theme ////////


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

        // // Lecture des paramètres sauvegardés dans le localStorage
        // const savedTheme = localStorage.getItem("theme");

        // // Appliquer les valeurs sauvegardées au formulaire si elles existent
        // if (savedTheme) {
        //     if (savedTheme === "sombre") {
        //         document.querySelector("body").classList.add("dark-theme");
        //     } else if (savedTheme === "clair") {
        //         document.querySelector("body").classList.remove("dark-theme");
        //     }
        // }
    });
});
