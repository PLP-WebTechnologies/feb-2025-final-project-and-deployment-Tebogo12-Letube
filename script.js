let cart = [];

// Add items to the cart
function addToCart(item, price) {
    let order = { name: item, cost: price };
    cart.push(order);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item} added to cart!`);
}

// Load your saved cart on page refresh
document.addEventListener("DOMContentLoaded", function () {
    let savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
});
