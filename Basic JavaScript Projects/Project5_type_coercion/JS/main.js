// Log false to the console
console.log(true == false);

// Display "NaN" in the browser
document.getElementById("nanDisplay").textContent = NaN;

// Check if "Hello" is NaN and display "true"
document.getElementById("isNaNTrue").textContent = isNaN("Hello");

// Check if 42 is NaN and display "false"
// This will coerce "42" into the number type with a value of 42
document.getElementById("isNaNFalse").textContent = isNaN("42");

// Booleans that evaluate to True and False
document.getElementById("boolTrue").textContent = 1 + 1 == 2;
document.getElementById("boolFalse").textContent = 1 + 1 != 2;

// Using the AND operator (&&) to display "true" and the OR operator (||) to display "true"
document.getElementById("andOperatorTrue").textContent = true && false;
document.getElementById("orOperatorTrue").textContent = true || false;

// Using the NOT operator (!) to display "true" and "false"
document.getElementById("notTrue").textContent = !true;
document.getElementById("notFalse").textContent = !false;

// Booleans evaluated with a strict check (triple equals sign)
document.getElementById("strictTrue").textContent = 1 === 1;
document.getElementById("strictFalse1").textContent = 1 === "2";
document.getElementById("strictFalse2").textContent = 1 === "1";
document.getElementById("strictFalse3").textContent = 1 === 2;

// Write the section header and then display the type of "1"
// Next display the concatenation of "string" and a number type 1
document.write("<h1>Typeof Function:</h1>");
document.write(`<p>"1" = ${typeof ("1")}</p>`);
document.write(`<p>string + 1 = ${"string" + 1}</p>`);
