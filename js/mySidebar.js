function mySidebarOpen()
{
    document.getElementById("mySidebar").style.display = "block";
}
 
function mySidebarClose()
{
    document.getElementById("mySidebar").style.display = "none";
}

function mySidebarCloseMenu()
{
    document.getElementById("mySidebar").firstChild.firstChild.click();
}
