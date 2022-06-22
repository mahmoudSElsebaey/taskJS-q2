
//Q2

var allProducts = document.querySelectorAll(".products .product-parent")
var productsChoosed = document.querySelector(".products-choosed")
var btn = document.querySelector(".add-to-cart-btn")
var productName = document.querySelector(".offer-title")
var totalPrice = 0, i = 1;

allProducts.forEach(function (item) {
    item.onclick = function () {
        // totalPrice += +(item.getAttribute("price"))        or
        totalPrice += parseInt(item.getAttribute("price"))
        productsChoosed.innerHTML += i++ + ": " + item.getAttribute("productName") + " "
        productsChoosed.style.padding ="10px"
        // if (productsChoosed != 0) {             or
        if (productsChoosed.innerHTML != 0) {
            btn.style.display = "block"
        }

    }
});

btn.onclick = function () {
    document.querySelector(".numbersOfProducts").textContent = "Number of products that you choosed is " +( i-1) + " products"
    document.querySelector(".totalPrice").textContent =" Total Price is " + totalPrice + " EGP" 
}