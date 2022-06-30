function categoryNodes()
{
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
	
	const nodes = {};
	
	nodes.category = category;
	nodes.logo = logo;
	nodes.divLogo = divLogo;
	nodes.h3 = h3;
	nodes.b = b;
	nodes.a2divCategory = a2divCategory;
	nodes.aContact = aContact;
	nodes.aAction = aAction;
	nodes.aSubscribe = aSubscribe;
	nodes.iadivCategory = iadivCategory;
	nodes.iAction = iAction;
	nodes.bText = bText;
	nodes.aContactText = aContactText;
	nodes.aActionText = aActionText;
	nodes.aSubscribeText = aSubscribeText;
	
	return nodes;
}

function categorySetAttributeClass(nodes)
{
	nodes.category.setAttribute("class","w3-padding-64 w3-large w3-text-grey");
	nodes.logo.setAttribute("class","w3-sidebar w3-bar-block w3-white w3-collapse w3-top");
	nodes.divLogo.setAttribute("class","w3-container w3-display-container w3-padding-16");
	nodes.h3.setAttribute("class","w3-wide");
	nodes.aContact.setAttribute("class","w3-bar-item w3-button w3-padding");
	nodes.aAction.setAttribute("class","w3-bar-item w3-button w3-padding");
	nodes.aSubscribe.setAttribute("class","w3-bar-item w3-button w3-padding");
	nodes.a2divCategory.setAttribute("class", "w3-bar-item w3-button");
	nodes.iadivCategory.setAttribute("class", "fa fa-caret-right w3-margin-right");
	nodes.iAction.setAttribute("class", "fa fa-remove w3-hide-large w3-button w3-display-topright");	
}

function categorySetAttributeHref(nodes)
{
	nodes.a2divCategory.setAttribute("href", "#");
	nodes.aContact.setAttribute("href","#footer");
	nodes.aAction.setAttribute("href","javascript:void(0)");
	nodes.aSubscribe.setAttribute("href","#subscribe");	
}

function categorySetAttributeOnclick(nodes)
{
	nodes.iAction.setAttribute("onclick","w3_close()");
	nodes.aAction.setAttribute("onclick","document.getElementById('newsletter').style.display='block'");
}

function categorySetAttributeStyles(nodes)
{
	nodes.category.setAttribute("style","font-weight:bold");
	nodes.logo.setAttribute("style","z-index:3;width:250px");
}

function categoryAppendChildTop(nodes)
{
	nodes.b.appendChild(nodes.bText);
	nodes.h3.appendChild(nodes.b);
	nodes.divLogo.appendChild(nodes.iAction);
	nodes.divLogo.appendChild(nodes.h3);
	nodes.aContact.appendChild(nodes.aContactText);
	nodes.aAction.appendChild(nodes.aActionText);
	nodes.aSubscribe.appendChild(nodes.aSubscribeText);
}

function categoryAppendChildDown(nodes)
{
	nodes.logo.appendChild(nodes.divLogo);
	nodes.logo.appendChild(nodes.category);
	nodes.logo.appendChild(nodes.aContact);
	nodes.logo.appendChild(nodes.aAction);
	nodes.logo.appendChild(nodes.aSubscribe);
}
