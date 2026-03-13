// State management
let currentPath = window.location.hash.slice(1) || '/';
let lastRenderedPath = null;

// Layout elements
const headerTemplate = `
    <div class="container nav-container">
        <a href="#/" class="logo" onclick="window.scrollTo({top:0, behavior:'smooth'})">
            <img src="assets/logo.png" alt="Church logo" id="nav-logo">
            <span>Bethany Prayer House</span>
        </a>
        
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Menu">
            <i data-lucide="menu"></i>
        </button>

        <nav class="nav-links" id="navLinks">
            <a href="#/" class="nav-link" data-path="/" onclick="window.scrollTo({top:0, behavior:'smooth'})">Home</a>
            <a href="#/#about" class="nav-link" data-path="/#about" onclick="scrollToSection('about')">About</a>
            <a href="#/#leadership" class="nav-link" data-path="/#leadership" onclick="scrollToSection('leadership')">Leadership</a>
            <a href="#/#services" class="nav-link" data-path="/#services" onclick="scrollToSection('services')">Services</a>
            <a href="#/#gallery" class="nav-link" data-path="/#gallery" onclick="scrollToSection('gallery')">Gallery</a>
            <a href="#/live" class="nav-link" data-path="/live">Live Service</a>
            <a href="#/prayer" class="nav-link" data-path="/prayer">Prayer Request</a>
            <a href="#/contact" class="nav-link btn btn-primary fade-in delay-2" style="padding: 0.5rem 1.5rem; min-width: auto; height: 40px;" data-path="/contact">Contact</a>
        </nav>
    </div>
`;

const footerTemplate = `
    <div class="container fade-in">

        <!-- Footer Bible Verse -->
        <div class="footer-verse">
            <blockquote>&ldquo;The Lord bless you and keep you; the Lord make his face shine upon you.&rdquo;</blockquote>
            <cite>&mdash; Numbers 6:24-26</cite>
        </div>

        <div class="footer-grid">
            <div class="footer-col">
                <div class="logo" style="color: var(--accent-gold); margin-bottom: 1.5rem;">
                    <span>Bethany Prayer House</span>
                </div>
                <p>Narasaraopet, Andhra Pradesh 522601</p>
                <div class="social-links">
                    <a href="https://youtube.com/@bethanychurchnarasaraopet5648" target="_blank" class="social-link" aria-label="YouTube">
                        <i data-lucide="youtube"></i>
                    </a>
                    <a href="https://www.instagram.com/bethanyprayerhousenarasaraopet" target="_blank" class="social-link" aria-label="Instagram">
                        <i data-lucide="instagram"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-col">
                <h3>Quick Links</h3>
                <div class="footer-links">
                    <a href="#/" onclick="window.scrollTo({top:0, behavior:'smooth'})">Home</a>
                    <a href="#/#about" onclick="scrollToSection('about')">About</a>
                    <a href="#/#leadership" onclick="scrollToSection('leadership')">Leadership</a>
                    <a href="#/#services" onclick="scrollToSection('services')">Services</a>
                    <a href="#/#gallery" onclick="scrollToSection('gallery')">Gallery</a>
                    <a href="#/live">Live Service</a>
                    <a href="#/prayer">Prayer Request</a>
                    <a href="#/contact">Contact</a>
                </div>
            </div>
            
            <div class="footer-col">
                <h3>Contact Us</h3>
                <p><i data-lucide="map-pin" style="display:inline; width:16px; margin-right:8px"></i> <a href="https://maps.google.com/?q=Gangamma+Temple+Lane,+Shalem+Nagar,+Narasaraopet,+Andhra+Pradesh+522601" target="_blank" rel="noopener noreferrer" style="color: inherit;">Gangamma Temple Lane, Shalem Nagar, Narasaraopet</a></p>
                <p><i data-lucide="phone" style="display:inline; width:16px; margin-right:8px"></i> <a href="tel:08647232439" style="color: inherit;">08647 232439</a></p>
                <p><i data-lucide="mail" style="display:inline; width:16px; margin-right:8px"></i> <a href="mailto:bethanychurch01@gmail.com" style="color: inherit;">bethanychurch01@gmail.com</a></p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Bethany Prayer House. All rights reserved.</p>
        </div>
    </div>
`;

window.scrollToSection = function(id) {
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 80; // height of fixed header
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }, 50); // small delay to ensure rendering just in case we changed paths
};

// Router implementation
function router() {
    let hash = window.location.hash.slice(1) || '/';

    // If navigating to a section on the home page (e.g., #/#about), the page is just '/'
    if (hash.startsWith('/#') || hash === '') {
        currentPath = '/';
    } else {
        currentPath = hash;
    }

    if (lastRenderedPath !== currentPath) {
        const page = pages[currentPath] || pages['/404'];

        if (page) {
            try {
                document.getElementById('app').innerHTML = page();
                lucide.createIcons();
            } catch (error) {
                console.error("Error rendering page logic: ", error);
            }
            lastRenderedPath = currentPath;

            // Small delay to ensure DOM is ready before observing
            setTimeout(() => {
                initAnimations();
                initForms();
                if (currentPath === '/') {
                    initGallery();
                }
            }, 50);
        }
    }

    updateActiveNavLink();

    if (hash.startsWith('/#')) {
        const sectionId = hash.split('#')[1];
        if (sectionId) {
            scrollToSection(sectionId);
        }
    } else {
        // Full page navigation - smoothly scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const navLinks = document.getElementById('navLinks');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (navLinks && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        if (mobileBtn) {
            mobileBtn.innerHTML = '<i data-lucide="menu"></i>';
            try { lucide.createIcons(); } catch(e) {}
        }
    }
}

function initForms() {
    const prayerForm = document.getElementById('prayerForm');
    const contactForm = document.getElementById('contactForm');
    const whatsappNumber = '919154139236';

    if (prayerForm) {
        prayerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(prayerForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const message = formData.get('message');

            const whatsappMessage = `*New Prayer Request from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
            prayerForm.reset();
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const message = formData.get('message');

            const whatsappMessage = `*New Contact Message from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${message}`;
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
            contactForm.reset();
        });
    }
}

function updateActiveNavLink() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-path') === currentPath) {
            link.classList.add('active');
        }
    });
}

function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        // If element is already in viewport or nearly there, activate it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        } else {
            observer.observe(el);
        }
    });

    // Final fallback: ensure everything is visible after a short delay
    // This prevents "blank page" syndrome if IntersectionObserver fails
    setTimeout(() => {
        document.querySelectorAll('.fade-in:not(.active)').forEach(el => {
            el.classList.add('active');
        });
    }, 500);
}

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (!lightbox || galleryItems.length === 0) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            if (imgSrc) {
                lightboxImg.src = imgSrc;
                lightbox.classList.add('show');
            }
        });
    });

    closeBtn.addEventListener('click', () => lightbox.classList.remove('show'));
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('show');
    });
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header').innerHTML = headerTemplate;
    document.getElementById('footer').innerHTML = footerTemplate;

    // User image configuration path
    // If you placed the real user images in the same folder, rename the references here or directly in the html/js.
    // E.g., const userLogo = 'logo.png'; document.getElementById('nav-logo').src = userLogo;

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        if (navLinks.classList.contains('show')) {
            mobileBtn.innerHTML = '<i data-lucide="x"></i>';
        } else {
            mobileBtn.innerHTML = '<i data-lucide="menu"></i>';
        }
        try { lucide.createIcons(); } catch(e) {}
    });

    window.addEventListener('hashchange', router);
    router();
});
