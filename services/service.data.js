function service_category(data)
{
    let count = 0;
    data.forEach(i => {
        view_category(i, count);
		count+=1;
	});
}

function service_categoryItems(nodes, line, i)
{
    i.subcategories.forEach(itext => {
		view_categoryItems(itext, nodes, line);
    });
}

function service_countItems(category, subcategory)
{
	let res = 0;
	for(let i=0; data.length>i; i++)
	{
		if(data[i].category === category)
		{
			for(let ii=0; data[i].subcategories.length>ii; ii++)
			{
				if(data[i].subcategories[ii].subcategory === subcategory)
				{
					res = data[i].subcategories[ii].list.length;
					ii = data[i].subcategories.length;
				}
			}
			i = data.length;
		}
	}
	return res;
}
