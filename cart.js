// Initialize the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart display and cart total
function updateCart() {
    // Get the cart items container and the cart summary
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');

    // Clear previous cart items
    cartItemsContainer.innerHTML = '';

    let totalItemsCount = 0;
    let totalPriceValue = 0;

    // Loop through the cart items and display them
    cart.forEach((item, index) => {
        totalItemsCount += item.quantity;
        totalPriceValue += item.quantity * item.price;

        // Create cart item elements
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Color: ${item.color}</p>
                <p>Size: ${item.size}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="decreaseQuantity(${index})">-</button>
                <input type="number" value="${item.quantity}" id="quantity-${index}" readonly>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
            <div class="cart-item-price">
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="cart-item-remove">
                <button onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update the cart summary
    totalItems.textContent = totalItemsCount;
    totalPrice.textContent = totalPriceValue.toFixed(2);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to increase the quantity of an item
function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

// Function to decrease the quantity of an item
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        updateCart();
    }
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function for checkout (could be extended to proceed to a checkout page)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some items to proceed.");
    } else {
        // For now, we'll just alert and reset the cart
        alert("Proceeding to checkout...");
        localStorage.removeItem('cart');
        cart = [];
        updateCart();
    }
}

// Initialize the cart page
updateCart();


// cart add icon
// Assuming you already have some cart-related script
let cartCount = 0;  // Variable to store cart item count

// Function to add an item to the cart
function addToCart() {
  cartCount++;  // Increment the cart count by 1
  updateCartCount(); // Update the cart count on the page
}

// Function to update the cart count displayed in the navbar
function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = cartCount;  // Set the new count in the span
}

// Optional: Update the count on page load if needed
document.addEventListener("DOMContentLoaded", function() {
  updateCartCount();  // Ensure the cart count is correctly displayed when the page loads
});



