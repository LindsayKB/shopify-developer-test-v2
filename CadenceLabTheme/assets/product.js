window.onload = function() {
    var newFlavor = document.querySelector(".product-form__input input[type=radio]:checked+label").innerHTML.trim();
    updateFlavor(newFlavor);
};

document.querySelector('quantity-input input[name="quantity"]').addEventListener("change", (e) => {
    var quantity = document.querySelector('.quantity__input').value;
    var price = parseInt(document.querySelector('.price-item--regular').textContent.replace(/\$/g, '').trim());

    var totalPrice = quantity * price;

    document.querySelector('.price-calculation').innerHTML = "$" + totalPrice.toFixed();
});

document.querySelectorAll(".product-form__input input[type=radio]+label").forEach(function(el) {
  el.addEventListener("click", function() { //Add Event Listener to element
    updateFlavor(this.innerHTML.trim());
  })
});

function updateFlavor(flavor) {
    document.querySelector('.current-flavor').innerHTML = flavor;
}