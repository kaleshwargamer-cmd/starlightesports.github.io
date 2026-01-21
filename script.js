// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Get current path (e.g., "/about.html")
    const currentPath = window.location.pathname.split("/").pop();
    
    // Select all nav links
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
        // If link href matches current path, add active class
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        // Handle root/index case
        if(currentPath === "" && link.getAttribute('href') === "index.html") {
            link.classList.add('active');
        }
    });
});