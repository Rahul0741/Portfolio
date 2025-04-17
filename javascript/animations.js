document.addEventListener("DOMContentLoaded", function () {
  // Ensure the page loads at the top
  window.scrollTo(0, 0);

  // Variable to track if the About section has been triggered by scroll
  let aboutTriggered = false;

  // Function to handle the scroll effect for the About sections
  function revealOnScroll() {
      if (aboutTriggered) return; // Exit if About has already been triggered

      const aboutSection = document.getElementById("About");
      if (!aboutSection) return; // Exit if About section does not exist

      const progressBars = document.querySelectorAll(".progress-bar");

      // Check if the About section is in view
      if (aboutSection.getBoundingClientRect().top < window.innerHeight - 100) {
          aboutSection.classList.add("fade-in"); // Add fade-in effect

          // Animate progress bars when About section is in view
          progressBars.forEach(bar => {
              const value = bar.getAttribute("aria-valuenow");
              bar.style.width = value + "%";
          });

          aboutTriggered = true; // Set flag to prevent repeat animations
      }
  }

  // Delay attaching the scroll listener to avoid immediate execution on load
  setTimeout(() => {
      window.addEventListener("scroll", revealOnScroll);
  }, 500);

  // Sidebar button event (example for About section button)
  const aboutButton = document.querySelector('.sidebar-toggle-about');
  if (aboutButton) {
      aboutButton.addEventListener('click', () => {
          aboutTriggered = false; // Reset flag for sidebar click
          revealOnScroll(); // Call function immediately on button click
      });
  }
});


