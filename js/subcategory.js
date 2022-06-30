function subcategoryNodes(i, nodes)
{
	const divCategory = document.createElement("div");
	const aCategory = document.createElement("a");
	const aCategoryText = document.createTextNode(i.category);
	const iaCategory = document.createElement("i");
	
	nodes.divCategory = divCategory;
	nodes.aCategory = aCategory;
	nodes.aCategoryText = aCategoryText;
	nodes.iaCategory = iaCategory;
}

function subCategorySetAttribute(nodes, count)
{
    nodes.divCategory.setAttribute("id", "demoAcc"+count);
    nodes.divCategory.setAttribute("class", "w3-bar-block w3-hide w3-padding-large w3-medium");
    nodes.aCategory.setAttribute("class","w3-button w3-block w3-white w3-left-align");
    nodes.aCategory.setAttribute("href","#topHeader");
    nodes.aCategory.setAttribute("onclick","myAccFunc('demoAcc"+count+"')");
    nodes.iaCategory.setAttribute("class", "fa fa-caret-down");
}

function subCategoryAppendChild(nodes)
{
    nodes.aCategory.appendChild(nodes.aCategoryText);
    nodes.aCategory.appendChild(nodes.iaCategory);
    nodes.category.appendChild(nodes.aCategory);
    nodes.category.appendChild(nodes.divCategory);
}
