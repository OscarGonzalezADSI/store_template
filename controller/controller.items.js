function controller_Items(itext, nodes, line)
{
	itemsNodes(itext, nodes);
	line.subCategory = itext.subcategory;
	itemsSetAttribute(nodes, line);
	itemsAppendChild(nodes);
}
