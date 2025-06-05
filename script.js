document.addEventListener('DOMContentLoaded', function() {

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const moonIcon = document.querySelector('.theme-icon-moon');
    const sunIcon = document.querySelector('.theme-icon-sun');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            if (moonIcon) moonIcon.style.display = 'none';
            if (sunIcon) sunIcon.style.display = 'inline-block';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            if (moonIcon) moonIcon.style.display = 'inline-block';
            if (sunIcon) sunIcon.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
        // Re-feather icons after theme change if they rely on color
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }


    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = navLinks ? navLinks.querySelectorAll('a') : [];

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            if (isExpanded) {
                menuToggle.innerHTML = '<i data-feather="x"></i>';
            } else {
                menuToggle.innerHTML = '<i data-feather="menu"></i>';
            }
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        });
    }

    // Close mobile menu when a nav link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.innerHTML = '<i data-feather="menu"></i>';
                    if (typeof feather !== 'undefined') {
                        feather.replace();
                    }
                }
            }
        });
    });


    // --- Smooth Scroll for Navigation Links ---
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const header = document.querySelector('header');

            if (targetElement && header) {
                let offset = 0;
                // Only apply offset if not scrolling to the very top (#hero)
                if (targetId !== '#hero') {
                     offset = header.offsetHeight;
                }

                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Contact Form Validation and Mailto ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            let isValid = true;
            const adminEmail = 'admin@gmail.com'; // IMPORTANT: Set your admin email here.

            // Get form inputs and error spans
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            const nameError = nameInput.nextElementSibling;
            const emailError = emailInput.nextElementSibling;
            const subjectError = subjectInput.nextElementSibling;
            const messageError = messageInput.nextElementSibling;

            // Clear previous errors
            nameError.textContent = '';
            emailError.textContent = '';
            subjectError.textContent = '';
            messageError.textContent = '';

            // Validation for Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Full Name is required.';
                isValid = false;
            }

            // Validation for Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email address is required.';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validation for Subject
            if (subjectInput.value.trim() === '') {
                subjectError.textContent = 'Subject is required.';
                isValid = false;
            }

            // Validation for Message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                isValid = false;
            }

            if (isValid) {
                const name = nameInput.value.trim();
                const email = emailInput.value.trim(); // User's email
                const subject = subjectInput.value.trim();
                const message = messageInput.value.trim();

                const mailSubject = `LumeIT Website Contact: ${subject}`;
                const mailBody = `You have a new message from LumeIT Solutions website:\n\n` +
                                 `Name: ${name}\n` +
                                 `Email: ${email}\n` +
                                 `Subject: ${subject}\n\n` +
                                 `Message:\n${message}\n\n` +
                                 `--- End of message ---`;

                // Construct the mailto link
                // The 'replyto' header is not officially supported by all email clients,
                // but adding the user's email in the body is a reliable fallback.
                let mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

                // Open the user's default email client
                window.location.href = mailtoLink;

                // Provide feedback to the user and reset the form
                alert('Thank you for your message! Your email client should now open to send it. Please complete sending it from there.');
                contactForm.reset(); // Clear the form
            }
        });
    }

    // TODO: Connect to real email service before production.
    // For production, it is highly recommended to use a backend service (e.g., Node.js with Nodemailer, Python with Flask/Django, PHP)
    // or a third-party email API like EmailJS, Formspree, SendGrid, etc. to handle form submissions securely and reliably.
    // This client-side mailto: link approach is for demonstration/MVP purposes only and relies on the user's email client.


    // --- "Get a Quote" Button (Example: scrolls to contact) ---
    const getQuoteButtons = document.querySelectorAll('.get-quote-btn');
    getQuoteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            const header = document.querySelector('header');
            if (contactSection && header) {
                 const headerHeight = header.offsetHeight;
                 const elementPosition = contactSection.getBoundingClientRect().top;
                 const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Footer: Current Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Scroll Animations for Sections/Elements ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // observer.unobserve(entry.target); // Uncomment to stop observing once visible
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); // Added rootMargin for better trigger point

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // --- Active Navigation Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('main section[id]');
    const header = document.querySelector('header');


    function changeNavActiveState() {
        if (!header || navLinkItems.length === 0) return;
        // Adjust header height offset to activate sections slightly before they hit the very top
        const headerHeightOffset = header.offsetHeight + 40;
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeightOffset;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Special case for hero section when at the very top of the page
        if (window.pageYOffset < sections[0].offsetTop - headerHeightOffset / 2) {
            navLinkItems.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-links a[href="#hero"]');
            if(homeLink) homeLink.classList.add('active');
        }
    }
    if (sections.length > 0 && navLinkItems.length > 0) {
        window.addEventListener('scroll', changeNavActiveState);
        changeNavActiveState(); // Initial call on load
    }

    // --- Removed Typewriter Effect for Hero Section ---
    // The previous typewriter effect code has been removed as per your request.

    // Initialize Feather Icons at the end
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

});