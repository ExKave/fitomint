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

async function loadProducts() {
    try {
        const response = await fetch("./products.json");
        const products = await response.json();
        const productContainer = document.getElementById('product-container');
        
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                 <p class="price">${product.price}</p>
                <a href="${product.affiliateLink}" target="_blank">Buy Now</a>
            `;

            productContainer.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);