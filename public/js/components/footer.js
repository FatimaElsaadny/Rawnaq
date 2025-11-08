// footer.js - Footer functionality
class FooterManager {
    constructor() {
        this.init();
    }

    init() {
        this.handleNewsletter();
        this.addSmoothScrolling();
    }

    // Handle newsletter subscription
    handleNewsletter() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                const email = emailInput.value.trim();

                if (this.validateEmail(email)) {
                    this.subscribeNewsletter(email);
                } else {
                    this.showMessage('Please enter a valid email address', 'error');
                }
            });
        }
    }

    // Validate email format
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Simulate newsletter subscription
    async subscribeNewsletter(email) {
        try {
            // Here you would typically send to your backend
            console.log('Subscribing email:', email);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.showMessage('Thank you for subscribing! Check your email for the 5% discount code.', 'success');
            
            // Reset form
            const newsletterForm = document.querySelector('.newsletter-form');
            newsletterForm.reset();
            
        } catch (error) {
            this.showMessage('Subscription failed. Please try again.', 'error');
        }
    }

    // Show message to user
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.footer-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `footer-message alert alert-${type === 'success' ? 'success' : 'danger'}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            animation: slideIn 0.3s ease;
        `;

        if (type === 'success') {
            messageEl.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        } else {
            messageEl.style.background = 'linear-gradient(135deg, #dc3545, #e83e8c)';
        }

        document.body.appendChild(messageEl);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }

    // Add smooth scrolling for anchor links
    addSmoothScrolling() {
        const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize footer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FooterManager();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);