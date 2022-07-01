const divOverlay = document.getElementById("myOverlay");

divOverlay.setAttribute("class", "w3-overlay w3-hide-large");
divOverlay.setAttribute("onclick", "w3_close()");
divOverlay.setAttribute("style", "cursor:pointer");
divOverlay.setAttribute("title", "close side menu");

function myOverlayOpen()
{
    document.getElementById("myOverlay").style.display = "block";
}
 
function myOverlayClose()
{
    document.getElementById("myOverlay").style.display = "none";
}
