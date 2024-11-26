// Define global variables 
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build the nav
sections.forEach(section => {
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navBar.appendChild(navItem);
});
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
            sections.forEach(s => s.classList.remove('your-active-class'));
            section.classList.add('your-active-class');
        }
    });
});
// Scroll to section on link click
navBar.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
