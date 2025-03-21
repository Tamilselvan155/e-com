// Get the cart from localStorage or initialize an empty one
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in the navbar
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Function to add product to cart
function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    const quantity = parseInt(document.getElementById(`quantity-${product.id}`).textContent);

    if (quantity > 0) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount(); // Update navbar count
        alert(`${productName} has been added to your cart!`);
    } else {
        alert('Please select a quantity first.');
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Update navbar count
    displayCart();
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
});
