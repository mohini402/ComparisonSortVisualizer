import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from './sort.js';

document.getElementById("quickSortButton").addEventListener("click", start);

const newSleepInterval = 1000; // Adjust the sleep interval for visualization (milliseconds)

async function quickSort(data1, low, high) {
    if (low < high) {
        let pivotIndex = await partition(data1, low, high);

        // Recursively sort the left and right partitions
        await quickSort(data1, low, pivotIndex - 1);
        await quickSort(data1, pivotIndex + 1, high);
    }
}

async function partition(data1, low, high) {
    let pivot = data1[high];
    let i = low - 1;

    // Highlight the pivot element in orange until it's placed correctly
    changeBarColor(document.querySelectorAll('.bar')[high], 'orange');

    for (let j = low; j <= high - 1; j++) {
        if (data1[j] < pivot) {
            i++;
            [data1[i], data1[j]] = [data1[j], data1[i]];
            updateBars(data1); // Update the chart after each swap
            await sleep(newSleepInterval); // Add a delay for visualization
        }
    }

    // Swap pivot into its correct position
    [data1[i + 1], data1[high]] = [data1[high], data1[i + 1]];
    updateBars(data1); // Update the chart after the last swap
    await sleep(newSleepInterval); // Add a delay for visualization

    // Change the color of the pivot element to green (permanent)
    changeBarColor(document.querySelectorAll('.bar')[i + 1], 'green', true);

    // Reset the color of the pivot element to steelblue
    changeBarColor(document.querySelectorAll('.bar')[high], 'steelblue');

    return i + 1; // Return the index of the pivot element
}

async function start() {
    await quickSort(data1, 0, data1.length - 1);

    // Highlight pivot element in green permanently after sorting completes
    let pivotIndex = data1.length - 1;
    changeBarColor(document.querySelectorAll('.bar')[pivotIndex], 'green', true);

    updateBars(data1); // Update the chart with the final sorted array
    
    const bars=document.querySelectorAll('.bar');
    bars.forEach(bar=>{
        changeBarColor(bar,"green");
    })
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
