// var productContainer = document.getElementById("products"); // Correct ID for product container
// var search = document.getElementById("search");
// var productlist = productContainer.querySelectorAll(".products-box"); // Use querySelectorAll to get all products

// search.addEventListener("keyup", function(event) {  // Fixed typo from "fuction" to "function"
//     var enteredValue = event.target.value.toUpperCase();

//     for (var count = 0; count < productlist.length; count++) {  // Fixed "lenght" typo to "length"
//         var productname = productlist[count].querySelector("p").textContent; // Fixed typo in "textContent"

//         if (productname.toUpperCase().indexOf(enteredValue) < 0) {
//             productlist[count].style.display = "none";  // Hide product if no match
//         } else {
//             productlist[count].style.display = "block";  // Show product if there's a match
//         }
//     }
// });


// // Global object to store the quantities of each product
// const quantities = {};

// // Function to handle quantity changes (+/- buttons)
// function changeQuantity(event, change) {
//     const productId = event.target.closest('.products-box').querySelector('p').textContent; // Get product name
//     const quantityElement = event.target.closest('.quantity-container').querySelector('.quantity');
//     let currentQuantity = parseInt(quantityElement.textContent);

//     // Change the quantity based on the button clicked
//     currentQuantity += change;

//     // Prevent quantity from going below 0
//     if (currentQuantity < 0) currentQuantity = 0;

//     // Update the quantity on the page and in the quantities object
//     quantityElement.textContent = currentQuantity;
//     quantities[productId] = currentQuantity; // Update quantity for the product
// }

// // Function to handle adding products to the cart
// function addToCart(productName) {
//     const quantity = quantities[productName] || 0; // Default to 0 if no quantity is set

//     if (quantity > 0) {
//         alert(`${quantity} ${productName} added to cart!`);
//         // Add to cart logic here (e.g., update cart, local storage, etc.)
//     } else {
//         alert('Please select a quantity before adding to the cart.');
//     }
// }


// var sidenavbar = document.querySelector(".side-navbar")
// sidenavbar.style.display = "block"

// function showNavbar(){
//     sidenavbar.style.left = "0";
// }


// function closeNavbar(){
//     sidenavbar.style.display = "none";
// }


// // Sample product data (You can replace this with dynamic data or fetch from an API)
// const products = [
//     { id: 1, name: 'Black T-Shirt', category: 'clothing', price: 20.00, image: 'img/product1.jpg' },
//     { id: 2, name: 'Red Cap', category: 'accessories', price: 15.00, image: 'img/product2.jpg' },
//     { id: 3, name: 'Blue Jeans', category: 'clothing', price: 40.00, image: 'img/product3.jpg' },
//     { id: 4, name: 'Leather Wallet', category: 'accessories', price: 30.00, image: 'img/product4.jpg' },
// ];

// // Initialize cart from localStorage
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // Function to update the cart in localStorage
// function updateCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Function to add item to the cart
// function addToCart(product) {
//     cart.push(product);
//     updateCart();
//     alert(`${product.name} added to the cart!`);
// }

// // Function to filter products
// function filterProducts() {
//     const category = document.getElementById('category').value;
//     const price = document.getElementById('price').value;

//     let filteredProducts = products;

//     if (category !== 'all') {
//         filteredProducts = filteredProducts.filter(product => product.category === category);
//     }

//     if (price === 'low-to-high') {
//         filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
//     } else if (price === 'high-to-low') {
//         filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
//     }

//     displayProducts(filteredProducts);
// }

// // Function to display products
// function displayProducts(productsToDisplay) {
//     const productsContainer = document.getElementById('products');
//     productsContainer.innerHTML = '';

//     productsToDisplay.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');

//         productDiv.innerHTML = `
//             <img src="${product.image}" alt="${product.name}" class="product-image">
//             <h3>${product.name}</h3>
//             <p>$${product.price.toFixed(2)}</p>
//             <button onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
//         `;

//         productsContainer.appendChild(productDiv);
//     });
// }

// // Set up event listeners for filtering
// document.getElementById('category').addEventListener('change', filterProducts);
// document.getElementById('price').addEventListener('change', filterProducts);

// // Initially display all products
// displayProducts(products);


// Sample product data (can be replaced with actual dynamic data from a database)

const products = [
    { id: 1, name: 'White Shirt', image: 'https://media.istockphoto.com/id/1278747384/photo/portrait-of-young-man-sitting-against-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=nlcjJsT2lYqvQ8YwLC9lwgRTyUHvIS76TekQdkC_zp4=', price: 20.00 },
    { id: 2, name: 'Black Shirt', image: 'https://media.istockphoto.com/id/1098034154/photo/foolish-old-fashioned-janitor-with-hat-holding-hammer.jpg?s=1024x1024&w=is&k=20&c=tDImzdvH1cRDVzdNAUPywpJf3w2uQQlM89ODzifKB-4=', price: 22.00 },
    { id: 3, name: 'Blue Shirt', image: 'https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8', price: 25.00 },
    { id: 4, name: 'Green Shirt', image: 'https://www.80scasualclassics.co.uk/images/pretty-green-tipped-polo-shirt-dark-green-p8573-56394_image.jpg', price: 18.00 },
    { id: 5, name: 'Orange Shirt', image: 'https://tse1.mm.bing.net/th?id=OIP.YF1n1xnGr11bSKJH59CaLAHaJ4&pid=Api&P=0&h=180', price: 24.00 },
    { id: 6, name: 'Red Shirt', image: 'https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D', price: 21.00 },
    { id: 7, name: 'Yellow Shirt', image: 'https://plus.unsplash.com/premium_photo-1682096603147-ec56faf43a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D', price: 19.00 }
];

// Cart array to store added products
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart in localStorage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to change the quantity of a product
function changeQuantity(event, change) {
    const productId = event.target.closest('.products-box').dataset.productId;
    const quantitySpan = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantitySpan.textContent);
    currentQuantity += change;

    // Prevent quantity from going below 0
    if (currentQuantity >= 0) {
        quantitySpan.textContent = currentQuantity;
    }
}

// Function to add product to cart
function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    const quantity = parseInt(document.getElementById(`quantity-${product.id}`).textContent);

    if (quantity > 0) {
        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;  // Increment quantity if already in cart
        } else {
            const cartItem = { ...product, quantity };
            cart.push(cartItem);  // Add new product to the cart
        }

        updateCart();
        alert(`${productName} has been added to your cart!`);
    } else {
        alert('Please select a quantity first.');
    }
}

// Function to display products on the page
function displayProducts() {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';  // Clear existing content

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('products-box');
        productDiv.dataset.productId = product.id;

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <div class="quantity-container">
                <button class="quantity-btn" onclick="changeQuantity(event, -1)">-</button>
                <span class="quantity" id="quantity-${product.id}">0</span>
                <button class="quantity-btn" onclick="changeQuantity(event, 1)">+</button>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Function to filter products based on search input
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    // Display the filtered products
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Clear the current list

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('products-box');
        productDiv.dataset.productId = product.id;

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <div class="quantity-container">
                <button class="quantity-btn" onclick="changeQuantity(event, -1)">-</button>
                <span class="quantity" id="quantity-${product.id}">0</span>
                <button class="quantity-btn" onclick="changeQuantity(event, 1)">+</button>
            </div>
            <button onclic class="add-to-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Initialize page by displaying all products
document.addEventListener('DOMContentLoaded', function () {
    displayProducts();  // Display all products when the page loads

    // Add event listener to search bar to filter products
    document.getElementById('search').addEventListener('input', searchProducts);
});








