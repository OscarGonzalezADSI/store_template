// Accordion 
function myAccFunc(demoAcc) {
  var x = document.getElementById(demoAcc);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function selectFirstSubcategory(idSubcategory)
{
	document.getElementById(idSubcategory).firstChild.click();
}

function controller_category()
{
	b.appendChild(bText);
	h3.appendChild(b);
	divLogo.appendChild(iAction);
	divLogo.appendChild(h3);
	aContact.appendChild(aContactText);
	aAction.appendChild(aActionText);
	aSubscribe.appendChild(aSubscribeText);

    service_category(data);

	logo.appendChild(divLogo);
	logo.appendChild(category);
	logo.appendChild(aContact);
	logo.appendChild(aAction);
	logo.appendChild(aSubscribe);	
}
