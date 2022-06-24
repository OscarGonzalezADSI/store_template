function slidebarLogo()
{
    const logo = document.getElementById("mySidebar");
    const divLogo = document.createElement("div");
    const iAction = document.createElement("i");
    const h3 = document.createElement("h3");
    const b = document.createElement("b");
    const bText = document.createTextNode("LOGO");

    logo.setAttribute("class","w3-sidebar w3-bar-block w3-white w3-collapse w3-top");
    divLogo.setAttribute("class","w3-container w3-display-container w3-padding-16");
    iAction.setAttribute("class","fa fa-remove w3-hide-large w3-button w3-display-topright");
    h3.setAttribute("class","w3-wide");
	
    logo.setAttribute("style","z-index:3;width:250px");
	
    iAction.setAttribute("onclick","w3_close()");

    b.appendChild(bText);
    h3.appendChild(b);
    divLogo.appendChild(iAction);
    divLogo.appendChild(h3);
    logo.appendChild(divLogo);
}

function slidebarMoreInfo()
{
    const logo = document.getElementById("mySidebar");
    const aContact = document.createElement("a");
    const aAction = document.createElement("a");
    const aSubscribe = document.createElement("a");
	
	const aContactText = document.createTextNode("Contact");
	const aActionText = document.createTextNode("Newsletter");
	const aSubscribeText = document.createTextNode("Subscribe");

	aContact.setAttribute("class","w3-bar-item w3-button w3-padding");
	aAction.setAttribute("class","w3-bar-item w3-button w3-padding");
	aSubscribe.setAttribute("class","w3-bar-item w3-button w3-padding");

	aContact.setAttribute("href","#footer");
	aAction.setAttribute("href","javascript:void(0)");
	aSubscribe.setAttribute("href","#footer");
	
	aAction.setAttribute("onclick","document.getElementById('newsletter').style.display='block'");

	aContact.appendChild(aContactText);
	aAction.appendChild(aActionText);
	aSubscribe.appendChild(aSubscribeText);

	logo.appendChild(aContact);
	logo.appendChild(aAction);
	logo.appendChild(aSubscribe);
}

slidebarLogo();
