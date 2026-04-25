document.addEventListener('DOMContentLoaded', () => {
    
    // --- Typing Effect ---
    if (typeof Typed !== 'undefined') {
        new Typed('#typing-text', {
            strings: [
                'Software Engineer',
                'AI/ML Enthusiast',
                'Problem Solver',
                'Systems Architect'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    // --- Hero Visibility Fix ---
    // Ensure hero content is visible immediately as a fail-safe
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            menuToggle.classList.toggle('active');
            
            const spans = menuToggle.querySelectorAll('span');
            if(mobileNav.classList.contains('open')) {
                spans[0].style.transform = 'translateY(9px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-9px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                menuToggle.classList.remove('active');
            });
        });
    }

    // --- Active Link Highlight ---
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Simple Scroll Fade-In (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply visibility class to elements that normally have .reveal (or were reveal)
    // We removed 'reveal' but let's add a new simple 'animate-in' class to some
    document.querySelectorAll('.glass-card, .project-card, .skill-category, .section-title, .about-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Handle intersection by adding visibility
    window.addEventListener('scroll', () => {
       document.querySelectorAll('.glass-card, .project-card, .skill-category, .section-title, .about-card').forEach(el => {
           const rect = el.getBoundingClientRect();
           if(rect.top < window.innerHeight - 100) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
           }
       });
    });
    // Run once on load
    window.dispatchEvent(new Event('scroll'));

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const formStatus = document.getElementById('form-status');
            
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;

            setTimeout(() => {
                formStatus.innerHTML = '<span style="color: #00D2FF;">Success! I\'ll message you soon.</span>';
                contactForm.reset();
                submitBtn.innerHTML = 'Sent!';
            }, 1000);
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

});
