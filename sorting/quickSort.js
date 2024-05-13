import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from './sort.js';
import { newSleepInterval } from "./slider.js";
import { disableAllButtons,enableAllButtons } from "./enableDisable.js";

document.getElementById("quickSortButton").addEventListener("click", start);

async function quickSort(array, low, high) {
    if (low < high) {
        let pivotIndex = await partition(array, low, high);
        await quickSort(array, low, pivotIndex - 1);
        await quickSort(array, pivotIndex + 1, high);
    }
}

async function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    // Highlight the pivot element in orange until it's placed correctly
    changeBarColor(getBar(high), 'orange');

    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            updateBars(array); // Update the chart after each swap
            await sleep(newSleepInterval); // Delay for visualization
        }
    }

    // Swap pivot into its correct position
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    updateBars(array); // Update the chart after the last swap
    await sleep(newSleepInterval); // Delay for visualization

    // Change the color of the pivot element to green (permanent)
    changeBarColor(getBar(i + 1), 'green', true);

    // Reset the color of the pivot element to steelblue
    changeBarColor(getBar(high), 'steelblue');

    return i + 1; // Return the index of the pivot element
}

async function start() {
    disableAllButtons();
    let arrayCopy = [...data1]; // Create a copy of the original array
    await quickSort(arrayCopy, 0, arrayCopy.length - 1);

    // Highlight pivot element in green permanently after sorting completes
    let pivotIndex = arrayCopy.length - 1;
    changeBarColor(getBar(pivotIndex), 'green', true);

    updateBars(arrayCopy); // Update the chart with the final sorted array
    highlightAllBarsGreen();
    enableAllButtons();
}

function getBar(index) {
    const bars = document.querySelectorAll('.bar');
    return bars[index];
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function highlightAllBarsGreen() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        changeBarColor(bar, 'green');
    });
}
