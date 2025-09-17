document.addEventListener('DOMContentLoaded', () => {
// Dark mode toggle functionality
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


// Hamburger menu functionality
console.log("DOM Content Loaded. Script is running");

const hamburgerMenu = document.querySelector('hamburger-menu');
const navLinks = document.querySelector('nav-links');

console.log("Hamburger Menu elements;", hamburgerMenu);
console.log("Nav Links elements", navLinks);

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            console.log("Hamburger Menu clicked!");
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }