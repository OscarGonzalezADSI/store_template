function controller_category()
{
	const nodes = categoryNodes();
	
	categorySetAttributeClass(nodes);
	categorySetAttributeStyles(nodes);
	categorySetAttributeHref(nodes);
	categorySetAttributeOnclick(nodes);
	categoryAppendChildTop(nodes);
	
	service_category(nodes, data);
	
	categoryAppendChildDown(nodes);	
}
