const divImageHeader = document.getElementById("imageHeader");
const imgImageHeader = document.createElement("img");
const divTitle = document.createElement("div");
const h1Header1 = document.createElement("h1");
const h1Header2 = document.createElement("h1");
const h1Header3 = document.createElement("h1");
const pHeader = document.createElement("p");
const aHeader = document.createElement("a");

divImageHeader.setAttribute("class","w3-display-container w3-container");

imgImageHeader.setAttribute("src", "https://www.w3schools.com/w3images/jeans.jpg");
imgImageHeader.setAttribute("alt", "Jeans");
imgImageHeader.setAttribute("style", "width:100%");

divTitle.setAttribute("class", "w3-display-topleft w3-text-white");
divTitle.setAttribute("style", "padding:24px 48px");

h1Header1.setAttribute("class", "w3-jumbo w3-hide-small");
h1Header2.setAttribute("class", "w3-hide-large w3-hide-medium");
h1Header3.setAttribute("class", "w3-hide-small");

aHeader.setAttribute("href", "#jeans");
aHeader.setAttribute("class", "w3-button w3-black w3-padding-large w3-large");

h1Header1Text = document.createTextNode("New arrivals");
h1Header2Text = document.createTextNode("New arrivals");
h1Header3Text = document.createTextNode("COLLECTION 2016");
aHeaderText = document.createTextNode("SHOP NOW");

h1Header1.append(h1Header1Text);
h1Header2.append(h1Header2Text);
h1Header3.append(h1Header3Text);
aHeader.append(aHeaderText);

pHeader.append(aHeader);

divTitle.append(h1Header1);
divTitle.append(h1Header2);
divTitle.append(h1Header3);
divTitle.append(pHeader);

divImageHeader.append(imgImageHeader);
divImageHeader.append(divTitle);
