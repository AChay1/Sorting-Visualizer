// Function to generate random array of values
function generateArray(size, min, max) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}

// Function to create bars based on array values
function createBars(array) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = array[i] + "px";
        container.appendChild(bar);
    }
}

// Helper function to swap two elements in an array
async function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    createBars(array);
}

// Helper function for delaying execution
function delay(ms) {
    if (sortingSpeed === 0) {
        // Introduce a longer delay at speed 0
        return new Promise(resolve => setTimeout(resolve, 500));
    } else {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Global variables
let arraySize = 50;
const minValue = 10;
const maxValue = 300;
let array = generateArray(arraySize, minValue, maxValue);
let sortingSpeed = 10;

// Function to update the array size value
function updateArraySize() {
    const arraySizeSlider = document.getElementById("arraySizeSlider");
    const arraySizeIndicator = document.getElementById("arraySizeIndicator");
    arraySize = parseInt(arraySizeSlider.value);
    arraySizeIndicator.textContent = arraySize;
    reset();
}

// Function to update the sorting speed value
function updateSortingSpeed() {
    const sortingSpeedSlider = document.getElementById("sortingSpeedSlider");
    const sortingSpeedIndicator = document.getElementById("sortingSpeedIndicator");
    sortingSpeed = parseInt(sortingSpeedSlider.value);
    sortingSpeedIndicator.textContent = sortingSpeed;
}

// Function to reset the bars to their original unsorted state
function reset() {
    const originalArray = generateArray(arraySize, minValue, maxValue);
    array.splice(0, array.length, ...originalArray);
    createBars(array);
}

// Function to disable buttons during sorting
function disableButtons() {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

// Function to enable buttons after sorting
function enableButtons() {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

// Usage example
createBars(array);

// Event listener for array size slider
const arraySizeSlider = document.getElementById("arraySizeSlider");
arraySizeSlider.addEventListener("input", updateArraySize);

// Event listener for sorting speed slider
const sortingSpeedSlider = document.getElementById("sortingSpeedSlider");
sortingSpeedSlider.addEventListener("input", updateSortingSpeed);