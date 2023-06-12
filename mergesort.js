// Merge sort algorithm
async function mergeSort(array, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSort(array, left, mid);
        await mergeSort(array, mid + 1, right);
        await merge(array, left, mid, right);
        await delay(10);
    }
}

async function merge(array, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const leftArray = array.slice(left, left + n1);
    const rightArray = array.slice(mid + 1, mid + 1 + n2);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < n2) {
        array[k] = rightArray[j];
        j++;
        k++;
    }

    createBars(array);
}



// Start Merge Sort
function startMergeSort() {
    disableButtons();
    mergeSort(array, 0, array.length - 1).then(() => enableButtons());
}