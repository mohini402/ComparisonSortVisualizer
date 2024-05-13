import { data1 } from "./generatearray.js";
import { updateBars , changeBarColor } from "./sort.js";
import { newSleepInterval } from "./slider.js";
import { disableAllButtons,enableAllButtons } from "./playPause.js";

document.getElementById("bubbleSortButton").addEventListener("click", bubbleSort);

async function bubbleSort() {
    disableAllButtons();
    const bars = document.querySelectorAll('.bar');
    let i, j, temp,k;

    for (i = 0; i < data1.length - 1; i++) {
        for (j = 0; j < data1.length - 1 - i; j++) {
        
            changeBarColor(bars[j], "blue");
            changeBarColor(bars[j + 1], "blue");

            // Delay for visualization
            await sleep (newSleepInterval);

            if (data1[j] > data1[j + 1]) {
                temp = data1[j];
                data1[j] = data1[j + 1];
                data1[j + 1] = temp;

                // Update chart to reflect the swap
                updateBars(data1);
            }

            // Restore color after comparison
            changeBarColor(bars[j], "steelblue");
            changeBarColor(bars[j + 1], "steelblue");
            k=j+1;
        }
        await sleep(newSleepInterval);
        changeBarColor(bars[k],"green");
    }

    bars.forEach(bar=>{
        changeBarColor(bar,"green");
    })
    updateBars(data1);

    enableAllButtons();
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
