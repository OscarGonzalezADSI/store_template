function view_categoryItems(itext, nodes, line)
{
	const a1divCategory = document.createElement("a");
	const a1divCategoryText = document.createTextNode(itext.subcategory);
	const iadivCategory = document.createElement("i");
	
	nodes.iadivCategory = iadivCategory;
	nodes.a1divCategory = a1divCategory;
	nodes.a1divCategoryText = a1divCategoryText;
	
	line.subCategory = itext.subcategory;
	
	setAttributeItems(nodes, "#"+itext.subcategory, line);
	appendChildItems(nodes);
}

function setAttributeItems(nodes, linkend, line)
{   
    nodes.iadivCategory.setAttribute("class", "fa fa-caret-right w3-margin-right");
    nodes.a1divCategory.setAttribute("class", "w3-bar-item w3-button w3-light-grey");
    nodes.a1divCategory.setAttribute("href", linkend);
    nodes.a1divCategory.setAttribute("onclick","countItems('"+line.category+"', '"+line.subCategory+"')");
}

function appendChildItems(nodes)
{
    nodes.a1divCategory.appendChild(nodes.iadivCategory);
    nodes.a1divCategory.appendChild(nodes.a1divCategoryText);
    nodes.divCategory.appendChild(nodes.a1divCategory);
}