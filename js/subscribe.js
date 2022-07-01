const divSubscribe = document.getElementById("subscribe");
const h1Sub = document.createElement("h1");
const p1Sub = document.createElement("p");
const p2Sub = document.createElement("p");
const inputSub = document.createElement("input");
const btnSub = document.createElement("button");

const h1SubText = document.createTextNode("Subscribe");
const p1SubText = document.createTextNode("To get special offers and VIP treatment:");
const btnSubText = document.createTextNode("Subscribe");

divSubscribe.setAttribute("class", "w3-container w3-black w3-padding-32");
inputSub.setAttribute("class", "w3-input w3-border");
inputSub.setAttribute("type", "text");
inputSub.setAttribute("placeholder", "Enter e-mail");
inputSub.setAttribute("style", "width:100%");
btnSub.setAttribute("type", "button");
btnSub.setAttribute("class", "w3-button w3-red w3-margin-bottom");

h1Sub.append(h1SubText);
p1Sub.append(p1SubText);
p2Sub.append(inputSub);
btnSub.append(btnSubText);

divSubscribe.append(h1Sub);
divSubscribe.append(p1Sub);
divSubscribe.append(p2Sub);
divSubscribe.append(btnSub);
