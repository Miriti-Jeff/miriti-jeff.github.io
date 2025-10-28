/* ================= Typing Effect ================= */
const typedWords = [
"RESTful APIs",
"Dockerized Systems",
"Node.js Apps",
"Express Backends",
"Cybersecurity Tools"
];

let i = 0, j = 0, isDeleting = false;
const typedBlue = document.querySelector(".typed-blue");

function typeEffect() {
if (!typedBlue) return;
const currentWord = typedWords[i];
typedBlue.textContent = currentWord.substring(0, j);

if (!isDeleting && j < currentWord.length) {
j++;
setTimeout(typeEffect, 150);
} else if (isDeleting && j > 0) {
j--;
setTimeout(typeEffect, 100);
} else {
if (!isDeleting && j === currentWord.length) {
isDeleting = true;
setTimeout(typeEffect, 1200);
} else {
isDeleting = false;
i = (i + 1) % typedWords.length;
setTimeout(typeEffect, 200);
}
}
}
typeEffect();

/* ================= Shooting Stars ================= */
const canvas = document.getElementById("stars");
if (canvas) {
const ctx = canvas.getContext("2d");
const stars = [];
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStar() {
const speed = Math.random() * 5 + 2;
stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
size: Math.random() * 2,
speedX: -speed,
speedY: speed / 2
});
}
function drawStars() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
stars.forEach((s, i) => {
ctx.beginPath();
ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
ctx.fillStyle = "#58a6ff";
ctx.fill();
s.x += s.speedX;
s.y += s.speedY;
if (s.x < 0 || s.y > canvas.height) {
stars.splice(i, 1);
createStar();
}
});
requestAnimationFrame(drawStars);
}
for (let i = 0; i < 100; i++) createStar();
drawStars();
}

/* ================= Accomplishments Animation ================= */
document.addEventListener("DOMContentLoaded", () => {
const items = document.querySelectorAll(".accomplishment-item");
if (!items.length) return;

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) entry.target.classList.add("show");
});
},
{ threshold: 0.3 }
);

items.forEach((item) => observer.observe(item));
});

/* ================= EmailJS Modal ================= */
document.addEventListener("DOMContentLoaded", () => {
if (typeof emailjs !== "undefined") {
emailjs.init({ publicKey: "gVSlGUkkSo0I4j0yX" });
}

const openEmailModal = document.getElementById("openEmailModal");
const emailModal = document.getElementById("emailModal");
const closeModal = document.getElementById("closeModal");

if (openEmailModal && emailModal && closeModal) {
openEmailModal.addEventListener("click", () => emailModal.classList.add("active"));
closeModal.addEventListener("click", () => emailModal.classList.remove("active"));
emailModal.addEventListener("click", (e) => {
if (e.target === emailModal) emailModal.classList.remove("active");
});
}

const emailForm = document.getElementById("emailForm");
const statusMessage = document.getElementById("statusMessage");
if (emailForm && typeof emailjs !== "undefined") {
emailForm.addEventListener("submit", function (e) {
e.preventDefault();
emailjs
.sendForm("service_lejhvwi", "template_aczh0mt", this)
.then(() => {
statusMessage.textContent = "✅ Message sent successfully!";
statusMessage.style.color = "lightgreen";
emailForm.reset();
setTimeout(() => emailModal.classList.remove("active"), 1500);
})
.catch(() => {
statusMessage.textContent = "❌ Failed to send. Try again later.";
statusMessage.style.color = "red";
});
});
}
});

/* ================= Year Update ================= */
document.getElementById("year").textContent = new Date().getFullYear();
