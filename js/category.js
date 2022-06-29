const category = document.createElement("div");
const logo = document.getElementById("mySidebar");
const divLogo = document.createElement("div");
const h3 = document.createElement("h3");
const b = document.createElement("b");
const a2divCategory = document.createElement("a");
const aContact = document.createElement("a");
const aAction = document.createElement("a");
const aSubscribe = document.createElement("a");
const iadivCategory = document.createElement("i");
const iAction = document.createElement("i");
const bText = document.createTextNode("LOGO");
const aContactText = document.createTextNode("Contact");
const aActionText = document.createTextNode("Newsletter");
const aSubscribeText = document.createTextNode("Subscribe");

// class

category.setAttribute("class","w3-padding-64 w3-large w3-text-grey");
logo.setAttribute("class","w3-sidebar w3-bar-block w3-white w3-collapse w3-top");
divLogo.setAttribute("class","w3-container w3-display-container w3-padding-16");
h3.setAttribute("class","w3-wide");
aContact.setAttribute("class","w3-bar-item w3-button w3-padding");
aAction.setAttribute("class","w3-bar-item w3-button w3-padding");
aSubscribe.setAttribute("class","w3-bar-item w3-button w3-padding");
a2divCategory.setAttribute("class", "w3-bar-item w3-button");
iadivCategory.setAttribute("class", "fa fa-caret-right w3-margin-right");
iAction.setAttribute("class", "fa fa-remove w3-hide-large w3-button w3-display-topright");

// href

a2divCategory.setAttribute("href", "#");
aContact.setAttribute("href","#footer");
aAction.setAttribute("href","javascript:void(0)");
aSubscribe.setAttribute("href","#footer");

// onclick

iAction.setAttribute("onclick","w3_close()");
aAction.setAttribute("onclick","document.getElementById('newsletter').style.display='block'");

// style

category.setAttribute("style","font-weight:bold");
logo.setAttribute("style","z-index:3;width:250px");
