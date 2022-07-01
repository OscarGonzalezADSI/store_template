// Accordion 
function myAccFunc(demoAcc)
{
	var x = document.getElementById(demoAcc);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}

function w3_open()
{
    controller_mysidebar_open();
	controller_myoverlay_open();
}
 
function w3_close()
{
    controller_mysidebar_close();
	controller_myoverlay_close();
}

function closeMenu()
{
    controller_mysidebar_closeMenu();
}
