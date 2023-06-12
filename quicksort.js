// Quick sort algorithm
async function quickSort(array, low, high) {
    if (low < high) {
        const pivotIndex = await partition(array, low, high);
        await quickSort(array, low, pivotIndex - 1);
        await quickSort(array, pivotIndex + 1, high);
    }
}

async function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            await swap(array, i, j);
            await delay(10);
        }
    }

    await swap(array, i + 1, high);
    await delay(10);

    return i + 1;
}



// Start Quick Sort
function startQuickSort() {
    disableButtons();
    quickSort(array, 0, array.length - 1).then(() => enableButtons());
}