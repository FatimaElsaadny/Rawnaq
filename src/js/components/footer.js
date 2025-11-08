class FooterManager {
    constructor() { this.init(); }

    init() {
        this.handleNewsletter();
        this.addSmoothScrolling();
    }

    handleNewsletter() {
        const form = document.querySelector('.newsletter-form');
        if (!form) return;
        form.addEventListener('submit', e => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value.trim();
            if (this.validateEmail(email)) {
                this.subscribeNewsletter(email, form);
            } else {
                this.showMessage('Please enter a valid email address', 'error');
            }
        });
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async subscribeNewsletter(email, form) {
        try {
            console.log('Subscribing email:', email);
            await new Promise(res => setTimeout(res, 1000));
            this.showMessage('Thank you for subscribing! Check your email for the 5% discount code.', 'success');
            form.reset();
        } catch {
            this.showMessage('Subscription failed. Please try again.', 'error');
        }
    }

    showMessage(msg, type) {
        const existing = document.querySelector('.footer-message');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.className = `footer-message alert ${type === 'success' ? 'success' : 'danger'}`;
        div.textContent = msg;
        document.body.appendChild(div);

        setTimeout(() => div.remove(), 5000);
    }

    addSmoothScrolling() {
        document.querySelectorAll('.footer-links a[href^="#"]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = document.getElementById(link.getAttribute('href').slice(1));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new FooterManager());
