const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const form = document.getElementById("bookingForm");
const roomsResults = document.getElementById("roomsResults");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const checkin = form.querySelector('[name="checkin"]').value;
  const checkout = form.querySelector('[name="checkout"]').value;
  const guests = form.querySelector('[name="guests"]').value;
  const roomtype = form.querySelector('[name="roomtype"]').value;

  if (checkin && checkout && guests && roomtype) {
    roomsResults.style.display = "block";
    roomsResults.scrollIntoView({ behavior: "smooth" });
  } else {
    roomsResults.style.display = "none";
    alert("Please fill in all fields before searching.");
  }
});
