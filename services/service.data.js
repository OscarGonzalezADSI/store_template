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

function service_listItems(category, subcategory)
{
	let res = [];
	for(let i=0; data.length>i; i++)
	{
		if(data[i].category === category)
		{
			for(let ii=0; data[i].subcategories.length>ii; ii++)
			{
				if(data[i].subcategories[ii].subcategory === subcategory)
				{
					res = data[i].subcategories[ii].list;
				}
			}
			i = data.length;
		}
	}
	return res;
}

function service_countItems(category, subcategory)
{
	let res = 0;
	res = service_listItems(category, subcategory).length;
	return res;
}

function service_viewItems(category, subcategory)
{
	let list = [];
	list = service_listItems(category, subcategory);
	
	list.forEach(item => {
		products(item.ref, item.cost, item.promo, item.imageProduct);
    });
}
