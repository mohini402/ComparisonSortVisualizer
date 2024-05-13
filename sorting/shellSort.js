import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from './sort.js';

document.getElementById("shellSortButton").addEventListener("click", start);

const newSleepInterval = 100; // Adjust the sleep interval for visualization (milliseconds)

async function shellSort(data1) {
    var n = data1.length;
    var gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            var temp = data1[i];
            var j = i;

            // Highlight the current element being considered (swapped)
            changeBarColor(document.querySelectorAll('.bar')[j], 'blue');

            while (j >= gap && data1[j - gap] > temp) {
                // Temporarily highlight the element being compared (swapped)
                changeBarColor(document.querySelectorAll('.bar')[j - gap], 'red');

                // Perform the swap operation
                data1[j] = data1[j - gap];
                j -= gap;

                // Update the chart after each swap
                updateBars(data1);
                await sleep(newSleepInterval);

                // Restore color after comparison
                changeBarColor(document.querySelectorAll('.bar')[j], 'blue');
            }

            // Place the current element in its correct position
            data1[j] = temp;
            updateBars(data1);
            await sleep(newSleepInterval);

            // Highlight the sorted element
            changeBarColor(document.querySelectorAll('.bar')[j], 'green');
        }

        gap = Math.floor(gap / 2);
    }

    // Highlight all bars in green to indicate final sorted state
    document.querySelectorAll('.bar').forEach(bar => {
        changeBarColor(bar, 'green');
    });
}

async function start() {
    await shellSort(data1); // Start the shell sort algorithm
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
