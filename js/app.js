// Define global variables
const navBar = document.getElementById('navbar__list'); // Select the empty UL
const sections = document.querySelectorAll('section'); // Get all sections

// Build the navigation bar
sections.forEach(section => {
    // Create a list item
    const navItem = document.createElement('li');

    // Add innerHTML for the nav link
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

    // Append the nav item to the navigation bar
    navBar.appendChild(navItem);
});

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
});

// Scroll to section on link click
navBar.addEventListener('click', event => {
    event.preventDefault(); // Prevent default anchor behavior

    if (event.target.nodeName === 'A') {
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
