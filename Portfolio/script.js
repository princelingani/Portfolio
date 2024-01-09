/* ############ Toggle icon navbar ############### */
// Use const for constant variables
// Toggle the mobile menu when the menu icon is clicked
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('main-nav').classList.remove('active');
    });
});

// Close the mobile menu when a click occurs outside the menu
document.addEventListener('click', function(e) {
    if (!document.getElementById('main-nav').contains(e.target) && !document.getElementById('mobile-menu').contains(e.target)) {
        document.getElementById('main-nav').classList.remove('active');
    }
});



const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Your existing scroll event logic here

    // Toggle a 'scrolled' class on the header for a sticky effect
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('.portfolio-layer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight the clicked link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.classList.remove('active');
        });

        this.classList.add('active');

        // Remove the active class after scrolling to the target section
        setTimeout(() => {
            this.classList.remove('active');
        }, 1000); // Adjust the delay based on your preference
    });
});

/*================= Scroll-reveal ===============*/
 
// Initialize ScrollReveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Specify the elements to reveal
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// Add this in your existing JavaScript code

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        // Form is valid, you can proceed with form submission or other actions
        alert('Form submitted successfully!');
        this.reset(); // Optionally reset the form after submission
    }
});

// Modify the existing validateForm function

function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const emailSubject = document.getElementById('emailSubject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if Full Name and Surname contain only letters
    if (!isAlphaOnly(fullName)) {
        alert('Full Name should contain only letters.');
        return false;
    }

    // Basic validation example (you can add more complex validation as needed)
    if (fullName === '' || emailAddress === '' || phoneNumber === '' || emailSubject === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone number format (you can adjust the regex based on your needs)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number (10 digits).');
        return false;
    }

    // Additional custom validations can be added here

    return true; // Form is valid
}

// Add a helper function to check if a string contains only letters
function isAlphaOnly(input) {
    return /^[A-Za-z\s]+$/.test(input);
}

// Modify the existing JavaScript code

// Add this inside the window.onload or DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove the 'active' class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add the 'active' class to the clicked link
            this.classList.add('active');

            // Scroll to the section corresponding to the clicked link
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});

// Add this in your existing JavaScript code to handle scroll-based active link highlighting
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Loop through each section and add/remove the active class
    document.querySelectorAll('section').forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`header nav a[href="#${id}"]`);

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
});
