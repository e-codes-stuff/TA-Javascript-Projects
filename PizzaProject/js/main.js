// This function calculates the total price of the pizza order and displays it.
function getReceipt() {
    // Initialize variables
    let orderSummary = "<h3>You Ordered:</h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");
    let selectedSize;

    // Loop through the size options to find the selected size
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            orderSummary = orderSummary + selectedSize + "<br>";
        }
    }

    // Calculate the total cost based on the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Update the runningTotal and display size information in the console
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log(`size text1: ${orderSummary}`);
    console.log(`subtotal: $${runningTotal}.00`);

    // Call the getTopping function to handle toppings
    getTopping(runningTotal, orderSummary);
};

// This function calculates the total price of toppings and updates the receipt.
function getTopping(runningTotal, text1) {
    // Initialize variables for toppings
    let toppingTotal = 0;
    let selectedToppings = [];
    let toppingArray = document.getElementsByClassName("topping");

    // Loop through the topping options to find the selected toppings
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            let topping = toppingArray[i].value;

            // Store selected toppings and update the order summary
            selectedToppings.push(topping);
            console.log(`selected topping item: (${topping})`);
            text1 = text1 + topping + "<br>";
        }
    }

    // Calculate the total cost of toppings
    let toppingCount = selectedToppings.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    // Update the runningTotal and display the order summary and total price
    runningTotal = (runningTotal + toppingTotal);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = `<h3>Total: <strong>$${runningTotal}.00</strong></h3>`;
}