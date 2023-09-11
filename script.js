document.addEventListener("DOMContentLoaded", function() {

    var inputElement = document.getElementById("textInput");
    var displayButton = document.getElementById("displayButton");
    var displayArea = document.getElementById("displayArea");

    displayButton.addEventListener("click", function() {

        var text = inputElement.value;

        displayArea.innerHTML = text;
    });
});
