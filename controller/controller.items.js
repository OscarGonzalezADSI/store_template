function controller_Items(itext, nodes, line)
{
	itemsNodes(itext, nodes);
	line.subCategory = itext.subcategory;
	itemsSetAttribute(nodes, line);
	itemsAppendChild(nodes);
}

function controller_itemsOnclick(category, subCategory)
{
	closeMenu();
	countItems(category, subCategory); 
	productsClean(); 
	service_viewItems(category, subCategory);
}


