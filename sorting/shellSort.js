import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from './sort.js';
import { newSleepInterval } from "./slider.js";
import { disableAllButtons,enableAllButtons } from "./enableDisable.js";

document.getElementById("shellSortButton").addEventListener("click", start);

async function shellSort(data1) {
    var n = data1.length;
    var gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            var temp = data1[i];
            var j = i;

            // Highlight the current element being considered
            changeBarColor(document.querySelectorAll('.bar')[j], 'blue');

            // Perform insertion sort on subarrays defined by the current gap
            while (j >= gap && data1[j - gap] > temp) {
                // Highlight the element being compared
                changeBarColor(document.querySelectorAll('.bar')[j - gap], 'red');

                data1[j] = data1[j - gap];
                j -= gap;

                // Update the chart after each swap
                updateBars(data1);
                await sleep(newSleepInterval);

                // Restore color after comparison
                changeBarColor(document.querySelectorAll('.bar')[j], 'steelblue');
            }

            // Place the current element in its correct position
            data1[j] = temp;
            updateBars(data1);
            await sleep(newSleepInterval);

            // Restore color of the sorted element
            changeBarColor(document.querySelectorAll('.bar')[j], 'green');
        }
        gap = Math.floor(gap / 2);
    }

    document.querySelectorAll('.bar').forEach(bar => {
        changeBarColor(bar, 'green');
    });
}

async function start() {
    disableAllButtons();
    await shellSort(data1);
    enableAllButtons();
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
