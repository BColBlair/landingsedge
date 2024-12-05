// Define global variables
const navBar = document.getElementById('navbar__list'); // Select the empty UL
const sections = document.querySelectorAll('section'); // Get all sections

// Build the navigation bar dynamically
const buildNavBar = () => {
    sections.forEach(section => {
        // Create a list item
        const navItem = document.createElement('li');
        // Add innerHTML for the nav link
        navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        // Append the nav item to the navigation bar
        navBar.appendChild(navItem);
    });
};

// Highlight the section in the viewport and the corresponding nav item
const highlightSection = (entries, observer) => {
    entries.forEach(entry => {
        const navLinks = document.querySelectorAll('.menu__link');
        if (entry.isIntersecting) {
            // Add active class to the section
            entry.target.classList.add('your-active-class');
            // Highlight the corresponding nav item
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${entry.target.id}`
                );
            });
        } else {
            // Remove active class when the section is out of view
            entry.target.classList.remove('your-active-class');
        }
    });
};

// Smooth scrolling when clicking navigation links
const enableSmoothScrolling = () => {
    navBar.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        if (event.target.nodeName === 'A') {
            const targetSection = document.querySelector(event.target.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
};

// Initialize the Intersection Observer for section highlighting
const initializeObserver = () => {
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.6 // Trigger when 60% of the section is in view
    };
    const observer = new IntersectionObserver(highlightSection, options);
    sections.forEach(section => observer.observe(section));
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    buildNavBar(); // Build the navigation bar
    enableSmoothScrolling(); // Enable smooth scrolling
    initializeObserver(); // Initialize section highlighting
});





            
