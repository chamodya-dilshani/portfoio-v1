

// Typed.js Animation
var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "UI/UX Designer", "ICT Undergraduate", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Active Navigation
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});