// Get the canvas element using its ID
const canvas = document.getElementById("myCanvas");

// Check if the browser supports the <canvas> element
if (canvas.getContext) {
    // Get the 2d drawing context for the canvas
    const ctx = canvas.getContext("2d");

    // Draw a simple rectangle on the canvas
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 200, 100);
} else {
    // Display a message if the browser doesn't support <canvas>
    alert("Your browser does not support the <canvas> element.");
}