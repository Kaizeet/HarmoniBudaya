document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.getElementsByTagName('a');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            const target = this.getAttribute('href');
            window.scrollTo({
                top: document.querySelector(target).offsetTop,
                behavior: 'smooth'
            });
        });
    }
});