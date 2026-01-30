const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show"); 

});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fn = document.getElementById('firstName').value.trim();
    const em = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const msg = document.getElementById('userMessage').value.trim();

    const form = document.getElementById('contactForm');
    const output = document.getElementById('formResponse');

    if (!fn || !em || !subject || !msg) {
        alert("Please fill in all required fields (*)");
        return;
    }

    form.style.display = "none";

    output.innerHTML = `
        <strong>Tack ${fn}!</strong><br>
        Ditt meddelande har skickats.
    `;
    output.style.color = "#009966";
    output.style.fontSize = "24px";
    output.style.textAlign = "center";
});
