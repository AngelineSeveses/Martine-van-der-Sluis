// Mobile menu functionality
// Header scroll background change
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const heroHeight = document.querySelector(".compute-hero").offsetHeight;
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition > heroHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavMenu = document.getElementById("mobileNavMenu");

if (mobileMenuBtn && mobileNavMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    mobileNavMenu.classList.toggle("active");

    // Change icon
    const icon = mobileMenuBtn.querySelector("i");
    if (mobileNavMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking on links
  const mobileNavLinks = mobileNavMenu.querySelectorAll(".nav-link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNavMenu.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mobileMenuBtn.contains(event.target) &&
      !mobileNavMenu.contains(event.target)
    ) {
      mobileNavMenu.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}
// Simple smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Header background change on scroll
// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   if (header) {
//     if (window.scrollY > 20) {
//       header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
//     } else {
//       header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
//     }
//   }
// });

// Form submission
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Bedankt voor uw bericht! Ik neem zo spoedig mogelijk contact met u op."
    );
    this.reset();
  });
}

// Animate skill bars on scroll
function animateSkills() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

// Run animation when skills section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

// Contact form submission
const contactForm = document.querySelector("#contact form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Bedankt voor uw bericht! Ik neem zo spoedig mogelijk contact met u op."
    );
    this.reset();
  });
}
// === Fade-in per section ===
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
      if (sec.classList.contains("section-fade-up")) {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < triggerBottom) {
          sec.classList.add("visible");
        }
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load
});

// Mobile menu functionality
// Header scroll background change
// window.addEventListener("scroll", function () {
//   const header = document.getElementById("header");
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;

//   if (scrollPosition > windowHeight) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });
