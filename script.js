document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const texts = [
        { content: "LIVRAISON COLISSIMO OFFERTE en France dès 80€ d'achat", direction: "down" },
        { content: "Expédition Jour J : commandez avant 12h !", direction: "down" },
        { content: "Evènement spécial ? Laissez nous vous guider", direction: "down" }
    ];

    let index = 0;

    function showText() {
        textElement.style.transform = "translateY(20px)";
        textElement.style.opacity = 0;

        setTimeout(() => {
            textElement.textContent = texts[index].content;
            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0px)";
            index = (index + 1) % texts.length;
        }, 500);
    }

    setInterval(showText, 5000);
    showText();
    document.getElementById("toggle-menu").addEventListener("click", toggleMenu);
    document.getElementById("open-cart-button").addEventListener("click", toggleCart);
    document.getElementById("close-menu").addEventListener("click", toggleMenu);
    document.getElementById("close-cart").addEventListener("click", toggleCart);

    document.querySelectorAll(".collapsible").forEach((item) => {
        item.addEventListener("click", function() {
            toggleCollapse(item);
        });
    });

    const languageElement = document.querySelector('.language');
    const dropdownContent = document.querySelector('.dropdown-content');

    languageElement.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    document.addEventListener('click', function(event) {
        if (!languageElement.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});

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
