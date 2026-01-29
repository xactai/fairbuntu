document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-bg');
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Subtle parallax effect for the background
    const moveX = (clientX - innerWidth / 2) / 50;
    const moveY = (clientY - innerHeight / 2) / 50;

    hero.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
});

// Smooth reveal animation for the glass card contents
const glassCard = document.querySelector('.glass-card');
glassCard.style.opacity = '0';
glassCard.style.transform = 'translateY(20px)';

window.addEventListener('load', () => {
    setTimeout(() => {
        glassCard.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        glassCard.style.opacity = '1';
        glassCard.style.transform = 'translateY(0)';
    }, 100);
});
