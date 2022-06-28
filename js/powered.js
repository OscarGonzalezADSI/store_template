const divPowered = document.getElementById("powered");
const adivPowered = document.createElement("a");

const divPoweredText = document.createTextNode("Powered by ");
const adivPoweredText = document.createTextNode("w3.css");

divPowered.setAttribute("class", "w3-black w3-center w3-padding-24");
adivPowered.setAttribute("href", "https://www.w3schools.com/w3css/default.asp");
adivPowered.setAttribute("title", "W3.CSS");
adivPowered.setAttribute("target", "_blank");
adivPowered.setAttribute("class", "w3-hover-opacity");

adivPowered.appendChild(adivPoweredText);
divPowered.appendChild(divPoweredText);
divPowered.appendChild(adivPowered);