document.addEventListener('DOMContentLoaded', () => {
    // Select the empty UL
    const navBar = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');
    const navLinks = [];

    // Build the navigation bar dynamically
    const buildNavBar = () => {
        sections.forEach(section => {
            // Create a list item
            const navItem = document.createElement('li');

            // Add innerHTML for the nav link
            navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

            // Append the nav item to the navigation bar
            navBar.appendChild(navItem);
            navLinks.push(navItem.querySelector('a')); // Store the nav links for later
        });
    };

    // Highlight the section in the viewport
    const highlightSection = () => {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 300) {
                // Remove active class from all sections
                sections.forEach(s => s.classList.remove('your-active-class'));
                // Add active class to the current section
                section.classList.add('your-active-class');

                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active class to the relevant navbar item
                navLinks[index].classList.add('active');
            }
        });
    };

    // Smooth scrolling when clicking navigation links
    navBar.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        if
