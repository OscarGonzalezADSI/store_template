function view_category(i, count)
{
	const divCategory = document.createElement("div");
	const aCategory = document.createElement("a");
	const aCategoryText = document.createTextNode(i.category);
	const iaCategory = document.createElement("i");

	const nodes = {};
	const line = {};		
	
	nodes.category = category;
	nodes.divCategory = divCategory;
	nodes.aCategory = aCategory;
	nodes.aCategoryText = aCategoryText;
	nodes.iaCategory = iaCategory;
	
	line.category = i.category;
	
	service_categoryItems(nodes, line, i);
	
	setAttributeCategory(nodes, count);
	appendChildCategory(nodes);
}

function setAttributeCategory(nodes, count)
{
    nodes.divCategory.setAttribute("id", "demoAcc"+count);
    nodes.divCategory.setAttribute("class", "w3-bar-block w3-hide w3-padding-large w3-medium");
    nodes.aCategory.setAttribute("class","w3-button w3-block w3-white w3-left-align");
    nodes.aCategory.setAttribute("href","javascript:void(0)");
    nodes.aCategory.setAttribute("onclick","myAccFunc('demoAcc"+count+"')");
    nodes.iaCategory.setAttribute("class", "fa fa-caret-down");
}

function appendChildCategory(nodes)
{
    nodes.aCategory.appendChild(nodes.aCategoryText);
    nodes.aCategory.appendChild(nodes.iaCategory);
    nodes.category.appendChild(nodes.aCategory);
    nodes.category.appendChild(nodes.divCategory);
}
