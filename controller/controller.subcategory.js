function controller_subcategory(i, nodes, count)
{
	const line = {};
	
	line.category = i.category;
	subcategoryNodes(i, nodes);
	
	service_items(nodes, line, i);
	
	subCategorySetAttribute(nodes, count);
	subCategoryAppendChild(nodes);
}
