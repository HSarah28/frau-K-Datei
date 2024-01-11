const cartLink = document.getElementById("cart-link");
const productContainers = document.querySelectorAll(".product");
const cartItems = [];

productContainers.forEach(productContainer => {
    const addToCartButton = productContainer.querySelector(".add-to-cart");
    const productName = productContainer.getAttribute("data-name");
    const productPrice = parseFloat(productContainer.getAttribute("data-price"));

    addToCartButton.addEventListener("click", () => {
        cartItems.push({ name: productName, price: productPrice });
        updateCartLink();
    });
});

function updateCartLink() {
    const cartItemCount = cartItems.length;
    cartLink.textContent = `Warenkorb (${cartItemCount})`;
}

cartLink.addEventListener("click", () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "cart.html";
});


function addToCart(productName, productPrice) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <p>${productName}</p>
        <p class="price">$${productPrice.toFixed(2)}</p>
    `;
    cartContainer.appendChild(cartItem);

    cartItems.push({ name: productName, price: productPrice });
    updateCartLink();
}

productContainers.forEach(productContainer => {
    const addToCartButton = productContainer.querySelector(".add-to-cart");
    const productName = productContainer.getAttribute("data-name");
    const productPrice = parseFloat(productContainer.getAttribute("data-price"));

    addToCartButton.addEventListener("click", () => {
        addToCart(productName, productPrice);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
});






productContainers.forEach(productContainer => {
    const addToCartButton = productContainer.querySelector(".add-to-cart");
    const productName = productContainer.getAttribute("data-name");
    const productPrice = parseFloat(productContainer.getAttribute("data-price"));

    addToCartButton.addEventListener("click", () => {
        addToCart(productName, productPrice);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
});

const cartContainer = document.querySelector(".cart-items");

function addToCart(productName, productPrice) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <p>${productName}</p>
        <p class="price">$${productPrice.toFixed(2)}</p>
    `;
    cartContainer.appendChild(cartItem);

    cartItems.push({ name: productName, price: productPrice });
    updateCartLink();
}




