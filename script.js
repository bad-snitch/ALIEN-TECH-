// Default iPhone products
const defaultProducts = [
    {
        id: 1,
        name: 'iPhone X',
        price: 499,
        color: 'Space Gray',
        storage: '64GB',
        image: 'https://images.unsplash.com/photo-1592286927505-1def25e51e02?w=500&h=500&fit=crop',
        description: 'Revolutionary face ID and edge-to-edge OLED display',
        series: 'X'
    },
    {
        id: 2,
        name: 'iPhone 11',
        price: 599,
        color: 'Purple',
        storage: '128GB',
        image: 'https://images.unsplash.com/photo-1529148482759-b8ac9f6830d0?w=500&h=500&fit=crop',
        description: 'Dual camera system with ultra-wide angle lens',
        series: '11'
    },
    {
        id: 3,
        name: 'iPhone 12',
        price: 699,
        color: 'Blue',
        storage: '128GB',
        image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop',
        description: '5G enabled with flat-edge design',
        series: '12'
    },
    {
        id: 4,
        name: 'iPhone 13',
        price: 799,
        color: 'Sierra Blue',
        storage: '128GB',
        image: 'https://images.unsplash.com/photo-1592286927505-1def25e51e02?w=500&h=500&fit=crop',
        description: 'Cinematic mode with advanced camera system',
        series: '13'
    },
    {
        id: 5,
        name: 'iPhone 14',
        price: 899,
        color: 'Deep Purple',
        storage: '128GB',
        image: 'https://images.unsplash.com/photo-1592286927505-1def25e51e02?w=500&h=500&fit=crop',
        description: 'Always-On display and crash detection',
        series: '14'
    },
    {
        id: 6,
        name: 'iPhone 15',
        price: 999,
        color: 'Black Titanium',
        storage: '128GB',
        image: 'https://images.unsplash.com/photo-1592286927505-1def25e51e02?w=500&h=500&fit=crop',
        description: 'USB-C with titanium design and Action button',
        series: '15'
    },
    {
        id: 7,
        name: 'iPhone 16',
        price: 1099,
        color: 'Ultramarine',
        storage: '256GB',
        image: 'https://images.unsplash.com/photo-1592286927505-1def25e51e02?w=500&h=500&fit=crop',
        description: 'AI-powered Camera Control and advanced A18 chip',
        series: '16'
    },
    {
        id: 8,
        name: 'iPhone 17',
        price: 1299,
        color: 'Platinum',
        storage: '512GB',
        image: 'https://images.unsplash.com/photo-1592286927505-1def25e51e02?w=500&h=500&fit=crop',
        description: 'Latest AI integration and next-gen display technology',
        series: '17'
    }
];

// State Management
let products = JSON.parse(localStorage.getItem('products')) || defaultProducts;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Product form submission
    document.getElementById('productForm').addEventListener('submit', addProduct);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderProducts();
        });
    });

    // Cart modal
    const cartModal = document.getElementById('cartModal');
    const cartLink = document.querySelector('.cart-link');
    const closeBtn = document.querySelector('.close');

    cartLink.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            closeCart();
        }
    });
}

// Render Products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    let filteredProducts = products;
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(p => p.series === currentFilter);
    }

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="empty-state"><p>No products found in this category.</p></div>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/500x500?text=iPhone'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-details">
                    <span class="product-detail">${product.color}</span>
                    <span class="product-detail">${product.storage}</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="remove-btn" onclick="removeProduct(${product.id})">Remove</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add Product
function addProduct(e) {
    e.preventDefault();

    const newProduct = {
        id: Date.now(),
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        color: document.getElementById('productColor').value,
        storage: document.getElementById('productStorage').value,
        image: document.getElementById('productImage').value,
        description: document.getElementById('productDescription').value,
        series: extractSeries(document.getElementById('productName').value)
    };

    products.push(newProduct);
    saveProducts();
    renderProducts();

    // Reset form
    document.getElementById('productForm').reset();

    // Show success message
    showNotification('Product added successfully!');

    // Scroll to products
    setTimeout(() => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// Extract iPhone series from product name
function extractSeries(name) {
    const match = name.match(/iPhone\s*(X|11|12|13|14|15|16|17)?/i);
    if (match && match[1]) {
        return match[1];
    }
    return 'all';
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Remove Product from Shop
function removeProduct(productId) {
    if (confirm('Are you sure you want to remove this product from the shop?')) {
        products = products.filter(p => p.id !== productId);
        saveProducts();
        renderProducts();
        showNotification('Product removed from shop');
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
    showNotification('Item removed from cart');
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Open Cart
function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('show');
    renderCart();
}

// Close Cart
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('show');
}

// Render Cart
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
        document.getElementById('totalPrice').textContent = '0';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item-detail">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-info">
                    ${item.color} | ${item.storage} | Qty: ${item.quantity}
                </div>
            </div>
            <div style="text-align: right;">
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                <button onclick="removeFromCart(${item.id})" style="
                    background-color: #ff3b30;
                    color: white;
                    border: none;
                    padding: 0.4rem 0.8rem;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.8rem;
                    margin-top: 0.5rem;
                ">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Save Products to Local Storage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #0a84ff;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Quantity update in cart
function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            cartItem.quantity = newQuantity;
            saveCart();
            updateCartCount();
            renderCart();
        }
    }
}

// Checkout
document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.querySelector('.checkout-button');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            alert(`Order total: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}\n\nThank you for your purchase!`);
            cart = [];
            saveCart();
            updateCartCount();
            closeCart();
            showNotification('Order placed successfully!');
        });
    }
});
