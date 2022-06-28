const divCount = document.getElementById("countItems");
const pdivCount = document.createElement("p");

const pdivCountText = document.createTextNode("8 items");

divCount.setAttribute("class", "w3-container w3-text-grey");
pdivCount.appendChild(pdivCountText);
divCount.appendChild(pdivCount);
  