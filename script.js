// Scroll slide-in for gallery images with reverse animation
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.slide-in');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            const el = entry.target;
            const idx = Array.from(items).indexOf(el);
            const staggerDelay = idx * 150; // Increased stagger for smoother effect
            el.style.transitionDelay = staggerDelay + 'ms';
            
            if (entry.isIntersecting) {
                // Element entering viewport - animate in
                el.classList.add('in-view');
            } else {
                // Element leaving viewport - remove class to animate out/reverse
                el.classList.remove('in-view');
            }
        });
    }, { threshold: 0.2, rootMargin: '50px 0px -50px 0px' });

    items.forEach(i => observer.observe(i));
});
