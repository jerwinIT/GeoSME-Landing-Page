document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const header = document.querySelector("header");
  const logo = document.getElementById("logo");

  // Define light and dark mode logos
  const lightLogo = "./Images/GeoMSME - Horizontal Logo.png"; // Light mode logo
  const darkLogo = "./Images/Dark-Mode-GeoMSME - Horizontal Logo.png"; // Dark mode logo

  // Check for saved theme and apply it
  if (localStorage.getItem("theme") === "dark-mode") {
    htmlElement.classList.add("dark-mode");
    logo.src = darkLogo; // Set dark mode logo
  } else {
    logo.src = lightLogo; // Ensure light mode logo on load
  }

  // Initialize map
  initMap();

  // Header scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Theme toggle functionality
  themeToggle.addEventListener("click", function () {
    htmlElement.classList.toggle("dark-mode");

    // Switch logo based on theme
    if (htmlElement.classList.contains("dark-mode")) {
      logo.src = darkLogo;
      localStorage.setItem("theme", "dark-mode");
    } else {
      logo.src = lightLogo;
      localStorage.setItem("theme", "light");
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Mobile menu
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
    });
  }
});

// Initialize map
function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Create map
  const map = L.map("map").setView([13.855, 121.057], 11);

  // Add tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
}

document.addEventListener("DOMContentLoaded", function () {
  const features = document.querySelectorAll(".feature-item");

  const revealOnScroll = () => {
    features.forEach((feature) => {
      const rect = feature.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        feature.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
