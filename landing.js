const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Kontrollera att elementen faktiskt finns innan vi lägger på lyssnaren
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Stäng menyn när man klickar på en länk (viktigt för mobilen)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });
}