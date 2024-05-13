import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from './sort.js';

document.getElementById("mergeSortButton").addEventListener("click", start);

const newSleepInterval = 1000;
// Function to perform merge sort
async function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively split and merge the subarrays
    return merge(await mergeSort(left), await mergeSort(right));
}

// Function to merge two sorted arrays
async function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

        // Update chart and add a delay for visualization
        updateBars(result);
        await sleep(newSleepInterval);
    }

    // Append remaining elements of left or right array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Function to start the merge sort process
async function start() {
    // Perform merge sort on data1 array
    const sortedArray = await mergeSort(data1);

    // Update chart with the final sorted array
    updateBars(sortedArray);

    // Turn all bars green to indicate final sorted state
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        changeBarColor(bar, 'green');
    });
}

// Utility function to simulate delay (sleep)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
