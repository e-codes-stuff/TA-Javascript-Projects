document.addEventListener("DOMContentLoaded", function () {
    var exampleButton = document.getElementById("exampleButton");
    var dataValueSpan = document.getElementById("dataValue");

    exampleButton.addEventListener("click", function () {
        var dataInfo = exampleButton.getAttribute("data-info");
        dataValueSpan.textContent = dataInfo;
    });
});