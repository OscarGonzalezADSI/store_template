function service_items(nodes, line, i)
{
    i.subcategories.forEach(itext => {
		controller_items(itext, nodes, line);
    });
}

function service_items_count(category, subcategory)
{
	let res = 0;
	res = service_data_list(category, subcategory).length;
	return res;
}
