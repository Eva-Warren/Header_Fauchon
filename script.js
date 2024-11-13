function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleCart() {
    const cart = document.getElementById("cart");
    if (cart.classList.contains("open")) {
        cart.classList.remove("open");
        setTimeout(() => cart.style.display = "none", 300);
    } else {
        cart.style.display = "block";
        setTimeout(() => cart.classList.add("open"), 10);
    }
}

function toggleCollapse(element) {
    const submenu = element.nextElementSibling;
    const icon = element.querySelector("i");

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        icon.classList.replace("fa-minus", "fa-plus");
    } else {
        submenu.style.display = "block";
        icon.classList.replace("fa-plus", "fa-minus");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const texts = [
        { content: "LIVRAISON COLISSIMO OFFERTE en France dès 80€ d'achat", direction: "down" },
        { content: "Expédition Jour J : commandez avant 12h !", direction: "down" },
        { content: "Evènement spécial ? Laissez nous vous guider", direction: "down" }
    ];

    let index = 0;

    function showText() {
        // Réinitialiser l'animation
        textElement.style.transform = "translateY(20px)"; // Remettre le texte en bas
        textElement.style.opacity = 0; // Rendre le texte transparent

        setTimeout(() => {
            // Mettre à jour le contenu et l'animation
            textElement.textContent = texts[index].content;
            
            // Rendre visible le texte et faire descendre
            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0px)"; // Faire descendre vers le haut

            // Passer au texte suivant
            index = (index + 1) % texts.length;
        }, 500); // Attendre que l'animation précédente se termine
    }

    setInterval(showText, 5000); // Appeler toutes les 5 secondes

    // Afficher le premier texte immédiatement
    showText();

    // Gérer l'affichage du dropdown au clic
    const languageElement = document.querySelector('.language');
    const dropdownContent = document.querySelector('.dropdown-content');

    languageElement.addEventListener('click', function() {
        // Alterner l'affichage du dropdown
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    // Fermer le dropdown si l'utilisateur clique ailleurs sur la page
    document.addEventListener('click', function(event) {
        if (!languageElement.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });

});