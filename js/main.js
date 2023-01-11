// Shopping Cart Project by Leo
// Clear cart when page loads
localStorage.clear();

// Create shopping cart
items = []

// Variables
// Buttons
sauceBtnEl = document.getElementById("sauce-btn");
appleBtnEl = document.getElementById("apple-btn");
pringlesBtnEl = document.getElementById("pringles-btn");
outputEl = document.getElementById("output");
// Other Variables
costEl = document.getElementById("total-cost");
totalCost = 0
costEl.innerHTML 

// Display items
function displayItems() {
    outputStr = ''
    for (i = 0; i <= items.length; i++) {
        outputStr += getItemHtmlStr(items[i]);
    }
    outputEl.innerHTML = outputStr;
}

// Helper Functions
sauceBtnEl.addEventListener("click", addSauce);
function addSauce() {
    items.push(newItem("awesome-sauce.jpg", "Super Awesome Sauce", 99.99))
    displayItems();
    totalCost + items.price;
}

// Create item in array
function newItem(itemImg, itemName, itemPrice) {
    return {
        image: itemImg,
        name: itemName,
        price: itemPrice,
    }
}

// Turn item into html
function getItemHtmlStr(item) {
    return `
        <div>
            <img src=${item.image} width="150px" height="150px">
            <h2>${items.price}</h2>
            <p>${item.name}</p>
        </div>
    `
}
