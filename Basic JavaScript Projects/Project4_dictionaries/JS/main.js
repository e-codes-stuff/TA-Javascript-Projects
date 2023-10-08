// Define a dictionary (object) with key-value pairs
let dictionary = {
    "apple": "A sweet and crunchy fruit.",
    "banana": "A tropical fruit with a yellow peel.",
    "cherry": "A small, red, and juicy fruit."
};

// Function to display a random key-value pair and remove the key
function display() {
    // Get a random key from the dictionary
    let keys = Object.keys(dictionary);
    if (keys.length === 0) {
        document.getElementById("result").textContent = "Dictionary is empty.";
        return;
    }

    let randomKeyIndex = Math.floor(Math.random() * keys.length);
    let randomKey = keys[randomKeyIndex];

    // Display the key-value pair in an HTML element
    let value = dictionary[randomKey];

    // Remove the key from the dictionary
    delete dictionary[randomKey];
    
    document.getElementById("result").textContent = `${randomKey}: ${value}`;
};