        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const nav = document.getElementById('nav');
        
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            if (nav.classList.contains('active')) {
                menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Scroll Animations
        document.addEventListener('DOMContentLoaded', function() {
            const aboutText = document.querySelector('.about-text');
            const aboutImage = document.querySelector('.about-image');
            const propertyCards = document.querySelectorAll('.property-card');
            
            // Reset initial state for elements to be animated
            aboutText.style.opacity = '0';
            aboutImage.style.opacity = '0';
            propertyCards.forEach(card => {
                card.style.opacity = '0';
            });
            
            // Create Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('about-text')) {
                            entry.target.style.animation = 'slideFromLeft 1s ease-in-out forwards';
                        } else if (entry.target.classList.contains('about-image')) {
                            entry.target.style.animation = 'slideFromRight 1s ease-in-out forwards';
                        } else if (entry.target.classList.contains('property-card')) {
                            // Stagger the animation for property cards
                            const index = Array.from(propertyCards).indexOf(entry.target);
                            entry.target.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`;
                        }
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe elements
            observer.observe(aboutText);
            observer.observe(aboutImage);
            propertyCards.forEach(card => {
                observer.observe(card);
            });
        });