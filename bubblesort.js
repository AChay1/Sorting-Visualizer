// Bubble sort algorithm
async function bubbleSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                await swap(array, j, j + 1);
                await delay(10);
            }
        }
    }
}

// Start Bubble Sort
function startBubbleSort() {
    disableButtons();
    bubbleSort(array).then(() => enableButtons());
}
