document.addEventListener("DOMContentLoaded", function() {
    // You can add smooth scroll or other interactive features here
    // For example, animating property cards on scroll:
    
    const propertyCards = document.querySelectorAll(".property-card");
    
    propertyCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transition = 'transform 0.3s ease-out';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
