// Shopping Cart Project by Leo
// Clear cart when page reloads
localStorage.clear();

// Variables
// Buttons
sauceBtnEl = document.getElementById("sauce-btn");
appleBtnEl = document.getElementById("apple-btn");
pringlesBtnEl = document.getElementById("pringles-btn");
outputEl = document.getElementById("output")
// Other Variables
totalCost = 0


// Create shopping cart
cartArray = []


// Helper Functions
sauceBtnEl.addEventListener("click", addSauce);
function addSauce() {
    cartArray.push(newItem("Awesome Sauce", 99.99, "Super Awesome Sauce"))
}

function newItem(itemName, itemPrice, itemDesc) {
    return {
        name: itemName,
        price: itemPrice,
        desc: itemDesc,
    }
}

function getItemHtmlStr() {

}
