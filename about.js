const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show"); 

});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fn = document.getElementById('firstName').value.trim();
    const em = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const msg = document.getElementById('userMessage').value.trim();
    const output = document.getElementById('formResponse');

    if (!fn || !em || !subject || !msg) {
        alert("Please fill in all required fields (*)");
        return;
    }

    alert("Your message has been sent!");

    output.innerHTML = `<strong>Thank you ${fn}!</strong><br>Your message has been received.`;
    output.style.color = "#009966";

    this.reset();
});
