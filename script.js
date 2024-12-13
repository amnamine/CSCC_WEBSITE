// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic year update in the footer
    const footer = document.querySelector('footer');
    if (footer) {
        const yearSpan = document.createElement('span');
        yearSpan.textContent = new Date().getFullYear();
        footer.innerHTML += ` COPYRIGHT  ${yearSpan.textContent}    &copy; `;
    }
});
