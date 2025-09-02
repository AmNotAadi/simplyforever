// ===== SIMPLY FOREVER WEBSITE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initCopyIPButton();
    initGalleryFiltering();
    initFormHandling();
    initSmoothScrolling();
    initAccessibilityFeatures();
});

// ===== MOBILE NAVIGATION =====
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navExternal = document.querySelector('.nav-external');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle navigation
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            navExternal.classList.toggle('active');
            
            // Update hamburger animation
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                navExternal.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                navExternal.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ===== COPY IP BUTTON =====
function initCopyIPButton() {
    const copyButtons = document.querySelectorAll('.copy-ip-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const serverIP = 'mc.simplyforever.xyz';
            
            try {
                await navigator.clipboard.writeText(serverIP);
                
                // Visual feedback
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.style.background = '#32CD32';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
                
                // Announce to screen readers
                announceToScreenReader('Server IP copied to clipboard');
                
            } catch (err) {
                console.error('Failed to copy IP:', err);
                
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = serverIP;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Visual feedback
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.style.background = '#32CD32';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            }
        });
    });
}

// ===== GALLERY FILTERING =====
function initGalleryFiltering() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (categoryButtons.length > 0 && galleryItems.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = button.getAttribute('data-category');
                
                // Update active button
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Announce filter change to screen readers
                const categoryName = button.textContent.trim();
                announceToScreenReader(`Showing ${categoryName} images`);
            });
        });
    }
}

// ===== FORM HANDLING =====
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#FF0000';
                    
                    // Add error message
                    let errorMsg = field.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = '#FF0000';
                        errorMsg.style.fontSize = '0.9rem';
                        errorMsg.style.marginTop = '0.25rem';
                        field.parentNode.appendChild(errorMsg);
                    }
                    errorMsg.textContent = 'This field is required';
                } else {
                    field.style.borderColor = '';
                    const errorMsg = field.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
            
            if (isValid) {
                // Show success message
                showFormSuccess(form);
                
                // Reset form
                form.reset();
            } else {
                // Announce validation errors to screen readers
                announceToScreenReader('Please fix the form errors before submitting');
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(input);
            });
            
            input.addEventListener('input', function() {
                // Clear error styling on input
                if (input.style.borderColor === 'red') {
                    input.style.borderColor = '';
                    const errorMsg = input.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
        });
    });
}

// ===== FIELD VALIDATION =====
function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    if (isRequired && !value) {
        field.style.borderColor = '#FF0000';
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.style.borderColor = '#FF0000';
            return false;
        }
    }
    
    field.style.borderColor = '';
    return true;
}

// ===== FORM SUCCESS MESSAGE =====
function showFormSuccess(form) {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.style.cssText = `
        background: #32CD32;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
    `;
    successMsg.textContent = 'Thank you! Your message has been sent successfully.';
    
    form.appendChild(successMsg);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
    
    // Announce success to screen readers
    announceToScreenReader('Form submitted successfully');
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Focus on target element for accessibility
                targetElement.focus();
            }
        });
    });
}

// ===== ACCESSIBILITY FEATURES =====
function initAccessibilityFeatures() {
    // Add main content ID if not present
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Keyboard navigation for gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        
        item.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });
    
    // Focus management for mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                this.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                this.focus();
            }
        });
    }
}

// ===== SCREEN READER ANNOUNCEMENTS =====
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initLazyLoading();

// ===== ERROR HANDLING =====
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
    
    // Log error to console for debugging
    if (event.error && event.error.message) {
        console.error('Error message:', event.error.message);
        console.error('Error stack:', event.error.stack);
    }
});

// ===== RESIZE HANDLER =====
const handleResize = debounce(function() {
    // Close mobile menu on resize if screen becomes large
    if (window.innerWidth > 768) {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navExternal = document.querySelector('.nav-external');
        
        if (navToggle && navMenu) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            navExternal.classList.remove('active');
        }
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===== PAGE VISIBILITY API =====
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause any animations or videos
        document.body.classList.add('page-hidden');
    } else {
        // Page is visible again
        document.body.classList.remove('page-hidden');
    }
});

// ===== SERVICE WORKER REGISTRATION (OPTIONAL) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}

// ===== ANALYTICS (OPTIONAL) =====
// Add your analytics code here if needed
// Example: Google Analytics, Matomo, etc.

console.log('Simply Forever website JavaScript loaded successfully! 🎮');
