function countItems(category, subcategory)
{
	const divCount = document.getElementById("countItems");
	const pdivCount = document.createElement("p");
	const pdivCountText = document.createTextNode(service_countItems(category, subcategory)+" items");
	
	divCount.setAttribute("class", "w3-container w3-text-grey");
	divCount.innerHTML = "";
	pdivCount.appendChild(pdivCountText);
	divCount.appendChild(pdivCount);	
}
