import { data1 } from "./generatearray.js";
import { updateBars, changeBarColor } from './sort.js';
import { newSleepInterval } from "./slider.js";
import { disableAllButtons,enableAllButtons } from "./enableDisable.js";

document.getElementById("mergeSortButton").addEventListener("click", start);

async function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    changeBarColor(document.querySelectorAll('.bar')[middle], 'orange');
    await sleep(newSleepInterval);

    const sortedLeft = await mergeSort(left);
    const sortedRight = await mergeSort(right);

    return merge(sortedLeft, sortedRight);
}


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

        updateBars(result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)));
        await sleep(newSleepInterval);
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


async function start() {
    disableAllButtons();

    const sortedArray = await mergeSort(data1.slice()); 

    updateBars(sortedArray);

    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        changeBarColor(bar, 'green');
    });

    enableAllButtons();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
