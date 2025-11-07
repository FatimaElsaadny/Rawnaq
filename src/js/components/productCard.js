// js/components/product-card.js

class ProductCard {
    constructor() {
        this.productsContainer = document.getElementById('products-container');
        this.template = document.querySelector('.product-card-template');
    }

    // Method to create a product card from data
    createProductCard(productData) {
        // Clone the template
        const templateContent = this.template.querySelector('.product-card');
        const newCard = templateContent.cloneNode(true);

        // Fill data
        this.fillCardData(newCard, productData);

        // Add event listeners
        this.addEventListeners(newCard, productData);

        return newCard;
    }

    // Fill card with product data
    fillCardData(card, product) {
        // Basic product info
        card.querySelector('.product-image').src = product.image || 'https://via.placeholder.com/300';
        card.querySelector('.product-image').alt = product.name;
        card.querySelector('.product-category').textContent = product.category || 'General';
        card.querySelector('.product-name').textContent = product.name;
        card.querySelector('.product-description').textContent = product.description || 'No description available';
        
        // Prices
        card.querySelector('.product-price').textContent = `$${product.price}`;
        
        // Handle sale price
        const oldPriceElement = card.querySelector('.product-old-price');
        if (product.oldPrice && product.oldPrice > product.price) {
            oldPriceElement.textContent = `$${product.oldPrice}`;
        } else {
            oldPriceElement.style.display = 'none';
        }

        // Handle sale badge
        const saleBadge = card.querySelector('.sale-badge');
        if (!product.onSale) {
            saleBadge.style.display = 'none';
        }

        // Rating
        this.updateRating(card, product.rating, product.reviewCount);

        // Set data attributes for identification
        card.setAttribute('data-product-id', product.id);
        card.setAttribute('data-product-category', product.category);
    }

    // Update star rating
    updateRating(card, rating = 0, reviewCount = 0) {
        const ratingContainer = card.querySelector('.product-rating');
        const ratingCount = card.querySelector('.rating-count');
        
        // Clear existing stars
        ratingContainer.innerHTML = '';
        
        // Create stars based on rating
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            ratingContainer.innerHTML += '<i class="fas fa-star text-warning"></i>';
        }
        
        // Add half star if needed
        if (hasHalfStar) {
            ratingContainer.innerHTML += '<i class="fas fa-star-half-alt text-warning"></i>';
        }
        
        // Add empty stars
        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            ratingContainer.innerHTML += '<i class="far fa-star text-warning"></i>';
        }
        
        // Add review count
        ratingContainer.innerHTML += `<small class="text-muted ms-1 rating-count">(${reviewCount})</small>`;
    }

    // Add event listeners to card buttons
    addEventListeners(card, product) {
        const addToCartBtn = card.querySelector('.add-to-cart');
        const viewDetailsBtn = card.querySelector('.view-details');

        addToCartBtn.addEventListener('click', () => {
            this.addToCart(product);
        });

        viewDetailsBtn.addEventListener('click', () => {
            this.viewProductDetails(product);
        });

        // Click on card image or title to view details
        card.querySelector('.product-image').addEventListener('click', () => {
            this.viewProductDetails(product);
        });

        card.querySelector('.product-name').addEventListener('click', () => {
            this.viewProductDetails(product);
        });
    }

    // Add to cart functionality
    addToCart(product) {
        // You'll integrate with your cart system here
        console.log('Adding to cart:', product);
        
        // Show success message
        this.showToast(`${product.name} added to cart!`, 'success');
        
        // Update cart count (if you have a cart counter)
        this.updateCartCount();
    }

    // View product details
    viewProductDetails(product) {
        // Redirect to product details page with product ID
        window.location.href = `product-details.html?id=${product.id}`;
    }

    // Display products in container
    displayProducts(products) {
        // Clear existing products
        this.productsContainer.innerHTML = '';

        // Add each product
        products.forEach(product => {
            const productCard = this.createProductCard(product);
            this.productsContainer.appendChild(productCard);
        });
    }

    // Filter products by category
    filterProducts(category) {
        const allCards = this.productsContainer.querySelectorAll('.product-card');
        
        allCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-product-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Utility methods
    showToast(message, type = 'info') {
        // Simple toast notification
        const toast = document.createElement('div');
        toast.className = `alert alert-${type} position-fixed top-0 end-0 m-3`;
        toast.style.zIndex = '1050';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    updateCartCount() {
        // Update cart counter in navbar
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const currentCount = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = currentCount + 1;
        }
    }
}

// Initialize product card system
const productCardManager = new ProductCard();

// Export for use in other files
window.ProductCardManager = productCardManager;