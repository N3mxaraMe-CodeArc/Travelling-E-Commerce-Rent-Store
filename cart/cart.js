(function () {

  // Retrieve the cart items from local storage
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  var totalSubtotal = 0;

  // Get the elements
  var tableBody = document.querySelector("tbody");
  var emptyCartMessage = document.getElementById("empty-cart-message");
  var totalSubtotalElement = document.getElementById("total-subtotal");
  var checkoutButton = document.querySelector(".checkout-btn");
  var errorMessageElement = document.getElementById("error-message");

  // Function to generate table rows
  function generateTableRows() {
    // Clearing  the table body again
    tableBody.innerHTML = "";

    // Reset the total subtotal
    totalSubtotal = 0;

    // Cart empty function

    if (cartItems.length === 0) {
      // Show the empty cart message
      emptyCartMessage.textContent = "Your cart is empty";
      emptyCartMessage.style.display = "block";

      // Clear the total subtotal
      totalSubtotalElement.textContent = "";
      return;
    }

    // Hide the empty cart message if it was previously shown
    emptyCartMessage.textContent = "";

    // Iterate over the cart items and generate table rows
    cartItems.forEach(function (item, index) {
      // Create a new table row
      var row = document.createElement("tr");

      // Create table cells for each item detail
      var removeCell = document.createElement("td");
      var imageCell = document.createElement("td");
      var nameCell = document.createElement("td");
      var priceCell = document.createElement("td");
      var quantityCell = document.createElement("td");
      var subtotalCell = document.createElement("td");

      // Get class names for those cells
      nameCell.className = "item-names";
      priceCell.className = "price-tag";
      quantityCell.className = "quantity-tag";
      subtotalCell.className = "sub-total";

      // Create a remove button
      var removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.className = "remove-button";
      removeButton.addEventListener("click", function () {
        // Handle the remove button click event
        removeCartItem(index); // Pass the index of the clicked item.
      });

      // Set the content of the table cells
      removeCell.appendChild(removeButton);
      imageCell.innerHTML = '<img class="checkout-img" src="' + item.image + '" alt="">';
      nameCell.textContent = item.name;
      priceCell.textContent = item.price;
      quantityCell.textContent = item.quantity;

      //  function to calculate the subtotal.
      subtotalCell.textContent = calculateSubtotal(item.price, item.quantity);

      // Append the cells to the table row
      row.appendChild(removeCell);
      row.appendChild(imageCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(quantityCell);
      row.appendChild(subtotalCell);


      tableBody.appendChild(row);

      // Add the current subtotal to the total subtotal
      totalSubtotal += calculateSubtotal(item.price, item.quantity);
    });

    // Update the total subtotal value
    totalSubtotalElement.textContent = totalSubtotal;

    // Enable or disable the checkout button based on cart items.

    if (cartItems.length === 0) {
      checkoutButton.classList.add("disabled");
    } else {
      checkoutButton.classList.remove("disabled");
    }
  }

  // Generate initial table rows
  generateTableRows();

  // Function to calculate the subtotal
  function calculateSubtotal(price, quantity) {
    return parseFloat(price) * parseInt(quantity);
  }

  // Function to handle the remove button click event.

  function removeCartItem(index) {
    // Remove the item from cartItems array
    cartItems.splice(index, 1);

    // Save the updated cartItems array to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Re-generate the table rows
    generateTableRows();
  }


  // Attach event listener to the checkout button
  checkoutButton.addEventListener("click", openCheckout);

  // Retrieve the cart items from local storage
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Get the total span element
  var totalSpan = document.querySelector(".total");

  // Set the initial total value
  totalSpan.textContent = cartItems.length;

  // Function to handle adding an item to the cart
  function addItemToCart(item) {
    cartItems.push(item);

    // Save the updated cartItems array to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update the total value
    totalSpan.textContent = cartItems.length;

    // Enable the checkout button
    checkoutButton.classList.remove("disabled");
  }
  // Function to handle the checkout button click event
  function openCheckout() {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to proceed to checkout.");
    } else {
      // Proceed to checkout page
      window.location.href = "checkout.html";
    }
  }

  function init() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    document.getElementById("cartTotal").innerText = cartItems.length;
  }

  init();

})()


