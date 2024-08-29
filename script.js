// Initialize AOS for animations on scroll
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1200, // Duration of animations
        once: true,     // Animation happens only once when scrolling down
    });
});

// Toggle navigation menu for mobile view
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('show');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});