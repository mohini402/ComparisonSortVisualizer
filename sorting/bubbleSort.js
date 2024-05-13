import { data1 } from "./generatearray.js";
import { updateBars , changeBarColor } from "./sort.js";
import { newSleepInterval } from "./slider.js";

let currentSortIndex = 0;

document.getElementById("bubbleSortButton").addEventListener("click", bubbleSort);

async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    let i, j, temp,k;

    for (i = currentSortIndex; i < data1.length - 1; i++) {
        if (p) {
            // Paused, store the current index and exit
            currentSortIndex = i;
            return;
          }
        for (j = 0; j < data1.length - 1 - i; j++) {

            if (p) {
                // Paused, store the current index and exit
                currentSortIndex = i;
                return;
              }
        
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
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  const pauseButton = document.getElementById('pauseButton');
const playButton = document.getElementById('playButton');

pauseButton.addEventListener("click", pauseSorting);
playButton.addEventListener("click", playSorting);

let p = false;

function pauseSorting() {
    p = true;
    playButton.style.display = "inline-block";  // Assuming playButton is defined
    pauseButton.style.display = "none";         // Assuming pauseButton is defined
}

function playSorting() {
    pauseButton.style.display = "inline-block";
    playButton.style.display = "none";
    p = false;
    bubbleSort();
}