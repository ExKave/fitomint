document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        });
    }
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); 
    console.log("clicked");
    // Toggle the active class
});