// Handle loading screen: keep showing until full page load
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Wait at least 3500ms after load before hiding the loader
        setTimeout(() => {
            loadingScreen.classList.add('hide');
        }, 3500);
    }
});


// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', () => {
    ScrollTrigger.update();
});

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

let enteryRight = document.querySelectorAll('.right');
let enteryLeft = document.querySelectorAll('.left');

// Set initial states for animations
gsap.set(enteryRight, {opacity: 0, xPercent: 100});
gsap.set(enteryLeft, {opacity: 0, xPercent: -100});

// Animate right elements sliding in from right
gsap.to(enteryRight, {
    scrollTrigger: {
        trigger: enteryRight,
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
    },
    xPercent: 0,
    opacity: 1,
    ease: "none"
});

// Animate left elements sliding in from left
gsap.to(enteryLeft, {
    scrollTrigger: {
        trigger: enteryLeft,
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
    },
    xPercent: 0,
    opacity: 1,
    ease: "none"
}); 