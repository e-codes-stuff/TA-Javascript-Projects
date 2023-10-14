// Function to utilize the concat() method
function performConcatenation() {
    const str1 = "Hello";
    const str2 = "World";
    const result = str1.concat(" ", str2);
    document.getElementById("concatResult").textContent = `Concatenated: ${result}`;
}

// Function to utilize the slice() method
function performSlice() {
    const originalString = "This is a long text.";
    const sliced = originalString.slice(5, 12);
    document.getElementById("sliceResult").textContent = `Sliced Text: ${sliced}`;
}

// Function to utilize the toString() method
function performToString() {
    const number = 42;
    const strNumber = number.toString();
    document.getElementById("toStringResult").textContent = `Number as String: ${strNumber}`;
}

// Function to utilize the toPrecision() method
function performPrecision() {
    const num = 1234.56789;
    const precision = num.toPrecision(5);
    document.getElementById("precisionResult").textContent = `Precision: ${precision}`;
}