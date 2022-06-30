const topHeader = document.getElementById("topHeader");
const p1TopHeader = document.createElement("p");
const p2TopHeader = document.createElement("p");
const i1p2TopHeader = document.createElement("i");
const i2p2TopHeader = document.createElement("i");

const p1TopHeaderText = document.createTextNode("Jeans");

topHeader.setAttribute("class", "w3-container w3-xlarge");

p1TopHeader.setAttribute("class", "w3-left");
p2TopHeader.setAttribute("class", "w3-right");

i1p2TopHeader.setAttribute("class", "fa fa-shopping-cart w3-margin-right");
i2p2TopHeader.setAttribute("class", "fa fa-search");

p1TopHeader.appendChild(p1TopHeaderText);

p2TopHeader.appendChild(i1p2TopHeader);
p2TopHeader.appendChild(i2p2TopHeader);

topHeader.appendChild(p1TopHeader);
topHeader.appendChild(p2TopHeader);
