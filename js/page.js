// Seperate shopping cart and store pages

// Div variables
let storeDivEl = document.getElementById("store-div");
let shoppingCartDivEl = document.getElementById("shopping-cart-div");

// Btn variables
let shoppingCartBtn = document.getElementById("shopping-cart");
let backBtn = document.getElementById("back-btn");

// Switch to shopping cart
shoppingCartBtn.addEventListener('click', displayShoppingCart);
function displayShoppingCart() {
  storeDivEl.style.display = 'none';
  shoppingCartDivEl.style.display = 'block';
}


// Switch back to store
backBtn.addEventListener('click', displayShop);
function displayShop() {
    shoppingCartDivEl.style.display = 'none';
    storeDivEl.style.display = 'block';
  }