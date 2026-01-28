// Handle loading screen: keep showing until full page load
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Wait at least 3500ms after load before hiding the loader
        setTimeout(() => {
            loadingScreen.classList.add('hide');
            // reveal floating action buttons shortly after loader hides
            const floating = document.querySelector('.floating-actions');
            if (floating) {
                // allow loader transition to finish, then show buttons
                setTimeout(() => {
                    floating.classList.add('show');
                    floating.setAttribute('aria-hidden', 'false');
                }, 700);
            }
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
        start: "top 70%",
        end: "top 30%",
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
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
    },
    xPercent: 0,
    opacity: 1,
    ease: "none"
}); 

// Course enquiry: send via WhatsApp or Email
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('courseForm');
    const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const modalEl = document.getElementById('courseModal');

    if (!form || !sendWhatsAppBtn || !sendEmailBtn) return;

    function collectData() {
        return {
            name: (document.getElementById('inputName') || {}).value || '',
            email: (document.getElementById('inputEmail') || {}).value || '',
            phone: (document.getElementById('inputPhone') || {}).value || '',
            course: (document.getElementById('selectCourse') || {}).value || '',
            subject: (document.getElementById('inputSubject') || {}).value || '',
            message: (document.getElementById('textareaMessage') || {}).value || ''
        };
    }

    function validate(data) {
        return data.name && data.email && data.phone && data.course && data.subject && data.message;
    }

    function buildMessage(data) {
        return `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCourse: ${data.course}\n\nSubject: ${data.subject}\n\nMessage:\n${data.message}`;
    }

    function closeModal() {
        try {
            const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
            bsModal.hide();
        } catch (e) {
            // ignore
        }
    }

    sendWhatsAppBtn.addEventListener('click', () => {
        const data = collectData();
        if (!validate(data)) {
            alert('Please fill in all fields before sending.');
            return;
        }
        // NobleShield WhatsApp number (international, no +)
        const waNumber = '447526098834';
        const text = buildMessage(data);
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        closeModal();
    });

    sendEmailBtn.addEventListener('click', () => {
        const data = collectData();
        if (!validate(data)) {
            alert('Please fill in all fields before sending.');
            return;
        }
        const recipient = 'nobleshieldhygiene@gmail.com';
        const subject = data.subject;
        const body = buildMessage(data);
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        closeModal();
    });
});