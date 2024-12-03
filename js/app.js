// Define global variables
const navBar = document.getElementById('navbar__list'); // Select the empty UL
const sections = document.querySelectorAll('section'); // Get all sections
document.addEventListener('DOMContentLoaded', () => {
    // Select the empty UL
    const navBar = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');

// Build the navigation bar
sections.forEach(section => {
    // Create a list item
    const navItem = document.createElement('li');
    // Build the navigation bar dynamically
    const buildNavBar = () => {
        sections.forEach(section => {
            // Create a list item
            const navItem = document.createElement('li');

    // Add innerHTML for the nav link
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
            // Add innerHTML for the nav link
            navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

    // Append the nav item to the navigation bar
    navBar.appendChild(navItem);
});
            // Append the nav item to the navigation bar
            navBar.appendChild(navItem);
        });
    };
    // Highlight the section in the viewport
    const highlightSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 300) {
                // Remove active class from all sections
                sections.forEach(s => s.classList.remove('your-active-class'));

// Add class 'active' to the section near the top of the viewport
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
            // Remove active class from all sections
            sections.forEach(s => s.classList.remove('your-active-class'));
                // Add active class to the current section
                section.classList.add('your-active-class');
            }
        });
    };

            // Add active class to the current section
            section.classList.add('your-active-class');
    // Smooth scrolling when clicking navigation links
    navBar.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        if (event.target.nodeName === 'A') {
            const targetSection = document.querySelector(event.target.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to section on link click
navBar.addEventListener('click', event => {
    event.preventDefault(); // Prevent default anchor behavior
    if (event.target.nodeName === 'A') {
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Build the navigation and attach scroll listener
    buildNavBar();
    window.addEventListener('scroll', highlightSection);
});







            
