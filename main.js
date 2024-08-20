let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const total = document.getElementById('total');

    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.product} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`;
        totalPrice += item.price;
    });

    cartCount.textContent = cart.length;
    total.textContent = totalPrice.toFixed(2);
    document.getElementById('cart').style.display = cart.length > 0 ? 'block' : 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert(`Thank you for your purchase! Total: $${document.getElementById('total').textContent}`);
    cart = [];
    updateCart();
}
