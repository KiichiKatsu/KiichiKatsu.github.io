var button = document.getElementById("add-to-cart-btn");
var text = document.getElementById("cart-text");
button.addEventListener('click', function() {
    text.innerHTML = text.getAttribute("new-text");
    text.href = "Cart.html"
    button.style.backgroundColor = "#182627";
    button.innerHTML = "ADDED TO CART"
}, false);