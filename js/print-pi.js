// Setup
// Update text every 30 milliseconds
const piParagraph = document.getElementById("pi");
var updateTextIntervalId = setInterval(updatePiText, 30);

// Stop printing when button is clicked
document.getElementById("stop-button").addEventListener("click", stopPrint);

// Functions
function updatePiText() {
    piParagraph.innerText += 3;
}

function stopPrint() {
    clearInterval(updateTextIntervalId);
}