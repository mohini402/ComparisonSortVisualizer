import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from "./sort.js";
import { newSleepInterval } from "./slider.js";

document
  .getElementById("selectionSortButton")
  .addEventListener("click", selectionSort);

  async function selectionSort() {
    const bars=document.querySelectorAll('.bar');
    for (let i = 0; i < data1.length - 1; i++) {
        let minIndex = i;

        // Highlight the current minimum element
        changeBarColor(bars[minIndex], 'blue');

        await sleep(newSleepInterval);

        // Find the index of the minimum element in the remaining unsorted portion
        for (let k = i + 1; k < data1.length; k++) {
            // Highlight the element being considered
            changeBarColor(bars[k], 'red');

            await sleep(newSleepInterval);

            // Restore color after comparison
            changeBarColor(bars[k], 'steelblue');

            if (data1[k] < data1[minIndex]) {
                // Restore color of the previous minimum
                changeBarColor(bars[minIndex], 'steelblue');
                minIndex = k;
                // Highlight the new minimum
                changeBarColor(bars[minIndex], 'blue');
            }
        }

        // Swap the current element with the minimum element
        if (minIndex !== i) {
            // Swap data elements in the array (without visual animation)
            let temp = data1[minIndex];
            data1[minIndex] = data1[i];
            data1[i] = temp;
            changeBarColor(bars[i],'green');

            // Update the visual representation of bars
            updateBars(data1);
            
            // Delay for visualization
            await sleep(newSleepInterval);
        }

        // Restore color of the current minimum element
        changeBarColor(bars[minIndex], 'steelblue');
    }

    bars.forEach(bar => {
        changeBarColor(bar, 'green');
    });
}

async function sleep(ms) {
 return new Promise(resolve=>setTimeout(resolve,ms));   
};