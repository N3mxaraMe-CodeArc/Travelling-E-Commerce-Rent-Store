(function () {
  function addToCart(event) {

    // Get the selected item details
    var card = event.target.parentElement;
    var itemName = card.querySelector("h4").innerText;
    var itemImage = card.querySelector("img").src;
    var itemPrice = card.querySelector(".price").innerText;
    var itemQuantity = card.querySelector(".size").value;

    // Create an object to store the item details
    var item = {
      name: itemName,
      image: itemImage,
      price: itemPrice,
      quantity: itemQuantity,
    };

    // Retrieve the existing cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new item to the cart items
    cartItems.push(item);

    // Store the updated cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Show a confirmation message or perform any other action
    alert("Item added to cart!");

    // Increment the value of the span tag
    var currentTotal = parseInt(document.getElementById("cartTotal").innerText);
    var newTotal = currentTotal + 1;
    document.getElementById("cartTotal").innerText = newTotal;
  }

  function init() {
    var AddToCartButtons = document.getElementsByClassName("cart");

    for (var i = 0; i < AddToCartButtons.length; i++) {
      AddToCartButtons[i].addEventListener('click', addToCart, false);
    }

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    document.getElementById("cartTotal").innerText = cartItems.length;
  }

  init();

})()


