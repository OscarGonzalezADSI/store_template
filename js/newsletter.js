const divNewsletter = document.createElement("div");
const divAnimateZoom = document.createElement("div");
const divWhiteBox = document.createElement("div");

const iDisplay = document.createElement("i");
const h2Title = document.createElement("h2");
const pNote = document.createElement("h2");
const formEmail = document.createElement("form");
const inputEmail = document.createElement("input");
const btnSubscribe = document.createElement("button");

const h2TitleText = document.createTextNode("NEWSLETTER");
const pNoteText = document.createTextNode("Join our mailing list to receive updates on new arrivals and special offers.");
const btnSubscribeText = document.createTextNode("Subscribe");

function newsletter()
{
	newsletterAppendChild();
	newsletterSetAttribute();
}

function newsletterAppendChild()
{
	h2Title.appendChild(h2TitleText);
	
	pNote.appendChild(pNoteText);
	
	btnSubscribe.appendChild(btnSubscribeText);

	formEmail.appendChild(inputEmail);
	formEmail.appendChild(btnSubscribe);

	divWhiteBox.appendChild(iDisplay);
	divWhiteBox.appendChild(h2Title);
	divWhiteBox.appendChild(pNote);
	divWhiteBox.appendChild(formEmail);

	divAnimateZoom.appendChild(divWhiteBox);
	
	divNewsletter.appendChild(divAnimateZoom);
	
	document.body.appendChild(divNewsletter);	
}

function newsletterSetAttribute()
{
	divNewsletter.setAttribute("id","newsletter");
	divNewsletter.setAttribute("class","w3-modal");

	divAnimateZoom.setAttribute("class","w3-modal-content w3-animate-zoom");
	divAnimateZoom.setAttribute("style","padding:32px");

	divWhiteBox.setAttribute("class","w3-container w3-white w3-center");

	iDisplay.setAttribute("onclick","controller_newsletterNone();");
	iDisplay.setAttribute("class","fa fa-remove w3-right w3-button w3-transparent w3-xxlarge");

	h2Title.setAttribute("class","w3-wide");

	inputEmail.setAttribute("class","w3-input w3-border");
	inputEmail.setAttribute("type","text");
	inputEmail.setAttribute("placeholder","Enter e-mail");

	btnSubscribe.setAttribute("type","button");
	btnSubscribe.setAttribute("class","w3-button w3-padding-large w3-red w3-margin-bottom");
	btnSubscribe.setAttribute("onclick","controller_newsletterNone();");
}

function newsletterBlock()
{
	document.getElementById('newsletter').style.display = 'block';
}

function newsletterNone()
{
	document.getElementById('newsletter').style.display = 'none';
}
