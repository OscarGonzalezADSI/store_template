const topMenuSmall = document.getElementById("topMenuSmall");
const divTopMenuSmall = document.createElement("div");
const aTopMenuSmall = document.createElement("a");
const iaTopMenuSmall = document.createElement("i");
const menuSmallText = document.createTextNode("LOGO");

topMenuSmall.setAttribute("class", "w3-bar w3-top w3-hide-large w3-black w3-xlarge");

divTopMenuSmall.setAttribute("class", "w3-bar-item w3-padding-24 w3-wide");

aTopMenuSmall.setAttribute("href", "javascript:void(0)");
aTopMenuSmall.setAttribute("class", "w3-bar-item w3-button w3-padding-24 w3-right");
aTopMenuSmall.setAttribute("onclick", "w3_open()");

iaTopMenuSmall.setAttribute("class", "fa fa-bars");

divTopMenuSmall.appendChild(menuSmallText);

aTopMenuSmall.appendChild(iaTopMenuSmall);

topMenuSmall.appendChild(divTopMenuSmall);
topMenuSmall.appendChild(aTopMenuSmall);
