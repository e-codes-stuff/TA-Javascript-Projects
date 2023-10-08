        // Function to perform addition
        document.getElementById("addButton").addEventListener("click", function () {
            const num1 = 5;
            const num2 = 3;
            const result = num1 + num2;
            document.getElementById("addResult").textContent = `Result: ${result}`;
        });

        // Function to perform subtraction
        document.getElementById("subtractButton").addEventListener("click", function () {
            const num1 = 10;
            const num2 = 7;
            const result = num1 - num2;
            document.getElementById("subtractResult").textContent = `Result: ${result}`;
        });

        // Function to perform multiplication
        document.getElementById("multiplyButton").addEventListener("click", function () {
            const num1 = 4;
            const num2 = 6;
            const result = num1 * num2;
            document.getElementById("multiplyResult").textContent = `Result: ${result}`;
        });

        // Function to calculate remainder (modulo)
        document.getElementById("moduloButton").addEventListener("click", function () {
            const num1 = 15;
            const num2 = 4;
            const result = num1 % num2;
            document.getElementById("moduloResult").textContent = `Result: ${result}`;
        });

        // Function to increment a number
        document.getElementById("incrementButton").addEventListener("click", function () {
            let number = 5;
            number++;
            document.getElementById("incrementResult").textContent = `Result: ${number}`;
        });

        // Function to decrement a number
        document.getElementById("decrementButton").addEventListener("click", function () {
            let number = 8;
            number--;
            document.getElementById("decrementResult").textContent = `Result: ${number}`;
        });

        // Function to generate a random number between 1 and 100
        document.getElementById("randomButton").addEventListener("click", function () {
            const randomNum = Math.floor(Math.random() * 100) + 1;
            document.getElementById("randomResult").textContent = `Random Number: ${randomNum}`;
        });