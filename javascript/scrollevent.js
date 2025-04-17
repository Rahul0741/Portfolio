const sections = document.querySelectorAll("div[id]"); // Selects divs with an id attribute
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
let currentSection = "";

// Find the div currently in view
sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Offset for smooth transition
    if (pageYOffset >= sectionTop) {
    currentSection = section.getAttribute("id");
    }
});

// Remove active class from all links and add it to the current one
navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
    link.classList.add("active");
    }
});
});