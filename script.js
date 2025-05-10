let cart = [];

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let foodItem = document.getElementById("foodItem").value;
    let quantity = document.getElementById("quantity").value;

    let order = { item: foodItem, qty: quantity };
    cart.push(order);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`Order placed: ${foodItem} x ${quantity}`);
});

document.addEventListener("DOMContentLoaded", function() {
    let savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
});
