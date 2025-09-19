document.addEventListener('DOMContentLoaded', () => {
    // Header Hero Section Animation
    const heroContact = document.querySelector('.hero-contact');
    setTimeout(() => {
        heroContact.classList.add('loaded');
    }, 100); // Small delay for better visual effect

    // Scroll Animations for Contact Section
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the element is visible
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active'); // Optional: Animate hamburger icon
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Form Label Animation (adjusts on input focus/fill)
    // This is largely handled by CSS :focus + label and :not(:placeholder-shown) + label
    // but you might add JS if you need more complex interactions, e.g., on page load if inputs have pre-filled values
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        // For pre-filled inputs on page load
        if (input.value !== '') {
            input.classList.add('has-content'); // Add a class if needed for specific styling
        }
        input.addEventListener('input', () => {
            if (input.value !== '') {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
    });
});