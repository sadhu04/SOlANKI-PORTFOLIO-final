// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6mkyo2l', '_ejs-test-mail-service_', contactForm)
    .then(() => {
        successMsg.style.display = 'block'; // Show success message
        contactForm.reset();
    }, (error) => {
        alert('Failed to send message: ' + JSON.stringify(error));
    });
});