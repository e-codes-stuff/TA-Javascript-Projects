let text = document.getElementById("loop");

// Function to write text to the loop element
function write_text(s) {
    text.innerHTML += "<br>" + s;
}

// Function that utilizes a while loop
function whileLoopExample() {
    let i = 1;
    while (i <= 5) {
        write_text("While loop iteration" + i);
        i++;
    }
}

// Function that utilizes a for loop
function forLoopExample() {
    for (let i = 1; i <= 5; i++) {
        write_text("For loop iteration " + i);
    }
}

// Function that utilizes an array
function arrayExample() {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Fig"];
    for (let i = 0; i < fruits.length; i++) {
        write_text("Array Example Fruit: " + fruits[i]);
    }
}

// Create an object using the "let" keyword
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

function call_loop() {
    // Call the functions and display the results
    whileLoopExample();
    forLoopExample();
    arrayExample();
    write_text("Displaying an object: " + JSON.stringify(person));
}