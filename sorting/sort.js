function updateBars(data)
{
    const bars=document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        // Animate height change
        setTimeout(() => {
            bar.style.height = `${data[index]}%`;
            bar.querySelector('.number-label').textContent = data[index];
        }, index * 10); 
    });
}

function changeBarColor(bar, color) {
    bar.style.backgroundColor = color;
}



export { updateBars, changeBarColor };
