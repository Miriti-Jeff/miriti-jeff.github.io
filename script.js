document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const typing = document.querySelector('.typing');
  const roles = [
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "API Builder",
    "Docker User",
    "Networking Learner"
  ];
  let i = 0, j = 0, isDeleting = false;

  function typeEffect() {
    const current = roles[i];
    typing.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {
      j++;
      setTimeout(typeEffect, 120);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(typeEffect, 60);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % roles.length;
      setTimeout(typeEffect, 1000);
    }
  }
  typeEffect();

  // Theme toggle
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    const current = document.body.dataset.theme;
    const newTheme = current === "dark" ? "light" : "dark";
    document.body.dataset.theme = newTheme;
    toggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
  });

  // Modal handling
  const modal = document.getElementById("projectModal");
  const btn = document.querySelector(".view-project");
  const close = document.querySelector(".close");

  if (btn && modal && close) {
    btn.onclick = () => {
      modal.style.display = "flex";
    };
    close.onclick = () => {
      modal.style.display = "none";
    };
    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  }

  // ✅ Initialize EmailJS
  (function() {
    emailjs.init({
      publicKey: "gVSlGUkkSo0I4j0yX",
    });
  })();

  // ✅ Handle Contact Form
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const serviceID = "service_ifo4nes";  
      const templateID = "template_aczh0mt"; 

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          alert("❌ Failed to send. Please try again.");
        });
    });
  }
});
