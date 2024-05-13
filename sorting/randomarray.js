import { changeBarColor } from './sort.js';

document.getElementById("insertionSortButton").addEventListener("click", insertionSort);

async function insertionSort() {
    const bars = document.querySelectorAll('.bar');

    for (let i = 1; i < bars.length; i++) {
        let keyBar = bars[i];
        let keyHeight = parseInt(keyBar.style.height);
        let j = i - 1;

        changeBarColor(keyBar, 'blue'); // Highlight the key bar being considered

        while (j >= 0 && parseInt(bars[j].style.height) > keyHeight) {
            changeBarColor(bars[j], 'red'); // Highlight the bar being compared

            await swapBars(bars[j], bars[j + 1]);

            changeBarColor(bars[j], 'steelblue'); // Reset color after swap
            j--;
        }

        changeBarColor(keyBar, 'steelblue'); // Reset color of key bar
    }
}

async function swapBars(bar1, bar2) {
    return new Promise(resolve => {
        const distance = bar2.offsetLeft - bar1.offsetLeft;

        bar1.style.transition = 'transform 0.5s ease';
        bar2.style.transition = 'transform 0.5s ease';
        bar1.style.transform = `translateX(${distance}px)`;
        bar2.style.transform = `translateX(-${distance}px)`;

        setTimeout(() => {
            bar1.style.transition = 'none';
            bar2.style.transition = 'none';
            bar1.style.transform = 'none';
            bar2.style.transform = 'none';

            bar1.parentNode.insertBefore(bar2, bar1);
            resolve();
        }, 500);
    });
}

