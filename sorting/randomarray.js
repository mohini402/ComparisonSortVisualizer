import { generateRandomArray } from "./generatearray.js";

document.addEventListener("DOMContentLoaded", function () {
  renderBarGraph();

  document
    .getElementById("randomizeButton")
    .addEventListener("click", function () {
      renderBarGraph();
    });
});

function renderBarGraph() {
 const data=generateRandomArray();
  const graphContainer = document.getElementById("array");

  // Clear existing content in graphContainer if needed
  graphContainer.innerHTML = "";

  // Loop through the data array to create bars
  data.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${value}%`;

    const numberLabel = document.createElement("span");
    numberLabel.textContent = value; // Set the text content to the bar's value
    numberLabel.className = "number-label";
    bar.appendChild(numberLabel);

    // Append the bar to the graph container
    graphContainer.appendChild(bar);

    // Animate the bar width after a delay
    setTimeout(() => {
      bar.style.width = "30px";
    }, 100 * index); // Adjust delay as needed
  });
}