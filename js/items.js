function itemsNodes(itext, nodes)
{
	const a1divCategory = document.createElement("a");
	const a1divCategoryText = document.createTextNode(itext.subcategory);
	const iadivCategory = document.createElement("i");
	
	nodes.a1divCategory = a1divCategory;
	nodes.a1divCategoryText = a1divCategoryText;
	nodes.iadivCategory = iadivCategory;
}

function itemsSetAttribute(nodes, line)
{   
    nodes.iadivCategory.setAttribute("class", "fa fa-caret-right w3-margin-right");
    nodes.a1divCategory.setAttribute("class", "w3-bar-item w3-button w3-light-grey");
    nodes.a1divCategory.setAttribute("href", "#countItems");
    nodes.a1divCategory.setAttribute("onclick","closeMenu(); countItems('"+line.category+"', '"+line.subCategory+"'); productsClean(); service_viewItems('"+line.category+"', '"+line.subCategory+"');");
}

function itemsAppendChild(nodes)
{
    nodes.a1divCategory.appendChild(nodes.iadivCategory);
    nodes.a1divCategory.appendChild(nodes.a1divCategoryText);
    nodes.divCategory.appendChild(nodes.a1divCategory);
}
