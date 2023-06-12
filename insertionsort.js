// Insertion sort algorithm
async function insertionSort(array) {
    const len = array.length;
    for (let i = 1; i < len; i++) {
        const key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            await delay(1); // Decrease the delay to speed up the animation
            createBars(array); // Update the bars after each swap
        }

        array[j + 1] = key;
        await delay(1); // Decrease the delay to speed up the animation
    }
}


// Start Insertion Sort
async function startInsertionSort() {
    disableButtons();
    await insertionSort(array);
    enableButtons();
}
