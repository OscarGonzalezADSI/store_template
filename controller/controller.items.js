function controller_items(itext, nodes, line)
{
	itemsNodes(itext, nodes);
	line.subCategory = itext.subcategory;
	itemsSetAttribute(nodes, line);
	itemsAppendChild(nodes);
}

function controller_itemsOnclick(category, subCategory)
{
	closeMenu();
	itemsCount(category, subCategory); 
	productsClean();
	service_product(category, subCategory);
}


