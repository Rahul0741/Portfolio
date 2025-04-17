document.addEventListener("DOMContentLoaded", function () {
  // Initialize Bootstrap tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl); // Create a new tooltip for each element
  });

  // Sidebar toggle functionality
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
          sidebar.classList.toggle('active'); // Toggle the 'active' class on the sidebar
      });
  }
});
