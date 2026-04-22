// Scroll Reveal Animation using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once it's revealed, we can stop observing it
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Simple interaction effect for profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.05) rotate(5deg)';
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});
