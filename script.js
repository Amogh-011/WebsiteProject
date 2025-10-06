// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting SportX Wear! We'll get back to you soon.");
  this.reset();
});

// ===== Image Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000); // Change image every 4 seconds
