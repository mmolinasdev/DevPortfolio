/**
 * PORTAFOLIO BD1 - MAIN JAVASCRIPT
 * Nomenclatura BEM para selectores y clases
 */

// ===================================
// CONSTANTES Y SELECTORES
// ===================================
const SELECTORS = {
    // Preloader
    preloader: '#preloader',
    
    // Navbar
    navbar: '.navbar',
    navbarToggle: '#menuToggle',
    navbarMenu: '#navMenu',
    navbarLink: '.navbar__link',
    navbarLinkActive: 'navbar__link--active',
    navbarMenuActive: 'navbar__menu--active',
    navbarToggleActive: 'navbar__toggle--active',
    navbarScrolled: 'navbar--scrolled',
    
    // Form
    contactForm: '#contactForm',
    
    // Animations
    animateCards: '.project-card, .about__card, .evidence-card'
};

// ===================================
// PRELOADER
// ===================================
class Preloader {
    constructor() {
        this.preloader = document.querySelector(SELECTORS.preloader);
        if (!this.preloader) return;
        this.init();
    }

    init() {
        // Add loading class to body
        document.body.classList.add('loading');

        // Hide preloader when page is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hide();
            }, 600); // Delay for better UX
        });
    }

    hide() {
        if (!this.preloader) return;
        this.preloader.classList.add('preloader--hidden');
        document.body.classList.remove('loading');
        
        // Remove preloader from DOM after animation
        setTimeout(() => {
            if (this.preloader) {
                this.preloader.remove();
            }
        }, 500);
    }
}

// Initialize preloader immediately
new Preloader();

// ===================================
// NAVEGACIÓN & MENU TOGGLE
// ===================================
class Navigation {
    constructor() {
        this.navbar = document.querySelector(SELECTORS.navbar);
        this.menuToggle = document.querySelector(SELECTORS.navbarToggle);
        this.navMenu = document.querySelector(SELECTORS.navbarMenu);
        this.navLinks = document.querySelectorAll(SELECTORS.navbarLink);
        
        this.init();
    }
    
    init() {
        this.setupMenuToggle();
        this.setupActiveLinks();
        this.setupScrollEffect();
    }
    
    setupMenuToggle() {
        if (!this.menuToggle) return;
        
        this.menuToggle.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        // Cerrar menú al hacer click en un link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
    }
    
    toggleMenu() {
        this.navMenu.classList.toggle(SELECTORS.navbarMenuActive);
        this.menuToggle.classList.toggle(SELECTORS.navbarToggleActive);
    }
    
    closeMenu() {
        this.navMenu.classList.remove(SELECTORS.navbarMenuActive);
        this.menuToggle.classList.remove(SELECTORS.navbarToggleActive);
    }
    
    setupActiveLinks() {
        const sections = document.querySelectorAll('section[id]');
        
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.setActiveLink(id);
                }
            });
        }, observerOptions);
        
        sections.forEach(section => observer.observe(section));
    }
    
    setActiveLink(id) {
        this.navLinks.forEach(link => {
            link.classList.remove(SELECTORS.navbarLinkActive);
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add(SELECTORS.navbarLinkActive);
            }
        });
    }
    
    setupScrollEffect() {
        if (!this.navbar) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.navbar.classList.add(SELECTORS.navbarScrolled);
            } else {
                this.navbar.classList.remove(SELECTORS.navbarScrolled);
            }
            
            lastScroll = currentScroll;
        });
    }
}

// ===================================
// SMOOTH SCROLL
// ===================================
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ===================================
// FORMULARIO DE CONTACTO
// ===================================
class ContactForm {
    constructor() {
        this.form = document.querySelector(SELECTORS.contactForm);
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    handleSubmit() {
        // Aquí puedes integrar con Formspree, EmailJS, etc.
        alert('¡Gracias por tu mensaje! Te responderé pronto. 📧\n\nNota: Para que este formulario funcione, necesitas integrarlo con un servicio de email como Formspree o EmailJS.');
        this.form.reset();
    }
}

// ===================================
// ANIMACIONES AL SCROLL
// ===================================
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll(SELECTORS.animateCards);
        this.init();
    }
    
    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        this.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ===================================
// LAZY LOADING DE IMÁGENES
// ===================================
class LazyLoadImages {
    constructor() {
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ===================================
// EASTER EGG - KONAMI CODE
// ===================================
class EasterEgg {
    constructor() {
        this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        this.konamiIndex = 0;
        this.init();
    }
    
    init() {
        document.addEventListener('keydown', (e) => {
            if (e.key === this.konamiCode[this.konamiIndex]) {
                this.konamiIndex++;
                if (this.konamiIndex === this.konamiCode.length) {
                    this.activate();
                    this.konamiIndex = 0;
                }
            } else {
                this.konamiIndex = 0;
            }
        });
    }
    
    activate() {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 ¡Encontraste el Easter Egg! 🎉\n\nGracias por explorar mi portafolio 🚀');
        }, 2000);
    }
}

// ===================================
// CONSOLE MESSAGE
// ===================================
class ConsoleMessage {
    constructor() {
        this.init();
    }
    
    init() {
        console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #667eea;');
        console.log('%cGracias por visitar mi portafolio', 'font-size: 14px; color: #718096;');
        console.log('%cSi encuentras algún bug o tienes sugerencias, ¡contáctame! 🚀', 'font-size: 12px; color: #764ba2;');
    }
}

// ===================================
// INICIALIZACIÓN
// ===================================
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }
    
    initializeComponents() {
        // Inicializar componentes
        new Navigation();
        new SmoothScroll();
        new ContactForm();
        new ScrollAnimations();
        new LazyLoadImages();
        new EasterEgg();
        new ConsoleMessage();
        
        console.log('✅ Portafolio BD1 inicializado correctamente');
    }
}

// Iniciar aplicación
new App();
