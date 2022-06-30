function controller_category()
{
	const nodes = categoryNodes();
	categorySetAttributeClass(nodes);
	categorySetAttributeHref(nodes);
	categorySetAttributeOnclick(nodes);
	categorySetAttributeStyles(nodes);
	
	nodes.b.appendChild(nodes.bText);
	nodes.h3.appendChild(nodes.b);
	nodes.divLogo.appendChild(nodes.iAction);
	nodes.divLogo.appendChild(nodes.h3);
	nodes.aContact.appendChild(nodes.aContactText);
	nodes.aAction.appendChild(nodes.aActionText);
	nodes.aSubscribe.appendChild(nodes.aSubscribeText);

	service_category(nodes, data);

	nodes.logo.appendChild(nodes.divLogo);
	nodes.logo.appendChild(nodes.category);
	nodes.logo.appendChild(nodes.aContact);
	nodes.logo.appendChild(nodes.aAction);
	nodes.logo.appendChild(nodes.aSubscribe);	
}
