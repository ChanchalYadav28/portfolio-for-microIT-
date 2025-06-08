// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form AJAX submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("form-status");
  const formData = new FormData(form);

  fetch("contact.php", {
    method: "POST",
    body: formData,
  })
    .then(response => response.text())
    .then(text => {
      status.textContent = text;
      if(text.toLowerCase().includes("thank")) {
        form.reset();
      }
    })
    .catch(() => {
      status.textContent = "There was a problem submitting your message.";
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init();
