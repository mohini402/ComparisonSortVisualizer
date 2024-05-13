// playPause.js

//import {insertionSort} from "./insertionSort.js";
/*
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
    insertionSort();
}

export { p, pauseSorting, playSorting };
*/


function disableAllButtons() {
    // Disable all sorting buttons and input elements during sorting
    const buttonIds = [
      "insertionSortButton",
      "bubbleSortButton",
      "mergeSortButton",
      "quickSortButton",
      "shellSortButton",
      "selectionSortButton",
      "randomizeButton",
      "arraySize"
    ];
  
    buttonIds.forEach((id) => {
      const button = document.getElementById(id);
      if (button) {
        button.disabled = true;
      }
    });
  }
  
  function enableAllButtons() {
    // Enable all sorting buttons and input elements after sorting is completed
    const buttonIds = [
      "insertionSortButton",
      "bubbleSortButton",
      "mergeSortButton",
      "quickSortButton",
      "shellSortButton",
      "selectionSortButton",
      "randomizeButton",
      "arraySize"
    ];
  
    buttonIds.forEach((id) => {
      const button = document.getElementById(id);
      if (button) {
        button.disabled = false;
      }
    });
  }

  export {disableAllButtons,enableAllButtons}