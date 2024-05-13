const sleepIntervalSlider = document.getElementById("sleepIntervalSlider");
let newSleepInterval;

// Function to update the value display
function updateSliderValueDisplay(value) {
  const demoSpan = document.getElementById("demo");
  demoSpan.textContent = value;
}

// Event listener for slider input
sleepIntervalSlider.addEventListener("input", () => {
  newSleepInterval = parseInt(sleepIntervalSlider.value);
  updateSliderValueDisplay(newSleepInterval); 
});


export  {newSleepInterval};