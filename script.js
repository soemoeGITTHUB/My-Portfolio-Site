// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// Typing Effect
const typingElement = document.getElementById("typing");
const textArray = [
  "Frontend Developer",
  "UI Designer",
  "Tech Enthusiast",
  "Problem Solver",
  "Programmer"
];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (index >= textArray.length) index = 0;
  currentText = textArray[index];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
// ---------------- Skill Bars Animation ----------------
const skillBars = document.querySelectorAll(".skill-bar");

function animateSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.querySelector("span").style.width = bar.getAttribute("data-progress");
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// ---------------- Scroll Animation for Projects ----------------
const scrollElements = document.querySelectorAll(".scroll-animate");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  scrollElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease-out";
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);


// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});




// Scroll animation (reuse existing scroll-animate)
const projectElements = document.querySelectorAll(".scroll-animate");

function scrollAnimateProjects() {
  const triggerBottom = window.innerHeight * 0.85;
  projectElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease-out";
    }
  });
}
window.addEventListener("scroll", scrollAnimateProjects);
window.addEventListener("load", scrollAnimateProjects);

// Filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".projects-grid .project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    projectCards.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// Smooth scroll for all anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if(target){
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

