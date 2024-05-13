import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from "./sort.js";
import { newSleepInterval } from "./slider.js";
import { disableAllButtons, enableAllButtons } from "./playPause.js";

document
  .getElementById("insertionSortButton")
  .addEventListener("click", insertionSort);

async function insertionSort() {
  
  disableAllButtons();
  const bars = document.querySelectorAll(".bar");

  for (let i = 1; i < data1.length; i++) {
    let key = data1[i];
    let j = i - 1;

    changeBarColor(bars[i], "blue");

    await sleep(newSleepInterval);

    while (j >= 0 && data1[j] > key) {
      changeBarColor(bars[j], "red");

      await sleep(newSleepInterval);

      data1[j + 1] = data1[j];

      updateBars(data1);

      changeBarColor(bars[j], "steelblue");

      j--;
      await sleep(newSleepInterval);
    }

    data1[j + 1] = key;
    // Restore color of the key element
    changeBarColor(bars[i], "steelblue");
  }

  // Update bars' visual representation to reflect the final sorted order
  updateBars(data1);

  bars.forEach((bar) => {
    changeBarColor(bar, "green");
  });
  
  enableAllButtons();
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from "./sort.js";
import { newSleepInterval } from "./slider.js";

let currentInsertionSortIndex = 0; // Track the current index being sorted

document
  .getElementById("insertionSortButton")
  .addEventListener("click", insertionSort);

async function insertionSort() {
  const bars = document.querySelectorAll(".bar");

  for (let i = currentInsertionSortIndex; i < data1.length; i++) {
    if (insertionPause) {
      // Paused, store the current index and exit
      currentInsertionSortIndex = i;
      return;
    }
    let key = data1[i];
    let j = i - 1;

    changeBarColor(bars[i], "blue");

    await sleep(newSleepInterval);

    while (j >= 0 && data1[j] > key) {
      if (insertionPause) {
        currentInsertionSortIndex = i;
        return;
      }
      changeBarColor(bars[j], "red");

      await sleep(newSleepInterval);

      data1[j + 1] = data1[j];

      if (insertionPause) {
        // Paused, store the current index and exit
        currentInsertionSortIndex = i;
        return;
      }
      updateBars(data1);
      if (insertionPause) {
        // Paused, store the current index and exit
        currentInsertionSortIndex = i;
        return;
      }

      changeBarColor(bars[j], "steelblue");

      j--;
      await sleep(newSleepInterval);
    }

    data1[j + 1] = key;

    if (insertionPause) {
      currentInsertionSortIndex = i;
      return;
    }
    // Restore color of the key element
    changeBarColor(bars[i], "steelblue");
  }

  // Update bars' visual representation to reflect the final sorted order
  if (!insertionPause) {
    updateBars(data1);

    bars.forEach((bar) => {
      changeBarColor(bar, "green");
    });
  }
}



async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
*/

/*
const insertionPauseButton = document.getElementById('pauseButton');
const insertionPlayButton = document.getElementById('playButton');

insertionPauseButton.addEventListener("click", pauseInsertionSorting);
insertionPlayButton.addEventListener("click", playInsertionSorting);

let insertionPause = false;

function pauseInsertionSorting() {
    insertionPause = true;
    insertionPlayButton.style.display = "inline-block";  // Assuming playButton is defined
    insertionPauseButton.style.display = "none";         // Assuming pauseButton is defined
}

function playInsertionSorting() {
    insertionPauseButton.style.display = "inline-block";
    insertionPlayButton.style.display = "none";
    insertionPause = false;
    insertionSort();
}
*/

/*
async function swapBars(bar1, bar2) {
    return new Promise(resolve => {
        const left1 = bar1.offsetLeft;
        const left2 = bar2.offsetLeft;
        const distance = left2 - left1;

        // Animate the swap by adjusting CSS left property
        bar1.style.transition = 'transform 0.5s ease';
        bar2.style.transition = 'transform 0.5s ease';
        bar1.style.transform = `translateX(${distance}px)`;
        bar2.style.transform = `translateX(-${distance}px)`;

        // Wait for the animation to complete
        setTimeout(() => {
            // Reset transitions and positions
            bar1.style.transition = 'none';
            bar2.style.transition = 'none';
            bar1.style.transform = 'none';
            bar2.style.transform = 'none';

            // Swap their positions in the DOM
            bar1.parentNode.insertBefore(bar2, bar1);
            resolve();
        }, 500); // Delay should match the transition duration
    });
}
*/

//export {insertionSort} ;
