// Archivo JavaScript para interactividad

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Funcionalidad de botones de usuario
    const loginButton = document.querySelector(".user-options button:nth-child(1)");
    const registerButton = document.querySelector(".user-options button:nth-child(2)");

    loginButton.addEventListener("click", () => {
        alert("Iniciar sesión aún no está implementado.");
    });

    registerButton.addEventListener("click", () => {
        alert("Registro aún no está implementado.");
    });

    // Efecto al hacer clic en las tarjetas
    const cards = document.querySelectorAll(".brand, .novelty");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`Has seleccionado: ${card.textContent.trim()}`);
        });
    });
});
