// Colours
const normalDigitColour = "#424242";
const newDigitColour = "#E8847F";

// Print a digit of PI every interval
const intervalMs = 100;
const piString = Math.PI.toFixed(48).toString();

const maxPosition = 49;
let currentPosition = 0;

// Start
const piElement = document.getElementById("pi");
printPi(piElement);

function printPi(printElement) {
    const digit = piString[currentPosition];

    // Reset colours
    printElement.innerHTML = printElement.innerHTML.replace(newDigitColour, normalDigitColour);

    printElement.innerHTML += "<span style='color: " + newDigitColour + "; '>" + digit + "</span>";

    // Continue printing if there are digits left
    if (currentPosition < maxPosition) {
        currentPosition++;
        setTimeout(function () {
            printPi(printElement);
        }, intervalMs);
    }
    else {
        // Reset colours
        printElement.innerHTML = printElement.innerHTML.replace(newDigitColour, normalDigitColour);
    }
}

// Restart printing when button is clicked
document.getElementById("reset-button").addEventListener("click", restartPrint);

function restartPrint() {
    const piElement = document.getElementById("pi");

    // Reset state
    currentPosition = 0;
    piElement.innerText = "";

    // Start printing again
    printPi(piElement);
}