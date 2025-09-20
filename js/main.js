document.addEventListener('DOMContentLoaded', () => {
// Dark mode toggle mode
const darkToggle = document.getElementById('dark_toggle');
    if (darkToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            darkToggle.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            darkToggle.textContent = '🌙';
        }
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
    } else {
        console.error("Dark Mode Toggle Buttom not found!");
    }
});



// Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close menu when clicking a link
    const links = navLinks.querySelector('a');
    links.forEach(link => {
        link.addEventListener('click', () =>{
            navLinks.classList.remove('show');
        });
    });
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});